import Vue from 'vue'
import Router from 'vue-router'
import Order from './views/Order.vue'
import Kitchen from './views/Kitchen.vue'
import webApp from './views/Web-App.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Store from './store'

Vue.use(Router)


function guard(to, from, next) {
  if (Store.state.user._id) {

    next(); // allow to enter route
  } else {
    next('/'); // go to '/login';
  }
}

export default new Router({
  routes: [{
      path: '/admin',
      beforeEnter: guard,
      name: 'admin',
      component: Admin,
    },
    {
      path: '/kitchen',
      beforeEnter: guard,
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/order',
      beforeEnter: guard,
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