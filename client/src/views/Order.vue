<template>
  <div class="Order h-100">
    <div class="mt-2" v-if="!employeeLogedIn.name">
      <div class="d-flex align-items-baseline justify-content-center">
        <input class="rounded pl-1 mr-2" type="text" v-model="employeeName" placeholder="name">
        <input class="rounded pl-1 mr-2" type="password" v-model="employeeCode" placeholder="code">
        <button @click="employeeRegister" class="btn btn-sm border border-light bg-secondary text-light">Register Sign
          In</button>
      </div>
    </div>
    <div class="h-100" v-if="employeeLogedIn.name">
      <div class="row h-75">
        <div class="col text-center mt-5" v-show="!ordering">
          <button @click="newOrder" class="btn bg-secondary border border-light text-light drop-shadow">New
            Order</button>
        </div>
        <div class="col" v-show="ordering">
          <div class="row h-100">
            <div class="col-3 d-flex mt-3 flex-column align-items-start">

              <button @click="switchView('sandwichDropdown')"
                class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Meal</button>

              <button @click="switchView('sideDropdown')"
                class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Sides</button>
              <button @click="switchView('drinkDropdown')"
                class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Drink</button>
              <button @click="switchView('commentDropdown')"
                class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Comments</button>
              <button @click="switchView('specialDropdown')"
                class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Specials</button>
            </div>
            <div class="col-3 mt-3">
              <dropdown-sandwiches v-show="sandwichDropdown" @orderSandwichSelect="setCurrentMealSandwich">
              </dropdown-sandwiches>
              <dropdown-sides @orderSideSelect="setCurrentMealSide" v-show="sideDropdown"></dropdown-sides>
              <dropdown-drinks @orderDrinkSelect="setCurrentMealDrink" v-show="drinkDropdown"></dropdown-drinks>
              <dropdown-comments @currentComments="setCurrentComment" v-show="commentDropdown"></dropdown-comments>
              <dropdown-specials v-show="specialDropdown"></dropdown-specials>
            </div>
            <div class="col-3">
              <div class="card h-75 mt-3">
                <div class="card-body">
                  <div class="d-flex flex-column justify-content-between h-100">
                    <div>
                      <h5 class="mt-2 text-center">Meal</h5>
                      <ul class="pl-1">
                        <li v-for="(item,key) in curMealFilter" :key="'meal'+item+key">
                          <div @click="removeMenuItem(key)" class="d-flex justify-content-between">
                            {{item.name}}
                            <span>${{parseFloat(item.price).toFixed(2)}}</span></div>
                        </li>
                        <li @click="remLocalCom" v-if="currentMeal.comment">{{currentMeal.comment}}</li>
                      </ul>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between"><span
                          class="font-weight-bold">total</span><span>{{(mealTotal).toFixed(2)}}</span>
                      </div>
                      <div class="mt-2 d-flex justify-content-between">
                        <button @click="makeMealCombo" :disabled="!allowCombo"
                          class="btn btn-secondary shadow border-dark">Combo</button>
                        <button @click="addToOrder" class="btn btn-secondary shadow border-dark">Add to Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card h-100 mt-3">
                <div class="card-body">
                  <div class="d-flex flex-column justify-content-between h-100 overflow-auto">
                    <div>
                      <div>
                        <h5 class="text-center">Order</h5>
                      </div>
                      <input class="rounded pl-1" type="text" v-model="orderIdentifer" placeholder="customer name">
                      <div class="mt-1">
                        <ul class="pl-1">
                          <li class="pl-1" v-for="(item,index) in currentOrder" :key="item +index">

                            <div class="text-left">
                              <p class="mb-1">{{item.sandwich.name}}</p>
                              <p class="mb-1">{{item.side.name}}</p>
                              <p class="mb-1">{{item.drink.name}}</p>
                              <p class="mb-1">{{item.comment}}</p>
                            </div>
                            <p class="text-right">{{item.price.toFixed(2)}}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between">
                        <span>subtotal</span><span>{{orderTotal.toFixed(2)}}</span></div>
                      <div class="d-flex justify-content-between">
                        <span>tax</span><span>{{(orderTotal * .06).toFixed(2)}}</span></div>
                      <div class="d-flex justify-content-between"><span
                          class="font-weight-bold">total</span><span>{{(orderTotal * 1.06).toFixed(2)}}</span>
                      </div>
                      <div class="mt-2 d-flex justify-content-between">
                        <button @click="submitOrder" class="btn btn-secondary shadow border-dark">Submit Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import DropdownSandwiches from "@/components/Dropdowns/DropdownSandwiches.vue";
  import DropdownDrinks from "@/components/Dropdowns/DropdownDrinks.vue";
  import DropdownSides from "@/components/Dropdowns/DropdownSides.vue";
  import DropdownComments from "@/components/Dropdowns/DropdownComments.vue";
  import DropdownSpecials from "@/components/Dropdowns/DropdownSpecials.vue"
  export default {
    name: "Order",
    props: [],
    data() {
      return {
        ordering: false,
        sandwichDropdown: true,
        sideDropdown: false,
        drinkDropdown: false,
        commentDropdown: false,
        specialDropdown: false,
        currentMeal: {
          sandwich: {},
          drink: {},
          side: {},
          comment: '',
          combo: false
        },
        orderIdentifer: '',
        employeeName: '',
        employeeCode: '',

      };
    },
        computed: {
            curMealFilter() {
                let out = {}
                for (let key in this.currentMeal) {
                    if (this.currentMeal[key].name) {
                        out[key] = this.currentMeal[key]
                    }
                }
                return out
            },
      mealTotal() {
        let sandwich = 0
        let drink = 0
        let side = 0
        if (this.currentMeal.sandwich.price) {
          sandwich = this.currentMeal.sandwich.price
        }
        if (this.currentMeal.drink.price) {
          drink = this.currentMeal.drink.price
        }
        if (this.currentMeal.side.price) {
          side = this.currentMeal.side.price
        }
        let result = sandwich + drink + side
        if (this.currentMeal.combo) {
          result *= .85
        }
        return result
      },
      currentOrder() {
        return this.$store.state.currentOrder
      },
      orderId() {
        return this.$store.state.buildingOrder
      },
      orderTotal() {
        let total = 0
        this.$store.state.currentOrder.forEach(m => {
          total += m.price
        })
        return total
      },
      employeeLogedIn() {
        return this.$store.state.employee
      },

      allowCombo() {
        if (
          this.currentMeal.sandwich.name &&
          this.currentMeal.drink.name &&
          this.currentMeal.side.name
        ) {
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      switchView(selection) {
        let shows = [
          "sandwichDropdown",
          "sideDropdown",
          "drinkDropdown",
          "commentDropdown",
          "specialDropdown"
        ];
        let newthis = this;
        shows.forEach(j => (newthis[j] = false));
        this[selection] = true;
      },
      setCurrentMealSandwich(sandwich) {
        this.currentMeal.sandwich = sandwich
      },
      setCurrentMealSide(side) {
        this.currentMeal.side = side
      },
      setCurrentMealDrink(drink) {
        this.currentMeal.drink = drink
      },
      setCurrentComment(comment) {
        this.currentMeal.comment = comment
      },
      addToOrder() {
        let data = this.currentMeal
          data.price = this.mealTotal
          data.orderTotal = {price: this.orderTotal }
        delete data.combo
        this.$store.dispatch('addToOrder', data)
        this.currentMeal = {
          sandwich: {},
          drink: {},
          side: {},
          comment: '',
          combo: false
        }
      },
      makeMealCombo() {
        this.currentMeal.combo = true
      },
      removeMenuItem(key) {
        this.currentMeal[key] = {}
      },
      remLocalCom() {
        this.$root.$emit('removeComment')
      },
      newOrder() {
        let data = {
          employeeId: this.employeeLogedIn.name + '-' + this.employeeLogedIn.code
        }
        this.$store.dispatch('makeOrder', data)
        this.ordering = true
      },
        submitOrder() {
            let data = {
                price: this.orderTotal
            }
          this.$store.dispatch('editOrder',data)
      },
      employeeRegister() {
        let data = {
          name: this.employeeName,
          code: this.employeeCode
        }
        this.$store.dispatch('employeeRegister', data)
        this.employeeName = ''
        this.employeeCode = ''
      },
    },
    watch: {},
    components: {
      DropdownSandwiches,
      DropdownSides,
      DropdownDrinks,
      DropdownComments,
      DropdownSpecials
    }
  }
</script>

<style scoped>
  .button-width {
    width: 200px;
  }
</style>