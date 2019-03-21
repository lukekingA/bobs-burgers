<template>
  <div class="row manage-creds d-flex justify-content-center">
    <div class="col">
      <div class="row">
            <div class="col">
              <h2 class="text-center pb-4">EMPLOYEES </h2>
            </div> 
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-11 d-flex justify-content-center">
              <table style="width:50%">
                  <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th> 
                      <th>Manager</th>
                      <th>Hours</th>
                      <th>Wage</th>
                  </tr>
                  <tr v-for="employee in employees">
                    <i @click="fire(employee._id)" class="fas fa-fire-alt"></i>
                      <td>{{employee.name}}</td>
                      <td>{{employee.email}}</td> 
                      <td>{{employee.manager}}</td>
                      <td>coming soon</td>
                      <td>coming soon</td>
                      <button v-if="!disabledEdit" @click="test" :disabled="disabledEdit" class="btn my-2 my-sm-0"><i class="fas fa-pen"></i></button>
                  </tr>
              </table>
          </div>
      </div>
      <div v-if="showAddEmployee" class="row d-flex justify-content-center">
        <div class="col">
          <h4 class="text-center">Add Employee</h4>
          <div class=" text-center pl-5">
            <input v-model="managerStatus" class="form-check-input text-center" type="checkbox" value="true" id="managerCheck">
            <label class="form-check-label text-center" >
            Make Manager
            </label>
          </div>
          <form class="text-center" @submit.prevent="register">
            <input v-model="creds.name" type="text" placeholder="Name" required>
            <input v-model="creds.email" type="text" placeholder="Email" required>
            <input v-model="creds.password" type="text" placeholder="Password" required>
            <button type="submit" class="btn my-2 my-sm-0"><i class="fas fa-archive"></i></button>
          </form>
        </div>
      </div>
      <div class="row bottom">
        <div class="col text-center">
            <button class="btn my-2 my-sm-0" @click="disabledEdit = !disabledEdit"><i class="fas fa-pen"></i></button>
            <button class="btn my-2 my-sm-0" @click="showAddEmployee = !showAddEmployee"><i class="fas fa-folder-plus"></i></button>
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
        creds: {},
        managerStatus: {},
        disabledEdit: true
      }
    },
    mounted(){
      this.$store.dispatch('getAllEmployees')
    },
    computed: {
      employees(){
        return this.$store.state.employees
      }
    },
    methods: {
      register(){
        let creds = this.creds
        creds.manager = this.managerStatus
        this.$store.dispatch('register' , creds)
      } ,
      test(){
        console.log("edit test")
      },
      fire(employeeId){
        this.$store.dispatch('fireEmployee' , employeeId)
      }
    },
    components: {}
  }
</script>

<style scoped>
  .bottom{
    padding-bottom: 20vh
  }

</style>