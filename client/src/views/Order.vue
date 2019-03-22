<template>
  <div class="Order">
    <div class="row">
      <div class="col-3 d-flex mt-3 flex-column align-items-start">
        <button
          @click="switchView('showCombo')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >COMOBS</button>
        <button
          @click="switchView('showBurgers')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >BURGERS</button>
        <button
          @click="switchView('showChicken')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >CHICKEN</button>
        <button
          @click="switchView('showSides')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >SIDES</button>
        <button
          @click="switchView('showDrinks')"
          class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow"
        >DRINKS</button>
      </div>
      <combo-drop-down v-if="showCombo"></combo-drop-down>
      <burger-drop-down v-if="showBurgers"></burger-drop-down>
      <chicken-drop-down v-if="showChicken"></chicken-drop-down>
      <side-drop-down v-if="showSides"></side-drop-down>
      <drink-drop-down v-if="showDrinks"></drink-drop-down>
    </div>
  </div>
</template>

<script>
import ComboDropDown from "@/components/ComboDropdown.vue";
import BurgerDropDown from "@/components/BurgerDropdown.vue";
import ChickenDropDown from "@/components/ChickenDropdown.vue";
import SideDropDown from "@/components/SideDropdown.vue";
import DrinkDropDown from "@/components/DrinkDropdown.vue";
export default {
  name: "Order",
  props: [],
  data() {
    return {
      showCombo: true,
      showBurgers: false,
      showChicken: false,
      showSides: false,
      showDrinks: false
    };
  },
  computed: {},
  methods: {
    switchView(selection) {
      let shows = [
        "showCombo",
        "showBurgers",
        "showChicken",
        "showSides",
        "showDrinks"
      ];
      let newthis = this;
      shows.forEach(j => (newthis[j] = false));
      this[selection] = true;
    }
  },
  components: {
    ComboDropDown,
    BurgerDropDown,
    ChickenDropDown,
    SideDropDown,
    DrinkDropDown
  }
};
</script>

<style>
.button-width {
  width: 200px;
}
</style>