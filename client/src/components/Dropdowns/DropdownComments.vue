<template>
  <div class="dropdownComments">
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle mb-2"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Comments</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <span
            @click="commentSelect"
            class="dropdown-item border-bottom"
            v-for="comment in comments"
            :key="comment._id"
          >{{comment.comment}}</span>
          <span>
            <input type="text" class="justify-content-center">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "dropdownComments",
  props: [],
  data() {
    return {
      commentSelection: []
    };
  },
  mounted() {
    this.$store.dispatch("getComments");
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {
    commentSelect() {
      commentSelection.push(comment);
    }
  },
  components: {}
};
</script>