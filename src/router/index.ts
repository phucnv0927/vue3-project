import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { isTokenExpired } from "@/utils/authGurad";
import HomeView from "@/views/Home.vue";
import SigninView from "@/views/Auth/Signin.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/login", name: "Login", component: SigninView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && !isTokenExpired()) {
    return next("/");
  }
  next();
});

export default router;

