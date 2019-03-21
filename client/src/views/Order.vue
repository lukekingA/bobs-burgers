<template>
  <div class="Order">
    <div class="container-fluid">
      <div class="row">
        <div class="col d-flex flex-column justify-content-around giveMeSpace">
            <button class="square">COMBO</button>
            <button class="square">SANDWICH</button>
            <button class="square">SIDES</button>
            <button class="square">DRINKS</button>
        </div>
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
  .square {
  height: 20vh;
  width: 20vh;
  background-color: rgb(0, 198, 215);
}
  .giveMeSpace{
    height: 90vh;
  }
</style>
