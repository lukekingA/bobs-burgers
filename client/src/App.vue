<template>
  <div id="logo" class="">
    <nav class="navbar fixed-top">
      <a class="navbar-brand">
        <img class="mt-1 mb-1" src="./assets/bob_logo_sm.png" width="65" height="65" alt>
      </a>
      <div v-if="user.name">
        <router-link to="kitchen" v-if="this.$route.name != 'kitchen'"
          class="btn btn-sm bg-dark text-light drop-shadow m-1 border-light"><small>Kitchen</small></router-link>
        <router-link to="admin" v-if="this.$route.name != 'admin' && user.manager"
          class="btn btn-sm bg-dark text-light drop-shadow m-1 border-light"><small>Admin</small></router-link>
        <router-link to="order" v-if="this.$route.name != 'order'"
          class="btn btn-sm bg-dark text-light drop-shadow m-1 border-light"><small>Register</small></router-link>
      </div>
      <p class="time">{{curTime | date}}</p>
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
          <input v-model="newAccount.email" class="form-control rounded pl-3 mr-1" type="search" placeholder="Email"
            autofocus aria-label="Search">
          <input v-model="newAccount.name" class="form-control mr-sm-2" type="search" placeholder="Username"
            aria-label="Search">
          <input v-model="newAccount.password" class="form-control mr-sm-2" type="search" placeholder="Password"
            minlength="5" aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit">GO!</button>
        </form>
      </div>
    </nav>
    <div id="app" class="container-fluid app-height">
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
          <div class="modal-body">Where do you want to go?</div>
          <div class="modal-footer d-flex justify-content-center">
            <button data-dismiss="modal" @click="$router.push({name: 'order'})" type="button"
              class="btn btn-primary">Register</button>
            <button data-dismiss="modal" @click="$router.push({name: 'kitchen'})" type="button"
              class="btn btn-primary">Kitchen</button>
            <button data-dismiss="modal" @click="$router.push({name: 'admin'})" v-if="user.manager" type="button"
              class="btn btn-primary">Admin Tools</button>
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
          <div class="modal-body text-center">{{new Date() | time}}</div>
          <div class="modal-footer d-flex justify-content-center"></div>
        </div>
        <!-- <div>
          <p>Please Login</p>
        </div> -->
      </div>
    </div>
  </div>
</template>




<script>
  import $ from "jquery";
  import Moment from "moment";

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
        curTime: Date.now()
      };
    },
    mounted() {
      this.$store.dispatch("authenticate");
      this.setCurTime();
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      loginModalComputed() {
        return this.$store.state.loginModal;
      }
    },
    watch: {
      user: function () {
        $("#loginModal").modal("show");
      }
    },
    filters: {
      time: function (val) {
        return Moment(val).format('hh:mm:ss')
      },
      date: function (val) {
        return Moment(val).format("MMMM DD YYYY, h:mm a")
      }
    },
    methods: {
      register() {
        let data = this.newAccount;
        data.manager = false;
        this.$store.dispatch("register", this.newAccount);
        this.newAccount = {};
        this.showRegister = !this.showRegister
        this.showLogin = !this.showLogin
      },
      login() {
        this.showLogin = false;
        this.$store.dispatch("login", this.creds);
        this.creds = {}
      },
      logout() {
        this.$store.dispatch("logout");
      },
      setCurTime() {
        let newThis = this
        let timeInterval = setInterval(
          function () {
            newThis.curTime = Date.now()
          }, 60000
        )
      }
    }
  }
</script>

<style>
  .time {
    font-weight: 700;

    font-size: 20px;
    color: rgb(54, 54, 54);
  }

  img {
    margin-top: -20px;
    margin-bottom: -30px;
    padding-top: -20px;
    padding-bottom: -20px;
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
    background-attachment: fixed;
    height: 100vh;
    width: auto;

    top: 0;
    left: 0;
  }

  .navbar {
    background-color: rgb(0, 198, 215);
    position: fixed;
    top: 0;
    width: 100%;
    height: 90px;
  }

  .fas {
    font-size: 3vh;
  }

  .drop-shadow {
    filter: drop-shadow(3px 5px 5px rgb(53, 52, 52));
  }

  .dropdown-item:hover {
    cursor: pointer;
  }

  .app-height {
    height: calc(100vh - 95px);
    margin-top: 90px;
  }
</style>