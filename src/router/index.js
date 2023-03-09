import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      transition: 'fade'
    },
    component: HomeView
  },
  {
    path: '/new',
    name: 'new',
    meta: {
      transition: 'fade'
    },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/NewView.vue')
    }
  },
  {
    path: '/notification',
    name: 'notification',
    meta: {
      transition: 'fade'
    },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/NotificationView.vue')
    }
  },
  {
    path: '/team',
    name: 'team',
    meta: {
      transition: 'fade'
    },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
    }
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      transition: 'fade'
    },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
