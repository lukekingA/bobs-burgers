<template>
  <div class="dropdown-drinks">
    <div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle border border-light drop-shadow" type="button"
          id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drinks</button>
        <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenu1">
          <span @click="drinkSelection = drink" class="dropdown-item border-bottom" v-for="drink in drinks"
            :key="drink._id">{{drink.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dropdown-drinks",
    props: [],
    data() {
      return {
        drinkSelection: {}
      };
    },
    mounted() {
      this.$store.dispatch("getDrinks");
    },
    computed: {
      // drinks() {
      //   return this.$store.state.drinks;
      // }
      drinks() {
        const drinkT = this.$store.state.drinks
        const actDrink = drinkT.filter(s => s.active == true)
        return actDrink;
      }
    },
    watch: {
      drinkSelection: function () {
        this.$emit('orderDrinkSelect', this.drinkSelection)

      }
    },
    methods: {},
    components: {}
  };
</script>