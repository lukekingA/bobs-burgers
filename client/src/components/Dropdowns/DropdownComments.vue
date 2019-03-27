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
          <span class="d-flex justify-content-center align-items-baseline">
            <input type="text" class="ml-1 rounded" v-model="inputComment">
            <button
              @click="addInputComment"
              class="btn btn-secondary border-dark text-light btn-sm mr-1 mt-1 ml-1"
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
      inputComment: ""
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
    },
    addInputComment() {
      this.commentSelection.push(this.inputComment);
      this.inputComment = "";
    }
  },
  watch: {
    commentSelection: function(val, oldval) {
      let commentString = val.join(", ");
      this.$emit("currentComments", commentString);
    }
  },
  components: {}
};
</script>