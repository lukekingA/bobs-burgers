import Vue from 'vue'
import Router from 'vue-router'
import Order from './views/Order.vue'
import Kitchen from './views/Kitchen.vue'
import webApp from './views/Web-App.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Store from './store'
import store from './store';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter(to, from, next) {
        if (store.state.user.manager) {
          return next()
        }
        next('/order')
      }
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/order',
      name: 'order',
      props: true,
      component: Order
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Web-App',
      name: 'webApp',
      component: webApp
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})