import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/activity",
      name: "activity",
      component: () => import("../views/ActivityView.vue"),
    },
    {
      path: "/stats",
      name: "statistics",
      component: () => import("../views/StatisticsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
