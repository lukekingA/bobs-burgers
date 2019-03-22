<template>
  <div class="sideDropDown mt-3 col-6">
    <div class="row">
      <div class="col-5">
        <div class="d-flex flex-column rounded bg-dark border-light pt-3 drop-shadow">
          <button class="btn-lg btn mb-3 mx-3 meal-buttons">Sides</button>
          <button class="btn-lg btn mb-3 mx-3 meal-buttons">Drink</button>
          <button class="btn-lg btn mb-3 mx-3 meal-buttons">Comments</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideDropDown",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>
<style scoped>
.meal-buttons {
  background-color: aqua;
}
</style>
