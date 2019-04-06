<template>
  <div class="kitchen">
    <h1></h1>
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column justify-content-between h-300 overflow-auto">
              <h5 class="card-title">Kitchen View</h5>
              <p class="card-text">Now we are cooking with grease.</p>
              <!-- break point -->
              <div class="mt-1">
                <ul class="pl-1">
                  <li class="pl-1" v-for="(item,index) in activeOrder" :key="activeOrder +index">
                    <div class="text-left">
                      <input
                        class="rounded pl-1"
                        type="text"
                        v-model="activeOrder"
                        placeholder="customer name"
                      >

                      <p class="mb-1">{{item.sandwich.name}}</p>
                      <p class="mb-1">{{item.side.name}}</p>
                      <p class="mb-1">{{item.drink.name}}</p>
                      <p class="mb-1">{{item.comment}}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- break point -->
              <button
                @click="submitOrder"
                class="btn btn-secondary shadow border-dark"
              >Order Complete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      orderIdentifier: ""
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>