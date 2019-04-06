<template>
  <div>
    <div>
      <order-navigator :passedOrders="orders"></order-navigator>
    </div>
  </div>
</template>


<script>
  import OrderNavigator from "@/components/Report/OrderNavigator.vue"
  export default {
    name: 'reports',
    data() {
      return {
      }
    },
    computed: {
      orders(){
        return this.$store.state.orders
      },
      meals(){
        return this.$store.state.mealsByOrderId
      }
    },
    mounted(){
      this.$store.dispatch('getOrders')
    },
    methods: {},
    components: {
      OrderNavigator
    },
  }
</script>
  

<style scoped>
  .scrollingBox{
    background-color: white;
    height: 40vh;
    overflow-y:auto;
    border-radius: 2.5pt;
  }
 
  p:hover {
    color: #00c6d7;

  }

</style>