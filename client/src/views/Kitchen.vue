<template>
  <div class="kitchen">
    <h1></h1>
    <div class="row">
      <div v-for="order in activeOrders" class="col col-sm-3">

        <active-order :order="order"></active-order>

        <!-- <button @click="deactivateOrder" class="btn btn-secondary shadow border-dark">Order Complete</button>
        <button @click="sendMessage">message</button> -->
      </div>
    </div>
  </div>

</template>

<script>
  import io from 'socket.io-client'
  import ActiveOrder from '@/components/ActiveOrder.vue'
  export default {
    name: "kitchen",
    props: [],
    data() {
      return {
        AllOrders: {
          sandwich: {},
          drink: {},
          side: {},
          comment: ""
        },
        orderIdentifier: "",
        // message: {message: 'message', count: 0},
        // socket: io('localhost:8080')
      };
    },
    mounted() {
      this.$store.dispatch('getActiveOrders')
    },
    computed: {
      activeOrders() {
        return this.$store.state.activeOrders.filter(o => o.price)
      },
      message() {
        return this.$store.state.message
      }
    },
    methods: {
      deactivateOrder() {

      },
      sendMessage() {
        let data = {
          val: this.message
        }
        this.$store.dispatch('setMessage', data)
      }
    },
    components: {
      ActiveOrder
    }
  };
</script>