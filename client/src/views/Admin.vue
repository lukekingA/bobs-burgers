<template>
  <div class="admin row">
    <div class="col-1 d-flex flex-column">
      <button class="mb-2 mt-2 drop-shadow right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('editMenu')">
        <small>
          Edit
          Menu
        </small>
      </button>
      <button class="mb-2 drop-shadow right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('menuMaker')">
        <small>
          Menu
          Maker
        </small>
      </button>
      <button class="mb-2 drop-shadow right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('manageCreds')">
        <small>
          Manage
          Creds
        </small>
      </button>
      <button class="mb-2 drop-shadow right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('reports')">
        <small>Reports</small>
      </button>
    </div>
    <div class="col mt-2" v-if="editMenu">
      <menu-editor></menu-editor>
    </div>
    <div class="col mt-2" v-if="manageCreds">
      <manage-creds></manage-creds>
    </div>
    <div class="col mt-2" v-if="reports">
      <reports></reports>
    </div>
    <div class="col mt-2" v-if="menuMaker">
      <menu-maker></menu-maker>
    </div>
  </div>
</template>


<script>
  import MenuEditor from "@/components/MenuEditor.vue";
  import MenuMaker from "@/components/MenuMaker.vue";
  import ManageCreds from "@/components/ManageCreds.vue";
  import Reports from "@/components/Reports.vue";

  export default {
    name: "admin",
    data() {
      return {
        editMenu: true,
        menuMaker: false,
        menuBook: false,
        manageCreds: false,
        reports: false
      };
    },
    computed: {},
    methods: {
      switchView(selection) {
        let shows = [
          "editMenu",
          "menuMaker",
          "menuBook",
          "manageCreds",
          "reports"
        ];
        let newthis = this;
        shows.forEach(j => (newthis[j] = false));
        this[selection] = true;
      }
    },
    components: {
      MenuEditor,
      MenuMaker,
      ManageCreds,
      Reports,

    }
  };
</script>


<style scoped>
  .tab-height {
    height: 5rem;
  }

  .right-rounded {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
</style>

<!-- <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <input type="password" v-model="newUser.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form> -->