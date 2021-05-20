import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "test1",
        name: "test1",
        component: () => import("@/views/Test1.vue"),
      },{
        path: "test2",
        name: "test2",
        component: () => import("@/views/Test2.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
