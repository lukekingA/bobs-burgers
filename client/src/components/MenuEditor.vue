<template>
  <div class="menu-editor container-fluid">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col d-flex justify-content-center">
        <table style="width:50%">
          <tr>
            <th>Name</th>
            <th>Price</th> 
            <th>Active</th>
          </tr>
          <tr v-for="entree in entrees">
            <td class="pt-2">{{entree.name}}</td>
            <td class="pt-2">${{entree.price}}</td> 
            <td class="pt-2">coming soon</td>
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
      return {}
    },
    computed: {
      entrees(){
        return this.$store.state.entrees
      }
    },
    mounted(){
        this.$store.dispatch('getEntrees')
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  th{
    background-color: #00c6d7
  }
  td:hover { 
  background-color:#ff6b2f
}
</style>