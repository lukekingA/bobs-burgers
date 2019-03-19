<template>
  <div id="app">
    <!-- <admin></admin> -->
    <!-- <router-view /> -->
    <login></login>
  </div>
</template>




<script>
  import Login from '@/views/Login.vue'
  import Admin from '@/views/Admin.vue'
  export default {
    name: 'app',

    computed: {

    },
    components: {
      Login,
      Admin

    },
  }
</script>

<style>

</style>