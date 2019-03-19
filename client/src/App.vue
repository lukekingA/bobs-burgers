<template>
  <div id="app">
    <!-- <router-view /> -->
    <login></login>
  </div>
</template>




<script>
  import Login from '@/views/Login.vue'
  export default {
    name: 'app',

    computed: {

    },
    components: {
      Login,

    },
  }
</script>

<style>

</style>