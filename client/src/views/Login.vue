<template></template>

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
  }
  // methods: {
  //   register() {
  //     let data = this.newAdmin;
  //     data.manager = true;
  //     this.$store.dispatch("register", this.newAdmin);
  //     this.newAdmin = {};
  //   },
  //   loginUser() {
  //     this.$store.dispatch("login", this.creds);
  //   },
  //   methods: {
  //     register() {
  //       let data = this.newAdmin;
  //       data.manager = true;
  //       this.$store.dispatch("register", this.newAdmin);
  //       this.newAdmin = {};
  //       this.showAdminLogin = false;
  //       this.loginForm = true;
  //     },
  //     loginUser() {
  //       this.$store.dispatch("login", this.creds);
  //       this.creds = {};
  //     },
  //     loginAdmin() {
  //       this.$store.dispatch("login", this.adminCreds);
  //       this.adminCreds = {};
  //     }
  //   }
  // }
};
</script>

<style>
.action {
  cursor: pointer;
}
</style>