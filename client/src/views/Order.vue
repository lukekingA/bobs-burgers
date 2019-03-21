<template>
  <div class="Order">
    <div class="row">
      <div class="col-3 d-flex mt-2 flex-column align-items-start">
        <button
          class="btn button-width mb-2 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >CHICKEN</button>
        <button
          class="btn button-width mb-2 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >DRINKS</button>
        <button
          class="btn button-width mb-2 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >COMBOS</button>
        <button
          class="btn button-width mb-2 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >SIDES</button>
        <button
          class="btn button-width mb-2 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >BURGERS</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style>
.button-width {
  width: 200px;
}
</style>