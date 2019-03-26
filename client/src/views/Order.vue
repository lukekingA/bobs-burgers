<template>
  <div class="Order h-100">
    <div class="row h-75">
      <div class="col-3 d-flex mt-3 flex-column align-items-start">
        <button
          @click="switchView('sandwichDropdown')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >Meal</button>

        <button
          @click="switchView('sideDropdown')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >Sides</button>
        <button
          @click="switchView('drinkDropdown')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >Drink</button>
        <button
          @click="switchView('commentDropdown')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >Comments</button>
        <button
          @click="switchView('specialDropdown')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >Specials</button>
      </div>
      <div class="col-3 mt-3">
        <dropdown-sandwiches
          v-show="sandwichDropdown"
          @orderSandwichSelect="setCurrentMealSandwich"
        ></dropdown-sandwiches>
        <dropdown-sides @orderSideSelect="setCurrentMealSide" v-show="sideDropdown"></dropdown-sides>
        <dropdown-drinks @orderDrinkSelect="setCurrentMealDrink" v-show="drinkDropdown"></dropdown-drinks>
        <dropdown-comments v-show="commentDropdown"></dropdown-comments>
        <dropdown-specials v-show="specialDropdown"></dropdown-specials>
      </div>
      <div class="col-3">
        <div class="card h-75 mt-3">
          <div class="card-body">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <h5 class="mt-2 text-center">Meal</h5>
                <ul class="pl-1">
                  <li v-if="item.name" v-for="(item,key) in currentMeal">
                    <div @click="removeMenuItem(key)" class="d-flex justify-content-between">
                      {{item.name}}
                      <span>${{parseFloat(item.price).toFixed(2)}}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <!-- <div class="d-flex justify-content-between">
                  <span>subtotal</span><span>{{(mealTotal).toFixed(2)}}</span></div>
                <div class="d-flex justify-content-between">
                <span>tax</span><span>{{(mealTotal * .06).toFixed(2)}}</span></div>-->
                <div class="d-flex justify-content-between">
                  <span class="font-weight-bold">total</span>
                  <span>{{(mealTotal).toFixed(2)}}</span>
                </div>
                <div class="mt-2 d-flex justify-content-between">
                  <button
                    @click="makeMealCombo"
                    :disabled="!allowCombo"
                    class="btn btn-secondary shadow border-dark"
                  >Combo</button>
                  <button
                    @click="addToOrder"
                    class="btn btn-secondary shadow border-dark"
                  >Add to Order</button>
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
                <input
                  class="rounded pl-1"
                  type="text"
                  v-model="orderIdentifer"
                  placeholder="customer name"
                >
                <div class="mt-1">
                  <ul class="pl-1">
                    <li class="pl-1" v-for="meal in currentOrder">
                      <div class="text-left">
                        <p class="mb-1">{{meal.sandwich.name}}</p>
                        <p class="mb-1">{{meal.side.name}}</p>
                        <p class="mb-1">{{meal.drink.name}}</p>
                      </div>
                      <p class="text-right">{{meal.price.toFixed(2)}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>subtotal</span>
                  <span>{{orderTotal.toFixed(2)}}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>tax</span>
                  <span>{{(orderTotal * .06).toFixed(2)}}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="font-weight-bold">total</span>
                  <span>{{(orderTotal * 1.06).toFixed(2)}}</span>
                </div>
                <div class="mt-2 d-flex justify-content-between">
                  <button
                    @click="submitOrder"
                    class="btn btn-secondary shadow border-dark"
                  >Submit Order</button>
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
import DropdownSpecials from "@/components/Dropdowns/DropdownSpecials.vue";
export default {
  name: "Order",
  props: [],
  data() {
    return {
      sandwichDropdown: true,
      sideDropdown: false,
      drinkDropdown: false,
      commentDropdown: false,
      specialDropdown: false,
      currentMeal: {
        sandwich: {},
        drink: {},
        side: {},
        combo: false
      },
      orderIdentifer: ""
    };
  },
  computed: {
    mealTotal() {
      let sandwich = 0;
      let drink = 0;
      let side = 0;
      if (this.currentMeal.sandwich.price) {
        sandwich = this.currentMeal.sandwich.price;
      }
      if (this.currentMeal.drink.price) {
        drink = this.currentMeal.drink.price;
      }
      if (this.currentMeal.side.price) {
        side = this.currentMeal.side.price;
      }
      let result = sandwich + drink + side;
      if (this.currentMeal.combo) {
        result *= 0.85;
      }
      return result;
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
    currentOrder() {
      return this.$store.state.currentOrder;
    },
    orderTotal() {
      let total = 0;
      this.currentOrder.forEach(m => {
        total += m.price;
      });
      return total;
    }
  },
  watch: {},
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
      this.currentMeal.sandwich = sandwich;
    },
    setCurrentMealSide(side) {
      this.currentMeal.side = side;
    },
    setCurrentMealDrink(drink) {
      this.currentMeal.drink = drink;
    },
    addToOrder() {
      let data = this.currentMeal;
      data.price = this.mealTotal;
      this.$store.dispatch("addToOrder", this.currentMeal);
      this.currentMeal = {
        sandwich: {},
        drink: {},
        side: {},
        combo: false
      };
    },
    makeMealCombo() {
      this.currentMeal.combo = true;
    },
    removeMenuItem(key) {
      this.currentMeal[key] = {};
    },
    submitOrder() {}
  },
  components: {
    DropdownSandwiches,
    DropdownSides,
    DropdownDrinks,
    DropdownComments,
    DropdownSpecials
  }
};
</script>

<style scoped>
.button-width {
  width: 200px;
}
</style>