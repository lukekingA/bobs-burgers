<template>
  <div id="logo">
    <nav class="navbar">
      <a class="navbar-brand">
        <img src="./assets/bob_logo_sm.png" width="65" height="65" alt>
        <!-- <i class="fas fa-hamburger"></i>BOBS BURGERS -->
      </a>
      <div class="btn-group">
        <button @click="logout" v-if="user._id" class="btn my-2 my-sm-0">
          <i class="fas fa-door-open"></i>
        </button>



        <button v-if="!user._id" @click="showLogin = !showLogin" class="btn my-2 my-sm-0">
          <i class="fas fa-door-closed"></i>
        </button>
        <form v-if="showLogin" class="form-inline" @submit.prevent="login">
          <input v-model="creds.email" class="form-control mr-sm-2" type="search" placeholder="Email"
            aria-label="Search">
          <input v-model="creds.password" class="form-control mr-sm-2" type="password" placeholder="Password"
            aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit">GO!</button>
        </form>




        <button v-if="!user._id" @click="showRegister = !showRegister" class="btn my-2 my-sm-0">
          <i class="fas fa-user-plus"></i>
        </button>
        <form v-if="showRegister" class="form-inline" @submit.prevent="register">
          <input v-model="newAccount.email" class="form-control rounded pl-3 mr-1 mb-2" type="search" placeholder="Email"
            aria-label="Search">
          <input v-model="newAccount.name" class="form-control mr-sm-2" type="search" placeholder="Username"
            aria-label="Search">
          <input v-model="newAccount.password" class="form-control mr-sm-2" type="search" placeholder="Password"
            aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit">GO!</button>
        </form>
      </div>
    </nav>
    <div id="app" class="container-fluid h-100">
      <router-view></router-view>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <!-- Content -->
        <div v-if="user._id" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Login Succesful</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Where do you want to go?
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button data-dismiss="modal" @click="$router.push({name: 'order'})" type="button" class="btn btn-primary"><i
                class="fas fa-cash-register"></i></button>
            <button data-dismiss="modal" type="button" class="btn btn-primary"><i class="fas fa-calendar-alt"></i></button>
            <button data-dismiss="modal" @click="$router.push({name: 'admin'})" v-if="user.manager" type="button" class="btn btn-primary"><i
                class="fas fa-chart-bar"></i></button>
          </div>
        </div>
        <!-- content 2 -->
        <div v-if="!user._id" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Logout Succesful</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            00:00
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-primary"><i class="fas fa-calendar-alt"></i></button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<script>
  import $ from 'jquery'
  export default {
    name: "app",
    data() {
      return {
        showAdminLogin: false,
        loginForm: true,
        creds: {},
        showLogin: false,
        showRegister: false,
        newAccount: {},
      };
    },
    mounted() {
      this.$store.dispatch('authenticate')
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      loginModalComputed() {
        return this.$store.state.loginModal
      },
    },
    watch: {
      user: function (val) {
        $('#loginModal').modal('show')
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
        this.$store.dispatch("login", this.creds)
      },
      logout() {
        this.$store.dispatch("logout");
      },
    }
  }
</script>

<style>
  img {
    margin-top: -10;
    margin-bottom: -30;
    padding-top: -20;
    padding-bottom: -20;
  }

  html,
  body {
    height: 100vh;
  }

  li {
    list-style: none;
  }

  #logo {
    background: url("assets/bobs-backgroundArtboard 1-100.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: auto;

    top: 0;
    left: 0;
  }

  .navbar {
    background-color: rgb(0, 198, 215);
  }

  .fas {
    font-size: 3vh
  }

  .drop-shadow {
    filter: drop-shadow(3px 5px 5px rgb(53, 52, 52));
  }

  .dropdown-item:hover {
    cursor: pointer;
  }

  /* #app {
  background-color: lightskyblue;
  height: 100vh;
} */
</style>