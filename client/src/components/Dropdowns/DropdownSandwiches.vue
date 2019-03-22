<template>
  <div class="dropdownSandwiches">
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Sandwiches</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <span
            @click="sandwichSelection = sandwich"
            class="dropdown-item border-bottom"
            v-for="sandwich in sandwiches"
            :key="sandwich._id"
          >{{sandwich.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownSandwiches",
  props: [],
  data() {
    return {
      sandwichSelection: {}
    };
  },
  mounted() {
    this.$store.dispatch("getEntreeItems");
  },
  computed: {
    sandwiches() {
      return this.$store.state.entreeItems;
    }
  },
  methods: {},
  components: {}
};
</script>