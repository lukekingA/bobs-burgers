<template>
  <div class="admin row">
    <div class="col-1 d-flex flex-column">
      <button class=" mt-2 rounded-right bg-dark text-light border border-light tab-height" @click="switchView('addItem')"><small>Add
          Item</small></button>
      <button class="rounded-right bg-dark text-light border border-light tab-height" @click="switchView('editMenu')"><small>Edit
          Menu</small></button>
      <button class=" rounded-right bg-dark text-light border border-light tab-height" @click="switchView('menuMaker')"><small>Menu
          Maker</small></button>
      <button class=" rounded-right bg-dark text-light border border-light tab-height" @click="switchView('menuBook')"><small>Menu
          Book</small></button>
      <button class=" rounded-right bg-dark text-light border border-light tab-height" @click="switchView('ManageCreds')"><small>Manage
          Creds</small></button>
      <button class=" mb-2 rounded-right bg-dark text-light border border-light tab-height" @click="switchView('reports')"><small>Reports</small></button>
    </div>
    <div class="col mt-2" v-if="editMenu">
      <menu-editor></menu-editor>
    </div>
    <div class="col mt-2" v-if="menuMaker">
      <menu-maker></menu-maker>
    </div>
  </div>
</template>


<script>
  import MenuEditor from '@/components/MenuEditor.vue'
  import MenuMaker from '@/components/MenuMaker.vue'
  export default {
    name: 'admin',
    data() {
      return {
        addItem: true,
        editMenu: false,
        menuMaker: false,
        menuBook: false,
        manageCreds: false,
        reports: false
      }
    },
    computed: {},
    methods: {
      switchView(selection) {
        let shows = ['editMenu',
          'addItem',
          'menuMaker',
          'menuBook',
          'manageCreds',
          'reports'
        ]
        let newthis = this
        shows.forEach(j => newthis[j] = false)
        this[selection] = true
      }
    },
    components: {
      MenuEditor,
      MenuMaker,
    }
  }
</script>


<style scoped>
  .tab-height {
    height: 5rem;
  }
</style>

<!-- <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <input type="password" v-model="newUser.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form> -->