import Vue from 'vue'
import Home from './views/Home.vue'
import Kitchen from './views/Kitchen.vue'
import webApp from './views/Web-App.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/kitchen',
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/',
      name: 'home',
      props: true,
      component: Home
    },
    {
      path: '/login',
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