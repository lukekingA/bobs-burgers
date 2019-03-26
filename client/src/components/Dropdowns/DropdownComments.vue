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
            class="dropdown-item border-bottom"
            v-for="comment in comments"
            :key="comment._id"
          >{{comment.comment}}</span>
          <span>
            <input type="text" class="pl-2" placeholder="comment" v-model="add1comment">
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
      this.commentSelection.push(comment);
    }
  },
  components: {}
};
</script>