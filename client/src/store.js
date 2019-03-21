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
    admin: {},
    entreeItems: [],
    drinks: [],
    sides: [],
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    setAdmin(state, data) {
      state.admin = data
    },
    setEntreeItems(state, data) {
      state.entreeItems = data
    },
    setDrinks(state, data) {
      state.drinks = data
    },
    setSides(state, data) {
      state.admin = data
    }

  },
  actions: {

    //USER
    //#region --Login --
    login({
      commit,
      dispatch
    }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    logout({ commit, dispatch}) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          router.push({
            name: 'login'
          })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },

    register({
      commit,
      dispatch
    }, newCreds) {
      auth.post('register', newCreds)
        .then(res => {
          commit('setAdmin', res.data)
        })
    },
    closeLoginModal({
      commit,
      dispatch
    }) {
      commit('closeLoginModal')
    },
    //#endregion

    //#region --Menu --

    getEntreeItems({
      commit,
      dispatch
    }) {
      api.get('/menu/item').then(res => {
        commit('setEntreeItems', res.data)
      })
    },

    addEntreeItem({
      commit,
      dispatch
    }, data) {
      api.post('/menu/item', data).then(res => {
        dispatch('getEntreeItems')
      })
    },

    addEntree({
      commit,
      dispatch
    }, data) {
      api.post('menu/entrees', data.entree).then(res => {

        api.put('menu/entrees/' + res.data._id, data.entreeItems).then(res => {


        })
      })
    },
    //#endregion

    //#region--drinks

    getDrinks({
      commit,
      dispatch
    }) {
      api.get('/menu/drinks').then(res => {
        commit('setDrinks', res.data)
      })
    },

    addDrink({
      commit,
      dispatch
    }, data) {
      api.post('/menu/drinks', data).then(res => {
        dispatch('getDrinks')
      })
    },


    //#endregion

    //#region--sides

    getSides({
      commit,
      dispatch
    }) {
      api.get('/menu/sides').then(res => {
        commit('setSides', res.data)
      })
    },

    addSide({
      commit,
      dispatch
    }, data) {
      api.post('/menu/sides', data).then(res => {
        dispatch('getSides')
      })
    }


    //#endregion
  }

})