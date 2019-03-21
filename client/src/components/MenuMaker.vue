<template>
  <div class="menu-maker">
    <div class="row">
      <div class="col-6">
        <div class="dropdown mb-3">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Add Menu Item</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <span class="dropdown-item hover border-bottom" @click="menuType = 'entree'">Entree</span>
            <span class="dropdown-item hover border-bottom" @click="menuType = 'drink'">Drink</span>
            <span class="dropdown-item hover" @click="menuType = 'side'">Side</span>
          </div>
        </div>
        <div v-show="menuType == 'entree'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Entrees</H6>
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="text"
              v-model="menuItemName"
              placeholder="name"
            >
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="text"
              v-model="menuItemPrice"
              placeholder="price"
            >
            <div v-for="(item, index) in entreeItems">
              <div class="d-flex align-items-baseline">
                <input
                  type="checkbox"
                  :id="item.name"
                  v-model="currentEntreeItems[index]"
                  :value="item"
                >
                <label class="ml-2 text-light" :for="item.name">{{item.name}}</label>

                <div>
                  <input
                    class="rounded ml-3 pl-1"
                    type="number"
                    placeholder="0"
                    v-model="currentEntreeItemsCount[index]"
                  >
                </div>
              </div>
            </div>
            <input type="checkbox" id="activateItem" value="true" v-model="entreeItemActive">
            <label class="ml-2 px-2 rounded text-light border-top border-right" for="activateItem">
              Active Menu
              Item
            </label>
            <button
              @click="addEntree"
              class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1"
            >Submit</button>
          </div>
        </div>
        <!-- DRINKS!!!!!! -->
        <div v-show="menuType == 'drink'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Drinks</H6>
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="text"
              v-model="menuItemName"
              placeholder="name"
            >
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="number"
              v-model="menuItemPrice"
              placeholder="price"
            >
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
            <button
              @click="addDrink"
              class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1"
            >Submit</button>
          </div>
        </div>

        <!-- SIDES -->
        <div v-show="menuType == 'side'" class="row">
          <div class="col-6">
            <H6 class="ml-2">Sides</H6>
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="text"
              v-model="menuItemName"
              placeholder="name"
            >
            <input
              class="rounded pl-3 mr-1 mb-2"
              type="number"
              v-model="menuItemPrice"
              placeholder="price"
            >
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
            <button
              @click="addSide"
              class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1"
            >Submit</button>
          </div>
        </div>
        <!-- Sides Ends -->
      </div>
      <div class="col-6">
        <div class="add-entree-item row">
          <div class="col-6">
            <H6 class="ml-2">Add Entree Items</H6>
            <form class @submit.prevent="addEntreeItem">
              <input
                class="rounded pl-3 mb-2"
                type="text"
                placeholder="name"
                v-model="entreeItemName"
              >
              <input
                class="rounded pl-3 mb-2"
                type="text"
                placeholder="cost"
                v-model="entreeItemCost"
              >
              <button
                type="submit"
                class="btn bg-dark border-dark text-light btn-sm ml-2 mt-1"
              >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "menu-maker",
  data() {
    return {
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
    }
  },
  mounted() {
    this.$store.dispatch("getEntreeItems");
  },
  methods: {
    addEntreeItem() {
      let data = {
        name: this.entreeItemName,
        cost: this.entreeItemCost
      };
      this.$store.dispatch("addEntreeItem", data);

      this.entreedItemName = "";
      this.entreeItemCost = 0;
    },
    addEntree() {
      let comp = this.entreeItems.filter((item, index) => {
        if (this.currentEntreeItems[index]) {
          return item;
        }
      });
      let component = [];
      comp.forEach((item, index) => {
        for (let i = 0; i < this.currentEntreeItemsCount[index]; i++) {
          component.push(item);
        }
      });
      let data = {
        entree: {
          name: this.menuItemName,
          price: this.menuItemPrice,
          active: this.entreeItemActive
        },
        entreeItems: {
          components: component
        }
      };
      this.$store.dispatch("addEntree", data);
      this.menuItemName = "";
      this.menuItemPrice = "";
      this.currentEntreeItems = [];
      this.currentEntreeItemsCount = [];
      this.entreeItemActive = false;
    },
    addDrink() {
      let data = {
        name: this.menuItemName,
        size: this.menuItemSize,
        price: this.menuItemPrice,
        active: this.entreeItemActive
      };
      this.$store.dispatch("addDrink", data);
      this.menuItemName = "";
      this.menuItemSize = "";
      this.menuItemPrice = "";
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
      this.menuItemName = "";
      this.menuItemSize = "";
      this.menuItemPrice = "";
      this.entreeItemActive = false;
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
</style>