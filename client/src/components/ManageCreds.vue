<template>
  <div class="row manage-creds d-flex justify-content-center">
    <div class="col">
      <div class="row">
            <div class="col-8">
              <h2>EMPLOYEES</h2>
              <table style="width:50%">
                  <tr>
                      <th>Name</th>
                      <th>Surname</th> 
                      <th>Wage</th>
                      <th>Hours</th>
                      <th>Position</th>

                  </tr>
                  <tr>
                      <td>Jill</td>
                      <td>Smith</td> 
                      <td>$20.00</td>
                      <td>36/40</td>
                      <td>General Manager</td>
                  </tr>
                  <tr>
                      <td>Eve</td>
                      <td>Jackson</td> 
                      <td>$15.00</td>
                      <td>50/40</td>
                      <td>Shift Manager</td>
                  </tr>
              </table>
              <button class="btn my-2 my-sm-0" @click="showAddEmployee = !showAddEmployee"><i class="fas fa-folder-plus"></i></button>
          </div>
          
      </div>
      <div v-if="showAddEmployee" class="row">
        <div class="col">
          <h4>Add Employee</h4>
          <form @submit.prevent="register">
            <input v-model="creds.name" type="text" placeholder="Name" required>
            <input v-model="creds.email" type="text" placeholder="Email" required>
            <input v-model="creds.password" type="text" placeholder="Password" required>
            <button type="submit" class="btn my-2 my-sm-0"><i class="fas fa-archive"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'manage-creds',
    data() {
      return {
        showAddEmployee: false,
        creds: {}
      }
    },
    computed: {},
    methods: {
      register(){
        this.$store.dispatch('register' , this.creds)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>