<template>
  <div class="menu-maker">
    <div class="dropdown mb-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Menu Item Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <span class="dropdown-item hover border-bottom " @click="menuType = 'entree'">Entree</span>
        <span class="dropdown-item hover border-bottom " @click="menuType = 'drink'">Drink </span>
        <span class="dropdown-item hover" @click="menuType = 'side'">Side </span>
      </div>
    </div>
    <div v-show="menuType == 'entree'" class="">
      <input class="rounded pl-1 mr-1" type="text" v-model="menuItemName" placeholder="name">
      <div class="" v-for="component in components">

      </div>
    </div>
    <div v-show="menuType == 'drink'" class="">
      <input class="rounded pl-1 mb-1" type="text" v-model="menuItemName" placeholder="name">
      <div>
        <input type="radio" id="sizes" value="-1" v-model="picked">
        <label class="ml-1" for="sizes">Small</label>
      </div>

      <div>
        <input type="radio" id="sizem" value="0" v-model="picked">
        <label class="ml-1" for="sizem">Medium</label>
      </div>

      <div>
        <input type="radio" id="sizel" value="1" v-model="picked">
        <label class="ml-1" for="sizel">Large</label>
      </div>
    </div>
    <div v-show="menuType == 'side'" class="">
      <input class="rounded pl-1 mb-1" type="text" v-model="menuItemName" placeholder="name">
      <div>
        <input type="radio" id="sizeS" value="-1" v-model="picked">
        <label class="ml-1" for="sizeS">Small</label>
      </div>

      <div>
        <input type="radio" id="sizeM" value="0" v-model="picked">
        <label class="ml-1" for="sizeM">Medium</label>
      </div>

      <div>
        <input type="radio" id="sizeL" value="1" v-model="picked">
        <label class="ml-1" for="sizeL">Large</label>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'menu-maker',
    data() {
      return {
        menuType: '',
        menuItemName: '',
        menuItemSize: '',
        picked: '',
        components: '',
      }
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
  .dropdown-item:hover {
    cursor: pointer;
  }
</style>