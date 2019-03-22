<template>
  <div class="Order">
    <div class="row">
      <div class="col-3 d-flex mt-3 flex-column align-items-start">

        <button @click="switchView('sandwichDropdown')" class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Meal</button>

        <button @click="switchView('sideDropdown')" class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Sides</button>
        <button @click="switchView('drinkDropdown')" class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Drink</button>
        <button @click="switchView('commentDropdown')" class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Comments</button>
        <button @click="switchView('specialDropdown')" class="btn button-width mb-3 btn-lg border-light bg-dark text-light rounded drop-shadow">Specials</button>
      </div>

      <dropdown-sandwiches v-show="sandwichDropdown"></dropdown-sandwiches>
      <dropdown-sides v-show="sideDropdown"></dropdown-sides>
      <dropdown-drinks v-show="drinkDropdown"></dropdown-drinks>
      <dropdown-comments v-show="commentDropdown"></dropdown-comments>
      <dropdown-specials v-show="specialDropdown"></dropdown-specials>
    </div>
  </div>
</template>

<script>
  import DropdownSandwiches from "@/components/Dropdowns/DropdownSandwiches.vue";
  import DropdownDrinks from "@/components/Dropdowns/DropdownDrinks.vue";
  import DropdownSides from "@/components/Dropdowns/DropdownSides.vue";
  import DropdownComments from "@/components/Dropdowns/DropdownComments.vue";
  import DropdownSpecials from "@/components/Dropdowns/DropdownSpecials.vue"
  export default {
    name: "Order",
    props: [],
    data() {
      return {
        sandwichDropdown: true,
        sideDropdown: false,
        drinkDropdown: false,
        commentDropdown: false,
        specialDropdown: false
      };
    },
    computed: {},
    methods: {
      switchView(selection) {
        let shows = [
          "sandwichDropdown",
          "sideDropdown",
          "drinkDropdown",
          "commentDropdown",
          "specialDropdown"
        ];
        let newthis = this;
        shows.forEach(j => (newthis[j] = false));
        this[selection] = true;
      }
    },
    components: {
      DropdownSandwiches,
      DropdownSides,
      DropdownDrinks,
      DropdownComments,
      DropdownSpecials
    }
  };
</script>

<style>
  .button-width {
    width: 200px;
  }
</style>