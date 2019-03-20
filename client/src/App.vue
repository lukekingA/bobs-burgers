<template>
  <div>
    <nav class="navbar">
      <a class="navbar-brand">
        <i class="fas fa-hamburger"></i>BOBS BURGERS
      </a>
      <div class="btn-group">
        <button @click="logout" v-if="user._id" class="btn my-2 my-sm-0">
          <i class="fas fa-door-open"></i>
        </button>
        <button v-if="!user._id" @click="showLogin = !showLogin" class="btn my-2 my-sm-0">
          <i class="fas fa-door-closed"></i>
        </button>
        <form v-if="showLogin" class="form-inline" @submit.prevent="login">
          <input
            v-model="creds.email"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Email"
            aria-label="Search"
          >
          <input
            v-model="creds.password"
            class="form-control mr-sm-2"
            type="password"
            placeholder="Password"
            aria-label="Search"
          >
          <button class="btn my-2 my-sm-0" type="submit">GO!</button>
        </form>
        <button v-if="!user._id" @click="showRegister = !showRegister" class="btn my-2 my-sm-0">
          <i class="fas fa-user-plus"></i>
        </button>
        <form v-if="showRegister" class="form-inline" @submit.prevent="register">
          <input
            v-model="newAccount.email"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Email"
            aria-label="Search"
          >
          <input
            v-model="newAccount.name"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Username"
            aria-label="Search"
          >
          <input
            v-model="newAccount.password"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Password"
            aria-label="Search"
          >
          <button class="btn my-2 my-sm-0" type="submit">GO!</button>
        </form>
      </div>
    </nav>
    <div id="app" class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>




<script>
import Admin from "@/views/Admin.vue";
export default {
  name: "app",
  data() {
    return {
      showAdminLogin: false,
      loginForm: true,
      creds: {},
      showLogin: false,
      showRegister: false,
      newAccount: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    register() {
      let data = this.newAccount;
      data.manager = true;
      this.$store.dispatch("register", data);
      this.newAccount = {};
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      register() {
        let data = this.newAccount;
        data.manager = false;
        this.$store.dispatch("register", this.newAccount);
        this.newAdmin = {};
      },
      login() {
        this.showLogin = false;
        this.$store.dispatch("login", this.creds);
        this.creds = {};
      },
      logout() {
        this.$store.dispatch("logout");
      }
    }
  }
};
</script>

<style>
.navbar {
  background-color: darkcyan;
}

#app {
  background-color: lightskyblue;
  height: 100vh;
}
</style>