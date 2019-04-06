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
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Orders</a>
              </li>
            </ul>
          </div>
          <div class="card-body scrollingBox">
            <h5 @click="getMealsByOrderId(order._id)" v-for="order in passedOrders" class="card-text d-flex">{{order.price}}</h5>
          </div>
          <div class="card-footer text-muted">
          </div>
        </div>
        <!-- SEARCHBAR -->
        <form class="pt-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <!-- PREPEND -->
              <div class="input-group-prepend">
                <button class="btn dropdown-toggler colorMe" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-sort-down"></i></button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Employee Id</a>
                  <a class="dropdown-item" href="#">Manager Id</a>
                  <!-- <div role="separator" class="dropdown-divider"></div> -->
                  <!-- <a class="dropdown-item" href="#">Separated link</a> -->
                </div>
              </div>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            <button><i class="fas fa-search"></i></button>
          </div>
        </form>
      </div>
      <!-- MEALS CARD -->
      <div class="col-4">
        <div class="card mt-3 tab-card">
          <div class="card-header tab-card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Meals</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Drinks</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Entrees</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="Four" aria-selected="false">Sides</a>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="scrollingBox tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
              <h5 v-for="meal in meals" class="card-text d-flex">{{meal.price}}</h5>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
              <h5 v-for="drink in drinks" class="card-text d-flex">{{drink.name}} ({{drink.price}})</h5>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
              <h5 v-for="entree in entrees" class="card-text d-flex">{{entree.name}} ({{entree.price}})</h5>
            </div>
            <div class="scrollingBox tab-pane fade p-3" id="four" role="tabpanel" aria-labelledby="four-tab">
              <h5 v-for="side in sides" class="card-text d-flex">{{side.name}} ({{side.price}})</h5>
            </div>
            <div class="card-footer text-muted">
            <!-- 2 days ago -->
          </div>
          </div>
        </div>
      </div>
      <!-- DETAILS CARD -->
      <div class="col-4 mt-3">
        <div class="card text-center">
          <div class="card-header tab-card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Details</a>
              </li>
            </ul>
          </div>
            <div class="card-body scrollingBox">
              <h6 class="card-text d-flex"></h6>
            </div>
          <div class="card-footer text-muted">
            <!-- 2 days ago -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'order-navigator',
    props: [
      "passedOrders"
    ],
    data() {
      return {}
    },
    computed: {
      meals(){
        return this.$store.state.mealsByOrderId
      },
      drinks(){
        return this.$store.state.drinksByOrderId
      },
      entrees(){
        return this.$store.state.entreesByOrderId
      },
      sides(){
        return this.$store.state.sidesByOrderId
      }
    },
    mounted(){},
    methods: {
      getMealsByOrderId(orderId){
        this.$store.dispatch('getMealsByOrderId' , orderId)
        this.$store.dispatch('getDrinksByOrderId' , orderId)
        this.$store.dispatch('getEntreesByOrderId' , orderId)
        this.$store.dispatch('getSidesByOrderId' , orderId)
      }
    },
    components: {},
  }
</script>
  

<style scoped>
  .scrollingBox{
    height: 40vh;
    overflow-y:auto;
  }
 
  h6:hover {
    color: #00c6d7;

  }
  .colorMe{
    background-color: #e3e3e3;
  }
  .fas{
    font-size: 20px
  }
  

</style>