<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Order navigator</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mt-3">
        <div class="card text-center">
          <div class="card-header">
            <h4>Orders</h4>
          </div>
          <div class="card-body scrollingBox">
            <h6 @click="getMealsByOrderId(order._id)" v-for="order in passedOrders" class="card-text d-flex">{{order._id}}</h6>
          </div>
          <div class="card-footer text-muted">
            <!-- 2 days ago -->
          </div>
        </div>
      </div>
      <div class="col-4 mt-3">
        <div class="card text-center">
          <div class="card-header">
            <h4>Meals</h4>
          </div>
          <div class="card-body scrollingBox">
            <h6 v-for="meal in meals" class="card-text d-flex">{{meal._id}}</h6>
          </div>
          <div class="card-footer text-muted">
            <!-- 2 days ago -->
          </div>
        </div>
      </div>
      <div class="col-4 mt-3">
        <div class="card text-center">
          <div class="card-header">
            <h4>Details</h4>
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
      }
    },
    mounted(){},
    methods: {
      getMealsByOrderId(orderId){
            this.$store.dispatch('getMealsByOrderId' , orderId)
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

</style>