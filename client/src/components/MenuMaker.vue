<template>
  <div class="menu-maker">
    <div class="row">
      <div class="col-6">
        <div class="dropdown mb-3">
          <button class="btn btn-secondary drop-shadow dropdown-toggle border-light" type="button" id="dropdownMenu1"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add Menu Item</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <span class="dropdown-item hover border-bottom" @click="menuType = 'entree'">Entree</span>
            <span class="dropdown-item hover border-bottom" @click="menuType = 'drink'">Drink</span>
            <span class="dropdown-item hover" @click="menuType = 'side'">Side</span>
          </div>
        </div>
        <div v-show="menuType == 'entree'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Entrees</H6>
            <div class="d-flex flex-column">
              <input class="rounded pl-3 mr-1 mb-2" type="text" v-model="menuItemName" placeholder="name">
              <input class="rounded pl-3 mr-1 mb-2" type="text" v-model="menuItemPrice" placeholder="price">
            </div>
            <div v-for="(item, index) in entreeItems">
              <div class="d-flex align-items-baseline">
                <input type="checkbox" :id="item.name" v-model="currentEntreeItems[index]" :value="item">
                <div>
                  <input class="rounded ml-3 pl-1" type="number" placeholder="0" min="1"
                    v-model="currentEntreeItemsCount[index]">
                </div>
                <label class="ml-2 text-light" :for="item.name">{{item.name}}</label>
              </div>
            </div>
            <input type="checkbox" id="activateItem" value="true" v-model="entreeItemActive">
            <label class="ml-2 px-2 rounded text-light border-top border-right" for="activateItem">
              Active Menu
              Item
            </label>
            <button @click="addEntree" class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1">Submit</button>
          </div>
          <div class="col-6">
            <div v-if="newEntree.name" class="text-left">
              <div class="card border border-dark">
                <div class="card-body">
                  <h4 class="card-title">{{newEntree.name}}</h4>
                  <p>Price: ${{newEntree.price}}</p>
                  <p>In Current Menu: {{newEntree.active}}</p>
                  <p>Current special: {{newEntree.special}}</p>
                  <p>Ingredients:</p>
                  <ul class="pl-1">
                    <li v-for="item in newEntree.components">{{item.name}} for $ {{item.cost}}</li>
                  </ul>
                  <div class="d-flex justify-content-around border-top pt-2">
                    <button @click="clearNewEntree" class="btn btn-sm text-success bg-light border-dark mr-3 shadow"><i
                        class="fas fa-check"></i></button>
                    <button @click="deleteEntree(newEntree._id)"
                      class="btn btn-sm text-danger bg-light border-dark shadow"><i class="fas fa-times"></i></button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- DRINKS!!!!!! -->
        <div v-show="menuType == 'drink'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Drinks</H6>
            <input class="rounded pl-3 mr-1 mb-2" type="text" v-model="menuItemName" placeholder="name">
            <input class="rounded pl-3 mr-1 mb-2" type="number" v-model="menuItemPrice" placeholder="price">
            <div>
              <input type="radio" id="sizes" value="-1" v-model="menuItemSize">
              <label class="ml-1" for="sizes">Small</label>
            </div>
            <div>
              <input type="radio" id="sizem" value="0" v-model="menuItemSize">
              <label class="ml-1" for="sizem">Medium</label>
            </div>
            <div>
              <input type="radio" id="sizel" value="1" v-model="menuItemSize">
              <label class="ml-1" for="sizel">Large</label>
            </div>
            <input type="checkbox" id="activateDrink" value="true" v-model="entreeItemActive">
            <label class="ml-2 px-2 rounded text-light border-top border-right" for="activateDrink">
              Active Menu
              Item
            </label>
            <button @click="addDrink" class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1">Submit</button>
          </div>
        </div>

        <!-- SIDES -->
        <div v-show="menuType == 'side'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Sides</H6>
            <input class="rounded pl-3 mr-1 mb-2" type="text" v-model="menuItemName" placeholder="name">
            <input class="rounded pl-3 mr-1 mb-2" type="number" v-model="menuItemPrice" placeholder="price">
            <div>
              <input type="radio" id="sizeS" value="-1" v-model="menuItemSize">
              <label class="ml-1" for="sizeS">Small</label>
            </div>
            <div>
              <input type="radio" id="sizeM" value="0" v-model="menuItemSize">
              <label class="ml-1" for="sizeM">Medium</label>
            </div>
            <div>
              <input type="radio" id="sizeL" value="1" v-model="menuItemSize">
              <label class="ml-1" for="sizeL">Large</label>
            </div>
            <input type="checkbox" id="activateSide" value="true" v-model="entreeItemActive">
            <label class="ml-2 px-2 rounded text-light border-top border-right" for="activateSide">
              Active Menu
              Item
            </label>
            <button @click="addSide" class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1">Submit</button>
          </div>
        </div>
        <!-- Sides Ends -->
        <!-- Add Ingredient -->
      </div>
      <!-- Sides Ends -->
      <div class="col-6">
        <div class="add-entree-item row">
          <div class="col-6">
            <div class="mb-3">
              <button @click="addIngredient = !addIngredient"
                class="btn rounded drop-shadow bg-secondary dropdown-toggle text-light border border-light mb-3">
                Add
                Ingredient
              </button>
              <div v-show="addIngredient">
                <h6>Ingredients</h6>
                <form class="mt-2" @submit.prevent="addEntreeItem">
                  <div class="d-flex flex-column">
                    <input class="rounded pl-3 mb-2" type="text" placeholder="name" v-model="entreeItemName">
                    <input class="rounded pl-3 mb-2" type="text" placeholder="cost" v-model="entreeItemCost">
                  </div>
                  <button type="submit" class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1">Submit</button>
                </form>
              </div>
            </div>
            <div>
              <button @click="addComments = !addComments"
                class="btn rounded drop-shadow bg-secondary dropdown-toggle text-light border border-light mb-4">
                Add
                Comments
              </button>
              <div v-show="addComments">
                <h6>Comments</h6>
                <form class="mt-2" @submit.prevent="addComment">
                  <div class="d-flex flex-column">
                    <input class="rounded pl-3 mb-2" type="text" placeholder="comment" v-model="commentName">
                  </div>
                  <button type="submit" class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- new comments -->

      <!-- end of comments -->
    </div>
  </div>
</template>


<script>
  export default {
    name: "menu-maker",
    data() {
      return {
        addIngredient: false,
        menuType: "",
        menuItemName: "",
        menuItemSize: "",
        menuItemPrice: "",
        picked: "",
        components: "",
        entreeItemName: "",
        entreeItemCost: 0,
        entreeItemActive: false,
        currentEntreeItems: [],
        currentEntreeItemsCount: []
      };
    },
    computed: {
      entreeItems() {
        return this.$store.state.entreeItems;
      },
      newEntree() {
        return this.$store.state.newEntree
      },
      comments() {
        return this.$store.state.comments;
      }
    },
    mounted() {
      this.$store.dispatch("getEntreeItems");
      this.$store.dispatch("getComments");
    },
    methods: {
      fieldReset() {
        // this.menuType = ''
        this.menuItemName = "";
        this.menuItemPrice = "";
      },
      addEntreeItem() {
        let data = {
          name: this.entreeItemName,
          cost: this.entreeItemCost
        };
        this.$store.dispatch("addEntreeItem", data);


        // export default {
        //   name: "menu-maker",

        //   data() {
        //     return {
        //       addIngredient: false,
        //       addComments: false,
        //       commentName: "",
        //       menuType: "",
        //       menuItemName: "",
        //       menuItemSize: "",
        //       menuItemPrice: "",
        //       picked: "",
        //       components: "",
        //       entreeItemName: "",
        //       entreeItemCost: 0,
        //       entreeItemActive: false,
        //       currentEntreeItems: [],
        //       currentEntreeItemsCount: []
        //     };
        //   },
        //   computed: {
        //     entreeItems() {
        //       return this.$store.state.entreeItems;
        //       return this.$store.state.comments;
        //     }
        //   },
        //   mounted() {
        //     this.$store.dispatch("getEntreeItems");
        //     this.$store.dispatch("getComments");
        //   },

        //   methods: {
        //     fieldReset() {
        //       this.menuType = "";
        //       this.menuItemName = "";
        //       this.menuItemPrice = "";
        //     },
        //     addEntreeItem() {
        //       let data = {
        //         name: this.entreeItemName,
        //         cost: this.entreeItemCost
        //       };
        //       this.$store.dispatch("addEntreeItem", data);




        this.entreeItemName = "";
        this.entreeItemCost = 0;
      },
      addEntree() {
        let comp = []
        this.entreeItems.forEach((item, index) => {
          if (this.currentEntreeItems[index]) {
            let loop = this.currentEntreeItemsCount[index]
            if (!loop) {
              loop = 1
            }
            for (let i = 0; i < loop; i++) {
              comp.push(item);
            }
          }
        });
        let data = {
          entree: {
            name: this.menuItemName,
            price: this.menuItemPrice,
            active: this.entreeItemActive
          },
          entreeItems: {
            components: comp
          }
        };
        this.$store.dispatch("addEntree", data);
        this.fieldReset()
        this.currentEntreeItems = [];
        this.currentEntreeItemsCount = [];
        this.entreeItemActive = false;
      },
      deleteEntree(id) {
        this.$store.dispatch('deleteEntree', id)
        this.menuType = ''
      },

      clearNewEntree() {
        this.$store.dispatch('clearNewEntree')
        this.menuType = ''
      },
      addDrink() {
        let data = {
          name: this.menuItemName,
          size: this.menuItemSize,
          price: this.menuItemPrice,
          active: this.entreeItemActive
        };
        this.$store.dispatch("addDrink", data);
        this.fieldReset();
        this.menuItemSize = "";
        this.entreeItemActive = false;
      },
      addSide() {
        let data = {
          name: this.menuItemName,
          size: this.menuItemSize,
          price: this.menuItemPrice,
          active: this.entreeItemActive
        };
        this.$store.dispatch("addSide", data);
        this.fieldReset();
        this.menuItemSize = "";
        this.entreeItemActive = false;
      },
      addComment() {
        let data = {
          comment: this.commentName
        };
        this.$store.dispatch("addComment", data);

        this.commentName = "";
      }
    },

    components: {}
  };
</script>


<style scoped>
  .dropdown-item:hover {
    cursor: pointer;
  }

  input[type="number"] {
    width: 40px;
    height: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  li {
    list-style: none;
  }
</style>