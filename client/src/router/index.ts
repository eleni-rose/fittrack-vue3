import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ActivityView from "../views/ActivityView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import ProfileView from "../views/ProfileView.vue";

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
      component: ActivityView,
    },
    {
      path: "/stats",
      name: "statistics",
      component: StatisticsView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/admin/all-posts",
      name: "admin-posts",
      component: () => import("../views/admin/AllPostsView.vue")
    },
    {
      path: "/admin/post/:id",
      name: "admin-edit-posts",
      component: () => import("../views/admin/EditPostsView.vue")
    },
  ],
});

export default router;
