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
<<<<<<< HEAD
            class="dropdown-item border-bottom"
=======
            class="dropdown-item border-bottom align-content-center"
>>>>>>> ae0a2ae66c8fa82cd92de339108c5f9efcde4a0f
            v-for="comment in comments"
            :key="comment._id"
          >{{comment.comment}}</span>
          <span>
<<<<<<< HEAD
            <input type="text" class="pl-2" placeholder="comment" v-model="add1comment">
=======
            <input type="text" class="ml-3">
            <button
              type="submit"
              class="btn btn-secondary border-dark text-light btn-sm ml-2 mt-1 ml-3"
            >Submit</button>
>>>>>>> ae0a2ae66c8fa82cd92de339108c5f9efcde4a0f
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
<<<<<<< HEAD
      commentSelection: [],
      add1comment: ""
=======
      commentSelection: []
>>>>>>> ae0a2ae66c8fa82cd92de339108c5f9efcde4a0f
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