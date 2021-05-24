import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import {Role} from '@/store/type'

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
        path: "labs",
        component: () => import("@/views/admin/lab/LabManagement.vue")
      },
      {
        path: "teachers",
        component: () => import("@/views/admin/teacher/TeacherManagement.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

/*const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: "/test1",
    component: () => import("@/views/Test1.vue"),
  },
  {
    path: "/test2",
    component: () => import("@/views/Test2.vue"),
  }
];

export function updateRoutes() {
  hasAdminRole(sessionStorage.getItem("user"));
}

export function hasAdminRole(user: any){
  user = JSON.parse(user);
  user.roles.forEach((r: Role) => {
    if(r.name == 'ADMIN'){
      adminRoutes.forEach(route => {
        router.addRoute(route);
      })
    }
  })
}
updateRoutes();*/