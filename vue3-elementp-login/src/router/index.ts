import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/loginRegister",
    name: "LoginRegister",
    component: () => import("../views/LoginRegister.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
