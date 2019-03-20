import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  // timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 6000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    admin: {}
   
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    setAdmin(state, data) {
      state.admin = data
    },
  

  },
  actions: {

    //USER
    //#region --Login --
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          console.log(res)
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },

    register({ commit, dispatch }, newCreds) {
      auth.post('register', newCreds)
        .then(res => {
          console.log(res)
          commit('setAdmin', res.data)
        })
    },
    closeLoginModal({commit , dispatch}){
      commit('closeLoginModal')
    },
    //#endregion

    //#region --Menu --
    addEntreeItem({
      commit, dispatch
    }, data) {
      api.post('')
    }
    //#endregion

  }

})