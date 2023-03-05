import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        transition: 'fade'
      }
    },
    {
      path: '/postes',
      name: 'postes',
      meta: {
        transition: 'fade'
      },
      component: function () {
        return import('../views/Postes.vue')
      }
    },
    {
      path: '/notification',
      name: 'notification',
      meta: {
        transition: 'fade'
      },
      component: function () {
        return import('../views/Notification.vue')
      }
    },
    {
      path: '/teams',
      name: 'teams',
      meta: {
        transition: 'fade'
      },
      component: function () {
        return import('../views/Teams.vue')
      }
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        transition: 'fade'
      },
      component: function () {
        return import('../views/Projects.vue')
      }
    },
  ],
});

export default router;
