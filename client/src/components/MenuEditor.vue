<template>
  <div class="menu-editor container-fluid">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-4 d-flex  ">
        <table style="width:75% text-center">
          <h4>ENTREES</h4>
          <tr class="pt-2 " bg-light>
            <th>Name</th>
            <th class="pl-3">Price</th>
            <th class="pl-3">Active</th>
            <th class="pl-3">Special</th>
          </tr>
          <tr v-for="entree in entrees">
            <td class="pt-2 btn my-2 my-sm-0">{{entree.name}}</td>
            <td class="pl-3 pt-2">${{entree.price}}</td>
            <td @click="toggleEntreeActive(entree)" class="pl-3 pt-2 editable">{{entree.active}}</td>
            <td @click="toggleEntreeSpecial(entree)" class="pl-3 pt-2 editable">{{entree.special}}</td>
          </tr>
        </table>
      </div>
      <div class="col-3 d-flex">
        <table style="width:75% text-center">
          <h4>SIDES</h4>
          <tr class="pt-2 " bg-light>
            <th>Name</th>
            <th class="pl-3">Price</th>
            <th>Size</th>
            <th class="pl-3">Active</th>
          </tr>
          <tr v-for="side in sides">
            <td class="pt-2 btn my-2 my-sm-0">{{side.name}}</td>
            <td class="pl-3 pt-2">${{side.price}}</td>
            <td class="pl-3 pt-2">{{side.size}}</td>
            <td @click="toggleSideActive(side)" class="pl-3 pt-2 editable">{{side.active}}</td>
          </tr>
        </table>
      </div>
      <div class="col-3 d-flex">
        <table style="width:75% text-center">
          <h4>DRINKS</h4>
          <tr></tr>
          <tr class="pt-2 " bg-light>
            <th>Name</th>
            <th class="pl-3">Price</th>
            <th>Size</th>
            <th class="pl-3">Active</th>
          </tr>
          <tr v-for="drink in drinks">
            <td class="pt-2 btn my-2 my-sm-0">{{drink.name}}</td>
            <td class="pl-3 pt-2">${{drink.price}}</td>
            <td class="pl-3 pt-2">{{drink.size}}</td>
            <td @click="toggleDrinkActive(drink)" class="pl-3 pt-2 editable">{{drink.active}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'menu-editor',
    data() {
      return {
        disabledEdit: true,
        showEditModal: false,
        changeDrinkPriceForm: false,
        changeEntreePriceForm: false,
        changeSidePriceForm: false,
      }
    },
    computed: {
      entrees() {
        return this.$store.state.entrees
      },
      drinks() {
        return this.$store.state.drinks
      },
      sides() {
        return this.$store.state.sides
      }
    },
    mounted() {
      this.$store.dispatch('getEntrees')
      this.$store.dispatch('getDrinks')
      this.$store.dispatch('getSides')

    },
    methods: {
      toggleEntreeActive(data) {
        let newData = data
        newData.active = !newData.active
        this.$store.dispatch('editEntree', newData)
      },
      toggleEntreeSpecial(data) {
        let newData = data
        newData.special = !newData.special
        this.$store.dispatch('editEntree', newData)
      },
      toggleDrinkActive(data) {
        let newData = data
        newData.active = !newData.active
        this.$store.dispatch('editDrink', newData)
      },
      toggleSideActive(data) {
        let newData = data
        newData.active = !newData.active
        this.$store.dispatch('editSide', newData)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .smallme {
    font-size: 10px
  }

  th {
    background-color: #00c6d7
  }

  .editable {
    cursor: pointer;
    color: blue
  }

  .editable:hover {
    color: #00c6d7
  }
</style>