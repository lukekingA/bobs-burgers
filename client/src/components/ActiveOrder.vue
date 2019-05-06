<template>
  <div class="active-order">
    <div class="bg-light rounded p-2 m-2 shadow">
      <h5 class="border-bottom">{{order.orderIdentifer}}</h5>
      <ul>
        <li v-for="item in orderItems">
          <p class="mb-0"><small>{{item.name}}</small></p>
        </li>
      </ul>
      <p class="text-right mb-1">$ {{order.price.toFixed(2)}}</p>
      <slot></slot>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'active-order',
    data() {
      return {}
    },
    props: ['order'],
    computed: {
      orderItems() {
        let orderList = this.$store.state.activeOrderItems
        let list = []
        for (let i = 0; i < orderList.length; i++) {
          let mealitems = orderList[i]
          mealitems.forEach(i => {
            if (i.orderId == this.order._id) {
              list.push(i)
            }
          })
        }
        return list
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>