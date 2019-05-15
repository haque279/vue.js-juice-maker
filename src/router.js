import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import JuiceAll from './components/JuiceAll.vue'
import JuiceAdd from './components/JuiceAdd.vue'
import Juice from './components/Juice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/juice-all',
      name: '/juice-all',
      component: JuiceAll
    },
    {
      path: '/juice-add',
      name: '/juice-add',
      component: JuiceAdd
    },
    {
      path: '/juice',
      name: '/juice',
      component: Juice
    },
  ]
})
