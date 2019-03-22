<template>
  <div class="dropdownComments">
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Comments</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <span
            @click="commentselection = comments"
            class="dropdown-item border-bottom"
            v-for="side in sides"
            :key="side._id"
          >{{side.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownSides",
  props: [],
  data() {
    return {
      sideSelection: {}
    };
  },
  mounted() {
    this.$store.dispatch("getSides");
  },
  computed: {
    sides() {
      return this.$store.state.sides;
    }
  },
  methods: {},
  components: {}
};
</script>