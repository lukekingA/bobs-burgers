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
          >{{comment.name}}</span>
        </div>
      </div>
      <input type="text">
    </div>
  </div>
</template>



<script>
export default {
  name: "dropdownComments",
  props: [],
  data() {
    return {
      commentSelection: {}
    };
  },
  mounted() {
    this.$store.dispatch("getComment");
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {},
  components: {}
};
</script>