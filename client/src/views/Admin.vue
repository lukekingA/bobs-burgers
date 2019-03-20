<template>
  <div class="admin row">
    <div class="col-1 d-flex flex-column">
<<<<<<< HEAD
      <button
        class="mt-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('editMenu')"
      >
        <small>
          Edit
          Menu
        </small>
      </button>
      <button
        class="right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('menuMaker')"
      >
        <small>
          Menu
          Maker
        </small>
      </button>
      <button
        class="right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('menuBook')"
      >
        <small>
          Menu
          Book
        </small>
      </button>
      <button
        class="right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('ManageCreds')"
      >
        <small>
          Manage
          Creds
        </small>
      </button>
      <button
        class="mb-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('reports')"
      >
        <small>Reports</small>
      </button>
=======

      <button class="mb-2 mt-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('editMenu')"><small>Edit
          Menu</small></button>
      <button class="mb-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('menuMaker')"><small>Menu
          Maker</small></button>
      <button class="mb-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('menuBook')"><small>Menu
          Book</small></button>
      <button class="mb-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('ManageCreds')"><small>Manage
          Creds</small></button>
      <button class="mb-2 mb-2 right-rounded bg-dark text-light border border-light tab-height"
        @click="switchView('reports')"><small>Reports</small></button>
>>>>>>> eb52116ad0aa5902cdf73ab84a9db79cecd8fef0
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
import MenuEditor from "@/components/MenuEditor.vue";
import MenuMaker from "@/components/MenuMaker.vue";
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
    MenuMaker
  }
};
</script>


<style scoped>
.tab-height {
  height: 5rem;
}

<<<<<<< HEAD
.right-rounded {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
=======
  .right-rounded {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    filter: drop-shadow(3px 5px 5px rgb(53, 52, 52))
  }
>>>>>>> eb52116ad0aa5902cdf73ab84a9db79cecd8fef0
</style>

<!-- <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <input type="password" v-model="newUser.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form> -->