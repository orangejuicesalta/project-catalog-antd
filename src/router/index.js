import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../components/MainPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
