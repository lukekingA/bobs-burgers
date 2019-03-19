import Vue from 'vue'
import Router from 'vue-router'
import Order from './views/Order.vue'
import Kitchen from './views/Kitchen.vue'
import webApp from './views/Web-App.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/kitchen',
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/',
      name: 'login',
      props: true,
      component: Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order
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