<template>
    <!-- <div>
      <nav v-if="!user._id" class="navbar ">
        <a class="navbar-brand"><i class="fas fa-hamburger"></i>BOBS BURGERS</a>
          <div class="btn-group">
            <button v-if="!showRegister" @click="showLogin = !showLogin" class="btn my-2 my-sm-0"><i class="fas fa-door-open"></i></i></button>
              <form v-if="showLogin" class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button clas  s="btn my-2 my-sm-0" type="submit">GO!</button>
              </form>
            <button v-if="!showLogin"  @click="showRegister = !showRegister" class="btn my-2 my-sm-0"><i class="fas fa-user-plus"></i></i></button>
              <form v-if="showRegister" class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="username" aria-label="Search">
                <input class="form-control mr-sm-2" type="search" placeholder="email" aria-label="Search">
                <input class="form-control mr-sm-2" type="search" placeholder="password" aria-label="Search">
                <button class="btn my-2 my-sm-0" type="submit">GO!</button>
              </form>
          </div>
        </nav> -->
      <div id="app">
        <login></login>
      </div>
  </div>
</template>




<script>
  import Login from '@/views/Login.vue'
  import Admin from '@/views/Admin.vue'
  export default {
    name: 'app',
    data() {
      return {
        showLogin: false,
        showRegister: false
      }
    },
    computed: {
      user(){
        return this.$store.state.user
      }

    },
    
    components: {
      Login,
      Admin

    },
  }
</script>

<style>
  .navbar{
    background-color: darkcyan
  }
  #app{
    background-color: lightskyblue;
    height: 100vh
  }
</style>