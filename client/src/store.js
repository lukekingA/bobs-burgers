import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import router from './router';

Vue.use(Vuex);

let auth = Axios.create({
  baseURL: '//localhost:3000/auth/',
  // timeout: 3000,
  withCredentials: true
});

let api = Axios.create({
  baseURL: '//localhost:3000/api/',
  //timeout: 6000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    user: {},
    employee: {},
    employees: [],
    admin: {},
    entreeItems: [],
    entrees: [],
    newEntree: {},
    drinks: [],
    sides: [],
    comments: [],
    currentOrder: [],
    buildingOrder: {},
    allOrders: [],
    buildingMeal: [],
    buildingMealItems: []
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setAdmin(state, data) {
      state.admin = data;
    },
    setEntreeItems(state, data) {
      state.entreeItems = data;
    },
    setAllEmployees(state, data) {
      state.employees = data;
    },
    setEntrees(state, data) {
      state.entrees = data;
    },
    setComments(state, data) {
      state.comments = data;
    },
    setSides(state, data) {
      state.sides = data;
    },
    setDrinks(state, data) {
      state.drinks = data;
    },
    setNewEntree(state, data) {
      state.newEntree = data;
    },
    clearNewEntree(state) {
      state.newEntree = {};
    },
    addToOrder(state, data) {
      state.currentOrder.push(data);
    },
    clearOrder(state) {
      state.currentOrder = []
    },
    setAllOrders(state) {
      state.allOrders = []
    },
    employeeRegister(state, data) {
      state.employee = data;
    },
    buildingOrder(state, data) {
      state.buildingOrder = data
    },
    buildingMeal(state, data) {
      state.buildingMeal.push(data)
    },
    buildingMealItems(state, data) {
      state.buildingMealItems.push(data)
    },
    removeMeal(state, index) {
      state.currentOrder.splice(index, 1)
    }
  },
  actions: {
    //USER
    //#region --Login --
    login({
      commit,
      dispatch
    }, creds) {
      auth
        .post('login', creds)
        .then(res => {
          commit('setUser', res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    logout({
      commit,
      dispatch
    }) {
      auth.delete('logout').then(res => {
        commit('setUser', {});
        router.push({
          name: 'login'
        });
      });
    },
    authenticate({
      commit,
    }) {
      auth
        .get('authenticate')
        .then(res => {
          commit('setUser', res.data);
          // router.push({
          //   name: 'boards'
          // })
        })
        .catch(res => {
          router.push({
            name: 'login'
          });
        });
    },

    register({
      dispatch
    }, newCreds) {
      auth.post('register', newCreds).then(res => {
        dispatch('getAllEmployees');
        return res.data;
      });
    },
    registerNewEmployee({
      dispatch
    }, newCreds) {
      auth.post('newemployee', newCreds).then(res => {
        dispatch('getAllEmployees');
        return res.data;
      });
    },
    closeLoginModal({
      commit
    }) {
      commit('closeLoginModal');
    },

    getAllEmployees({
      commit
    }) {
      auth.get('all').then(res => {
        console.log(res);
        commit('setAllEmployees', res.data);
      });
    },
    fireEmployee({
      dispatch
    }, employeeId) {
      auth
        .delete('/' + employeeId)
        .then(res => {
          console.log(res);
          dispatch('getAllEmployees');
        })
        .catch(err => {
          console.error(err);
        });
    },
    editEmployee({
      dispatch
    }, newCreds) {
      auth
        .put('edit', newCreds)
        .then(res => {
          dispatch('getAllEmployees');
        })
        .catch(err => {
          console.error(err);
        });
    },

    employeeRegister({
      commit
    }, data) {
      commit('employeeRegister', data);
    },
    //#endregion

    //#region --Menu --

    getEntreeItems({
      commit
    }) {
      api.get('menu/item').then(res => {
        commit('setEntreeItems', res.data);
      });
    },

    addEntreeItem({
      dispatch
    }, data) {
      api.post('menu/item', data).then(res => {
        dispatch('getEntreeItems');
      });
    },

    addEntree({
      commit
    }, data) {
      api.post('menu/entrees', data.entree).then(res => {
        api.put('menu/entrees/' + res.data._id, data.entreeItems).then(res => {
          commit('setNewEntree', res.data.data);
        });
      });
    },

    getEntrees({
      commit
    }) {
      api.get('menu/entrees').then(res => {
        commit('setEntrees', res.data);
      });
    },

    deleteEntree({
      dispatch
    }, id) {
      api.delete('menu/entrees/' + id).then(res => {
        dispatch('clearNewEntree');
      });
    },

    clearNewEntree({
      commit
    }) {
      commit('clearNewEntree');
    },
    editEntree({
      commit
    }, newData) {
      console.log(newData)
      api.put('menu/entrees/' + newData._id, newData)
    },
    //#endregion

    //#region --drinks--

    getDrinks({
      commit,
      dispatch
    }) {
      api.get('/menu/drinks').then(res => {
        commit('setDrinks', res.data);
      });
    },

    addDrink({
      commit,
      dispatch
    }, data) {
      api.post('/menu/drinks', data).then(res => {
        dispatch('getDrinks');
      });
    },

    editDrink({
      commit,
      dispatch
    }, newData) {
      console.log(newData)
      api.put('/menu/drinks/' + newData._id, newData)
        .then(res => {
          console.log(res)
        })
    },

    //#endregion

    //#region --sides--

    getSides({
      commit,
      dispatch
    }) {
      api.get('/menu/sides').then(res => {
        commit('setSides', res.data);
      });
    },

    addSide({
      commit,
      dispatch
    }, data) {
      api.post('/menu/sides', data).then(res => {
        dispatch('getSides');
      });
    },

    editSide({
      commit,
      dipatch
    }, newData) {
      api.put('/menu/sides/' + newData._id, newData)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    },


    //#endregion
    //#region --COMMENTS--

    getComments({
      commit,
      dispatch
    }) {
      api.get('/menu/comments').then(res => {
        commit('setComments', res.data);
      });
    },

    addComment({
      dispatch
    }, data) {
      api.post('/menu/comments', data).then(res => {
        dispatch('getComments');
      });
    },

    //#endregion

    //#region --Order--
    addToOrder({
      commit,
      dispatch,
      state
    }, data) {
      commit('addToOrder', data);
      let mealData = {
        orderId: state.buildingOrder._id,
        price: data.price,
        comment: data.comment
      }
      api.post('orders/meals', mealData).then(res => {
        commit('buildingMeal', res.data.data)
        dispatch('makeMeal', data)
      })
    },

    makeMeal({
      commit,
      dispatch,
      state
    }, data) {
      //sort out what each of the keys is and send the appropriate call. ref err list
      Object.keys(data).forEach(key => {
        if (typeof data[key] == 'object' && data[key].name) {
          data[key].orderId = state.buildingOrder._id
          data[key].mealId = state.buildingMeal._id
          let dict = {
            sandwich: 'entree',
            drink: 'drink',
            side: 'side'
          }
          api.post(`orders/${dict[key]}`, data[key]).then(res => {
            commit('buildingMealItems', res.data)
            if (data[key].components) {
              api.put('orders/entree/' + res.data.data._id).then(res => {
                console.log(res)
              })
            }
          })
        }

      })
    },

    deleteMeal({
      commit,
      dispatch,
      state
    }, data) {
      api.delete('orders/meals/' + data.id).then(() => {
        commit('remove Meal', data.index)
      })
    },

    makeOrder({
      commit,
      dispatch,
      state
    }, data) {
      data.managerId = state.user._id;
      api.post('orders/', data).then(res => {
        commit('buildingOrder', res.data.data)
      })
    },
    editOrder({
      commit,
      dispatch,
      state
    }, data) {
      api.put('orders/' + state.buildingOrder._id, data).then(res => {
        commit('buildingOrder', res.data.data)
        dispatch('clearOrder')
      })
    },

    clearOrder({
      commit,
      state
    }) {
      commit('clearOrder')
    },

    getActiveOrder({
      commit,
      dispatch }) {
      api.get('orders/active/').then(res => {
        commit('allOrders', res.data)
      })
    }

    //#endregion
  }
})