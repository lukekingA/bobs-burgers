<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Order Navigator</h1>
      </div>
    </div>
    <!-- CARD ROW -->
    <div class="row">
      <!-- ORDERS CARD -->
      <div class="col-4 mt-3">
        <div class="card text-center">
          <div class="card-header tab-card-header">
            <h4>Orders</h4>
          </div>
          <div class="card-body scrollingBox">
            <p @click="getMealsByOrderId(order._id)" v-for="order in passedOrders"
              class="card-text d-flex justify-content-between order">
              <span>{{order.orderIdentifer}}</span>
              <span>{{order.updatedAt | dateFormat}}</span>
              <span>{{order.price.toFixed(2)}}</span>
            </p>
          </div>
        </div>
        <!-- SEARCHBAR -->

      </div>
      <!-- MEALS CARD -->
      <div class="col-4">
        <div class="card mt-3 tab-card">
          <div class="card-header tab-card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One"
                  aria-selected="true">Meals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two"
                  aria-selected="false">Drinks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three"
                  aria-selected="false">Entrees</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="Four"
                  aria-selected="false">Sides</a>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="scrollingBox tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
              <h5>Meals in Order</h5>
              <div v-for="(meal, index) in meals"
                class="card-text p-1 mt-2 border-bottom border-right border-secondary rounded">
                <p class="mb-0">{{index + 1}}.</p>
                <ul class="mb-0">
                  <li v-for="drink in drinks" v-if="drink.mealId == meal._id"><small>{{drink.name}}</small></li>
                </ul>
                <ul class="mb-0">
                  <li v-for="side in sides" v-if="side.mealId == meal._id"><small>{{side.name}}</small></li>
                </ul>
                <ul class="mb-0">
                  <li v-for="entree in entrees" v-if="entree.mealId == meal._id"><small>{{entree.name}}</small></li>
                </ul>

                <div class="d-flex justify-content-between border-top border-secondary">
                  <small>Meal total:</small>
                  <span>${{meal.price.toFixed(2)}}</span>
                </div>
              </div>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
              <div v-for="(drink, index) in drinks" class="card-text d-flex justify-content-between mt-2">
                <span>{{index + 1}}. {{drink.name}}</span>
                <span>${{drink.price.toFixed(2)}}</span></div>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
              <div v-for="(entree, index) in entrees" class="card-text d-flex justify-content-between mt-2">
                <span>{{index + 1}}. {{entree.name}}</span>
                <span>${{entree.price.toFixed(2)}}</span></div>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="four" role="tabpanel" aria-labelledby="four-tab">
              <div v-for="(side, index) in sides" class="card-text d-flex justify-content-between mt-2">
                <span>{{index + 1}}.
                  {{side.name}}</span>
                <span>${{side.price.toFixed(2)}}</span></div>
            </div>
            <div class="card-footer text-muted">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Moment from 'moment'
  export default {
    name: 'order-navigator',
    props: [
      "passedOrders"
    ],
    data() {
      return {}
    },
    computed: {
      meals() {
        return this.$store.state.mealsByOrderId
      },
      drinks() {
        return this.$store.state.drinksByOrderId
      },
      entrees() {
        return this.$store.state.entreesByOrderId
      },
      sides() {
        return this.$store.state.sidesByOrderId
      }
    },
    mounted() {},
    methods: {
      getMealsByOrderId(orderId) {
        this.$store.dispatch('getMealsByOrderId', orderId)
        this.$store.dispatch('getDrinksByOrderId', orderId)
        this.$store.dispatch('getEntreesByOrderId', orderId)
        this.$store.dispatch('getSidesByOrderId', orderId)
      }
    },
    filters: {
      dateFormat: function (date) {
        return Moment(date).format('MM-DD-YY hh:mm')
      }
    },
    components: {},
  }
</script>


<style scoped>
  .scrollingBox {
    height: 40vh;
    overflow-y: auto;
  }

  .order {
    cursor: pointer;
    color: blue;
  }

  .order:hover {
    color: #00c6d7;

  }

  .colorMe {
    background-color: #e3e3e3;
  }

  .fas {
    font-size: 20px
  }
</style>