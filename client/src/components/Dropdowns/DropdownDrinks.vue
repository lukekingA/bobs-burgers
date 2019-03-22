<template>
  <div class="dropdown-drinks">
    <div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Drinks</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <span @click="drinkSelection = drink" class="dropdown-item border-bottom" v-for="drink in drinks" :key="drink._id">{{drink.name}}</span>
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
      sandwiches() {
        return this.$store.state.drinks;
      }
    },
    methods: {},
    components: {}
  };
</script>