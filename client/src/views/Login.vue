<template>
  <div class="login container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="loginUser">
          <input type="email" v-model="creds.email" placeholder="email">
          <input type="password" v-model="creds.password" placeholder="password">
          <button class="btn btn-sm bg-dark text-light" type="submit">Login</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-sm bg-dark text-light" @click="showAdminLogin = !showAdminLogin">Admin Login</button>
        <div v-show="showAdminLogin">
          <form v-if="loginForm" @submit.prevent="adminLogin">
            <input type="email" v-model="adminCreds.email">
            <input type="password" v-model="adminCreds.password">
          </form>

          <form v-else @submit.prevent="register">
            <input type="text" v-model="newAdmin.name" placeholder="name">
            <input type="text" v-model="newAdmin.email" placeholder="email">
            <input type="text" v-model="newAdmin.password" placeholder="password">
            <button type="submit">Create Account</button>
          </form>
          <div class="action" @click="loginForm = !loginForm">
            <p v-if="loginForm">No account? Click here to Register</p>
            <p v-else>Already have an account? Click here to Login</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        showAdminLogin: false,
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        adminCreds: {
          email: '',
          password: ''
        },
        newAdmin: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newAdmin);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      },
      loginAdmin() {
        this.$store.dispatch("login", this.adminCreds);
      }
    }
  };
</script>

<style>
  .action {
    cursor: pointer;
  }
</style>