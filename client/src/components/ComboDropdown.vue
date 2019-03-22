<template>
  <div class="comboDropDown mt-3 col-6">
    <div class="row">
      <div class="col-5">
        <div class="d-flex flex-column rounded bg-dark border-light pt-3 drop-shadow">
          <button
            @click="switchView('sandwichDropdown')"
            class="btn-lg btn mb-3 mx-3 meal-buttons"
          >Meal</button>
          <button @click="switchView('sizeDropdown')" class="btn-lg btn mb-3 mx-3 meal-buttons">Size</button>
          <button
            @click="switchView('sideDropdown')"
            class="btn-lg btn mb-3 mx-3 meal-buttons"
          >Sides</button>
          <button
            @click="switchView('drinkDropdown')"
            class="btn-lg btn mb-3 mx-3 meal-buttons"
          >Drink</button>
          <button
            @click="switchView('commentDropdown')"
            class="btn-lg btn mb-3 mx-3 meal-buttons"
          >Comments</button>
        </div>
      </div>
      <div class="col-7">
        <dropdown-sandwiches v-show="sandwichDropdown"></dropdown-sandwiches>
        <dropdown-sizes v-show="sizeDropdown"></dropdown-sizes>
        <dropdown-sides v-show="sideDropdown"></dropdown-sides>
        <dropdown-drinks v-show="drinkDropdown"></dropdown-drinks>
        <dropdown-comments v-show="commentDropdown"></dropdown-comments>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownSandwiches from "@/components/Dropdowns/DropdownSandwiches.vue";
import DropdownDrinks from "@/components/Dropdowns/DropdownDrinks.vue";
import DropdownSides from "@/components/Dropdowns/DropdownSides.vue";
import DropdownSizes from "@/components/Dropdowns/DropdownSizes.vue";
import DropdownComments from "@/components/Dropdowns/DropdownComments.vue";
export default {
  name: "comboDropDown",
  props: [],
  data() {
    return {
      sandwichDropdown: true,
      sizeDropdown: false,
      sideDropdown: false,
      drinkDropdown: false,
      commentDropdown: false
    };
  },
  computed: {},
  methods: {
    switchView(selection) {
      let shows = [
        "sandwichDropdown",
        "sizeDropdown",
        "sideDropdown",
        "drinkDropdown",
        "commentDropdown"
      ];
      let newthis = this;
      shows.forEach(j => (newthis[j] = false));
      this[selection] = true;
    }
  },
  components: {
    DropdownSandwiches,
    DropdownSizes,
    DropdownSides,
    DropdownDrinks,
    DropdownComments
  }
};
</script>
<style scoped>
.meal-buttons {
  background-color: aqua;
}
</style>
