<template>
  <div class="meal-Details">
    <p @click="getMealsByOrderId">details</p>
    <p v-for="meal in meals">{{meal._id}}</p>
  </div>
</template>


<script>
  export default {
    name: 'meal-details',
    props: [
        "orderDetails"
    ]
    ,
    data() {
      return {}
    },
    mounted(){
    },
    computed: {
        meals(){
        return this.$store.state.activeReportMeals
        }
    },
    methods: {
        getMealsByOrderId(){
            this.$store.dispatch('getMealsByOrderId' , this.orderDetails._id)
        }
    },

    components: {}
  }
</script>


<style scoped>

</style>