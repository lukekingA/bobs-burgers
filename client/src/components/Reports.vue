<template>
  <order-navigator></order-navigator>
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
        return this.$store.state.activeReportMeals
      }
    },
    mounted(){
      this.$store.dispatch('getOrders')
    },
    methods: {
      getMealsByOrderId(orderId){
            this.$store.dispatch('getMealsByOrderId' , orderId)
      }
    },
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