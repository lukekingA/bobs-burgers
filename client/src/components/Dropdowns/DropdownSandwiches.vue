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
          <a class="dropdown-item" href="#!">Action</a>
          <a class="dropdown-item" href="#!">Another action</a>
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
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>