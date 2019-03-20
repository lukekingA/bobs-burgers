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
    }

  },
  actions: {

    //USER
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          console.log(res)
          commit('setUser', res.data)
          if(res.data.manager = false){
            router.push({name:'order'})
          } else {
            router.push({name: 'admin'})
          }
        })
    },
    logout({ commit , dipatch}) {
      auth.delete('logout')
        .then(res => {
          console.log(res)
          commit('setUser', {})
          router.push({name: 'login'})
        })
    },

    register({
      commit,
      dispatch
    }, newAdminCreds) {
      auth.post('register', newAdminCreds)
        .then(res => {
          console.log(res)
          commit('setAdmin', res.data)
        })

    }
  }

})