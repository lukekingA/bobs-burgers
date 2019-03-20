<template>
  <div class="login container-fluid">

    <!-- BACKDOOR TO ADD ACCOUNTS -->
    <!-- <form @submit.prevent="register">
      <input type="text" v-model="newAdmin.name" placeholder="name">
      <input type="text" v-model="newAdmin.email" placeholder="email">
      <input type="text" v-model="newAdmin.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form> -->

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        showAdminLogin: false,
        loginForm: true,
        creds: {},
        adminCreds: {},
        newAdmin: {}
      };
    },
    methods: {
      register() {
        let data = this.newAdmin;
        data.manager = true;
        this.$store.dispatch("register", this.newAdmin);
        this.newAdmin = {};
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      },
      methods: {
        register() {
          let data = this.newAdmin;
          data.manager = true;
          this.$store.dispatch("register", this.newAdmin);
          this.newAdmin = {};
          this.showAdminLogin = false;
          this.loginForm = true;
        },
        loginUser() {
          this.$store.dispatch("login", this.creds);
          this.creds = {}
        },
        loginAdmin() {
          this.$store.dispatch("login", this.adminCreds);
          this.adminCreds = {}
        }
      }
    }
  };
</script>

<style>
  .action {
    cursor: pointer;
  }
</style>