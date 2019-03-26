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
            @click="commentAdd(comment)"
            class="dropdown-item border-bottom align-content-center"
            v-for="comment in comments"
            :key="comment._id"
          >{{comment.comment}}</span>
          <span>
            <input type="text" class="ml-3" v-model="add1comment">
            <button
              @click="commentSelection.push(add1comment)"
              type="submit"
              class="btn btn-secondary border-dark text-light btn-sm ml-2 mt-1 ml-3"
            >Submit</button>
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
      commentSelection: [],
      add1comment: ""
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
    commentAdd(comment) {
      this.commentSelection.push(comment.comment);
    }
  },
  components: {}
};
</script>