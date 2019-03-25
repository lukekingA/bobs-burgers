<template>
  <div class="dropdownSides">
    <div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle border border-light drop-shadow" type="button"
          id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sides</button>
        <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenu1">
          <span @click="sideSelection = side" class="dropdown-item border-bottom" v-for="side in sides"
            :key="side._id">{{side.name}}</span>
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
    watch: {
      sideSelection: function () {
        this.$emit('orderSideSelect', this.sideSelection)

      }
    },
    methods: {},
    components: {}
  };
</script>