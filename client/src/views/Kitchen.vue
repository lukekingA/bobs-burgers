<template>
  <div class="kitchen">
    <h1 class="text-center py-1">Active Orders</h1>
    <div class="row">
      <div v-for="order in activeOrders" class="col col-sm-3">
        <active-order :order="order">
          <button @click="deactivateOrder(order)" class="btn btn-secondary shadow border-dark">
            Order Complete
          </button>
        </active-order>
      </div>
    </div>
  </div>
</template>

<script>
  import ActiveOrder from '@/components/ActiveOrder.vue';
  export default {
    name: 'kitchen',
    props: [],
    data() {
      return {
        AllOrders: {
          sandwich: {},
          drink: {},
          side: {},
          comment: ''
        },
        orderIdentifier: ''
      };
    },
    mounted() {
      this.$store.dispatch('getActiveOrders')
      this.$store.dispatch('getMessage')
      let newThis = this
      let getOrders = setInterval(
        function () {
          newThis.$store.dispatch('getMessage')
        },
        10000
      )
    },

    computed: {
      activeOrders() {
        return this.$store.state.activeOrders.filter(o => o.price);
      },
      message() {
        return this.$store.state.message;
      }
    },
    watch: {
      message: function (newHash, oldHash) {
        if (newHash != oldHash) {
          this.$store.dispatch('getActiveOrders')
        }
      }
    },
    methods: {
      deactivateOrder(order) {
        let data = {
          activeOrder: false,
          orderId: order._id
        }
        this.$store.dispatch('editOrder', data)
      },
    },
    components: {
      ActiveOrder
    }
  };
</script>