<template>
  <div class="row manage-creds d-flex justify-content-center">
    <div class="col">
        <div class="mt-5 row d-flex ">
          <div class="col-11 d-flex justify-content-center">
            <table style="width:80%">
              <tr>
                <th>Name</th>
                <th>Email</th> 
                <th class="text-center">Manager</th>
                <th class="text-center">Employed</th>             
                <th class="text-center">Hours</th>
                <th class="text-center">Wage</th>  
              </tr>
              <!-- class="d-flex  align-self-baseline" -->
              <tr v-for="employee in employees">
                <td class="pt-2">{{employee.name}}</td>
                <td class="pt-2">{{employee.email}}</td> 
                <td class="pt-2 text-center">{{employee.manager}}</td>
                <td class="pt-2 text-center">{{employee.employmentStatus}}</td>
                <td class="pt-2 text-center">coming soon</td>
                <td class="pt-2 text-center">coming soon</td>
                <button v-show="!disabledEdit" @click="activeEmployee = employee" :disabled="disabledEdit" class="btn my-2 my-sm-0 d-flex  align-self-end" data-toggle="modal" data-target="#editEmployeeModal"><i class="smallme fas fa-pen"></i></button>
              </tr>
            </table>
          </div>
        </div>
        <div v-if="showAddEmployee" class="row text-center padme">
          <div class="col-11">
            <h4 class="">Add Employee</h4>
            <div class="">
              <input v-model="managerStatus" class="form-check-input" type="checkbox" value="true" id="managerCheck">
              <label class="form-check-label" >
              Make Manager
              </label>
            </div>
            <form @submit.prevent="registerNewEmployee">
              <input class="rounded pl-3 mr-1 mb-2" v-model="creds.name" type="text" placeholder="Name" required>
              <input class="rounded pl-3 mr-1 mb-2" v-model="creds.email" type="email" placeholder="Email" required>
              <input class="rounded pl-3 mr-1 mb-2" v-model="creds.password" type="text" placeholder="Password" required>
              <button type="submit" class="btn my-2 my-sm-0"><i class="fas fa-archive"></i></button>
            </form>
          </div>
        </div>
        <div class="row fixed-bottom text-center">
          <div class="col">
              <button class="btn my-2 my-sm-0" @click="disabledEdit = !disabledEdit"><i class="fas fa-pen"></i></button>
              <button class="btn my-2 my-sm-0" @click="showAddEmployee = !showAddEmployee"><i class="fas fa-folder-plus"></i></button>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="editEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 @click="editName = !editName" class="modal-title" id="exampleModalLongTitle">{{activeEmployee.name}}</h5>
              <form><input v-model="newCreds.name" v-if="editName" type="text" class="rounded pl-3 mr-1 mb-2"></form>
              
              <button @click="resetForms" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row">
              <div class="col-6 offset-3">
                <h6 @click="editEmail = !editEmail">Email: <span>{{activeEmployee.email}}</span></h6>
                <form><input v-model="newCreds.email" v-if="editEmail" type="text" class="rounded pl-3 mr-1 mb-2"></form>
                  <div class="form-check">
                    <input class="form-check-input " type="checkbox" v-model="activeEmployee.manager" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">Manager</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="activeEmployee.employmentStatus" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">Employed</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="resetForms" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="changeCreds" type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import $ from 'jquery'
  export default {
    name: 'manage-creds',
    data() {
      return {
        showAddEmployee: false,
        creds: {},
        managerStatus: false,
        disabledEdit: true,
        activeEmployee: {},
        editEmail: false,
        editManagerStatus: false,
        editEmploymentStatus: false,
        newCreds: {},
        editName: false,
        counter: 1
      }
    },
    // watch(){
    //   counter: function(){}
    // },
    mounted(){
      this.$store.dispatch('getAllEmployees')
    },
    computed: {
      employees(){
        return this.$store.state.employees
      }
    },
    methods: {
      registerNewEmployee(){
        let creds = this.creds
        creds.manager = this.managerStatus
        this.$store.dispatch('registerNewEmployee' , creds)
        this.creds = {}
        this.showAddEmployee = !this.showAddEmployee
      } ,
      fire(employeeId){
        this.$store.dispatch('fireEmployee' , employeeId)
      },
      changeCreds(){
        let newCreds = this.newCreds
        newCreds._id = this.activeEmployee._id
        newCreds.manager = this.activeEmployee.manager
        newCreds.employmentStatus = this.activeEmployee.employmentStatus
        this.$store.dispatch('editEmployee' , this.newCreds)
        this.newCreds = {}
        $('#editEmployeeModal').modal('hide')
        this.resetForms()
      },
      resetForms(){
        this.editEmail = false,
        this.editManagerStatus = false,
        this.editEmploymentStatus = false,
        this.editName = false
        this.disabledEdit = true
      }
    },
    components: {}
  }
</script>

<style scoped>
  .bottom{
    padding-bottom: 20vh
  }
  .padme{
    padding-top: 5vh
  }
  .smallme{
    font-size: 10px
  }
  th{
    background-color: #00c6d7
  }

</style>