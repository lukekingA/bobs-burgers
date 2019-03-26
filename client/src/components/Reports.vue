<template>
  <div class="reports container-fluid">
    <div class="row">
      <div class="col">
          <div class="input-group pt-2">
             <div class="input-group-prepend">
                <span class="input-group-text">I want</span>
            </div>
            <select  @change="showFrom = !showFrom" class="custom-select" id="inputGroupSelect02">
            <option selected>...</option>
            <option value="1">Sales Report</option>
            <option value="2">Inventory Report</option>
            <option value="3">Employee Schedule</option>
           </select>
          </div>
          <div class="input-group pt-2" >
            <div v-if="showFrom == true" class="input-group-prepend">
                <span class="input-group-text">from</span>
            </div>
            <select  @change="showTo = !showTo" v-if="showFrom == true" class="custom-select" id="inputGroupSelect01">
              <option selected>today</option>
              <option value="1">yesterday</option>
            </select>
          </div>
          <div class="input-group pt-2" >
            <div class="input-group-prepend">
              <span v-if="showTo == true" class="input-group-text">till...</span>
            </div>
            <select v-if="showTo == true" class="custom-select" id="inputGroupSelect02">
              <option selected>...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-center pt-3">
          <button v-if="showFrom == true">Go!</button>
        </div>
      </div>
    </div>  
  
</template>


<script>
  export default {
    name: 'reports',
    data() {
      return {
        showTo: false,
        showFrom: false
      }
    },
    computed: {},
    methods: {
    },
    components: {}
  }
</script>


<style scoped>

</style>