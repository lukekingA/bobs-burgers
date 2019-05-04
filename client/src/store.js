import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import router from './router';

Vue.use(Vuex);
let base = window.location.host.includes('localhost:8080') ?
  'http://localhost:3000/' :
  '/';

let auth = Axios.create({
  baseURL: base + 'auth/',
  timeout: 6000,
  withCredentials: true
});

let api = Axios.create({
  baseURL: base + 'api/',
  timeout: 6000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    taxRate: 0,
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
    orders: [],
    currentOrder: [],
    buildingOrder: {},
    activeOrders: [],
    activeOrderItems: [],
    buildingMeal: [],
    buildingMealItems: [],
    mealsByOrderId: [],
    drinksByOrderId: [],
    entreesByOrderId: [],
    sidesByOrderId: []

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
      state.currentOrder = [];
    },
    clearBuildingOrder(state) {
      state.buildingOrder = {};
    },
    setOrders(state, data) {
      state.orders = data
    },
    setActiveOrders(state, data) {
      state.activeOrders = data
    },
    activeOrderItems(state, data) {
      state.activeOrderItems.push(data)
    },
    clearActOrdItems(state) {
      state.activeOrderItems = []
    },
    employeeRegister(state, data) {
      state.employee = data;
    },
    buildingOrder(state, data) {
      state.buildingOrder = data;
    },
    buildingMeal(state, data) {
      state.buildingMeal.push(data);
    },
    buildingMealItems(state, data) {
      state.buildingMealItems.push(data);
    },
    removeMeal(state, index) {
      state.currentOrder.splice(index, 1);
    },
    setRate(state, data) {
      state.taxRate = data
    },
    setSidesByOrderID(state, data) {
      state.sidesByOrderId = data
    },
    setEntreesByOrderID(state, data) {
      state.entreesByOrderId = data
    },
    setDrinksByOrderID(state, data) {
      state.drinksByOrderId = data
    },
    setMealsByOrderID(state, data) {
      state.mealsByOrderId = data
    }


  },
  actions: {
    //USER
    //#region --Login --
    login({
      commit
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
      commit
    }) {
      auth.delete('logout').then(res => {
        commit('setUser', {});
        router.push({
          name: 'login'
        });
      });
    },
    authenticate({
      commit
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
    editEntree({}, newData) {
      console.log(newData);
      api.put('menu/entrees/' + newData._id, newData);
    },
    //#endregion

    //#region --drinks--

    getDrinks({
      commit
    }) {
      api.get('/menu/drinks').then(res => {
        commit('setDrinks', res.data);
      });
    },

    addDrink({
      dispatch
    }, data) {
      api.post('/menu/drinks', data).then(res => {
        dispatch('getDrinks');
      });
    },

    editDrink({
      commit
    }, newData) {
      console.log(newData);
      api.put('/menu/drinks/' + newData._id, newData).then(res => {
        console.log(res);
      });
    },

    //#endregion

    //#region --sides--

    getSides({
      commit
    }) {
      api.get('/menu/sides').then(res => {
        commit('setSides', res.data);
      });
    },

    addSide({
      dispatch
    }, data) {
      api.post('/menu/sides', data).then(res => {
        dispatch('getSides');
      });
    },

    editSide({
      commit,
      dispatch
    }, newData) {
      api
        .put('/menu/sides/' + newData._id, newData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },

    //#endregion
    //#region --COMMENTS--

    getComments({
      commit
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
      };
      api.post('orders/meals', mealData).then(res => {
        commit('buildingMeal', res.data.data);
        dispatch('makeMeal', data);
      });
    },

    makeMeal({
      commit,
      state
    }, data) {
      Object.keys(data).forEach(key => {
        delete data[key]._id;
        if (typeof data[key] == 'object' && data[key].name) {
          data[key].orderId = state.buildingOrder._id;
          data[key].mealId =
            state.buildingMeal[state.buildingMeal.length - 1]._id;
          let dict = {
            sandwich: 'entree',
            drink: 'drink',
            side: 'side'
          };
          api.post(`orders/${dict[key]}`, data[key]).then(res => {
            commit('buildingMealItems', res.data.data);

          });
        }

      });
    },

    deleteMeal({
      commit
    }, data) {
      api.delete('orders/meals/' + data.id).then(() => {
        commit('removeMeal', data.index);

      });
    },

    makeOrder({
      commit,
      state
    }, data) {
      data.managerId = state.user._id;
      api.post('orders/', data).then(res => {
        commit('buildingOrder', res.data.data);
      });
    },
    editOrder({
      commit,
      dispatch,
      state
    }, data) {
      api.put('orders/' + state.buildingOrder._id, data).then(res => {
        commit('buildingOrder', res.data.data);
        dispatch('clearOrder');
      });
      dispatch('getActiveOrders')
    },

    clearOrder({
      commit
    }) {
      commit('clearOrder');
      commit('clearBuildingOrder')
    },
    //#endregion

    //#region --Reports Relevant--
    getOrders({
      commit,
      dispatch
    }) {
      api.get('orders/')
        .then(res => {
          commit('setOrders', res.data)
        })
    },

    getMealsByOrderId({
      commit,
      dispatch
    }, orderId) {
      api.get('orders/meals/' + orderId)
        .then(res => {
          commit("setMealsByOrderID", res.data)
        })
    },
    getDrinksByOrderId({
      commit,
      dispatch
    }, orderId) {
      api.get('orders/drinks/' + orderId)
        .then(res => {
          commit("setDrinksByOrderID", res.data)
        })
    },
    getEntreesByOrderId({
      commit,
      dispatch
    }, orderId) {
      api.get('orders/entrees/' + orderId)
        .then(res => {
          commit("setEntreesByOrderID", res.data)
        })
    },
    getSidesByOrderId({
      commit,
      dispatch
    }, orderId) {
      api.get('orders/sides/' + orderId)
        .then(res => {
          commit("setSidesByOrderID", res.data)
        })
    },

    changeTax({
      commit
    }, data) {
      api.delete('menu/tax').then(res => {
        api.post('menu/tax', data).then(rate => {
          commit('setRate', rate)
        })
      })
    },
    getTaxRate({
      commit
    }) {
      api.get('menu/tax').then(res => {
        commit('setRate', res.data)
      })
    },

    getActiveOrders({
      commit,
      dispatch
    }) {
      commit('clearActOrdItems')
      api.get('orders/active/').then(res => {
        commit('setActiveOrders', res.data);
        dispatch('setActOrdItems')
      })
    },

    setActOrdItems({
      commit,
      dispatch,
      state
    }) {
      state.activeOrders.forEach(o => {
        api.get('orders/side/' + o._id).then(res => {
          if (res.data.length) {
            commit('activeOrderItems', res.data)
          }
        })
        api.get('orders/drink/' + o._id).then(res => {
          if (res.data.length) {
            commit('activeOrderItems', res.data)
          }
        })
        api.get('orders/entree/' + o._id).then(res => {
          if (res.data.length) {
            commit('activeOrderItems', res.data)
          }
        })
      })
    }
    //#endregion
  }
});

// responce.data.forEach(o => {


//   api.get('orders/side/' + o._id).then(res => {
//     let data = {
//       id: o._id,
//       data: {
//         sides: res.data
//       }
//     }
//     commit('setActiveOrders', data)
//     //dict[o._id].side = res.data
//   })
//   api.get('orders/drink/' + o._id).then(res => {
//     let data = {
//       id: o._id,
//       data: {
//         drinks: res.data
//       }
//     }
//     commit('setActiveOrders', data)
//     //dict[o._id].drink = res.data
//   })
//   api.get('orders/entree/' + o._id).then(res => {
//     let data = {
//       id: o._id,
//       data: {
//         entrees: res.data
//       }
//     }