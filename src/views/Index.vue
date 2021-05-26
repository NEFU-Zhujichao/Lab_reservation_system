<template>
  <el-container>
    <el-header class="indexHeader">
      <div class="indexTitle">实验室预约管理系统</div>
      <el-dropdown @command="commandHandler">
        <el-button type="primary">
          {{ user.name }} <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userinfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router v-if="isAdmin">
          <el-submenu index="1">
            <template #title
              ><i class="el-icon-s-tools"> 实验室管理</i></template
            >
            <el-menu-item index="/index/labs">实验室</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title
              ><i class="el-icon-s-custom"> 教师管理</i></template
            >
            <el-menu-item index="/index/teachers">教师</el-menu-item>
          </el-submenu>
        </el-menu>
        <el-menu router v-else>
          <el-submenu index="1">
            <template #title
              ><i class="el-icon-notebook-1"> 实验课程管理</i></template
            >
            <el-menu-item index="/index/courses">课程</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title><i class="el-icon-date"> 实验室预约</i></template>
            <el-menu-item index="/index/labReservation"
              >实验室预约</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div>欢迎来到实验室预约管理系统</div>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import axios from "@/axios";
import { useRouter } from "vue-router";
import { Role } from "@/store/type";
import { useStore } from "vuex";

function useUser(user: Ref<any>, isAdmin: Ref<boolean>) {
  const hasAdminRole = () =>
    user.value.roles.forEach((r: Role) => {
      if (r.name == "ADMIN") {
        isAdmin.value = true;
      }
    });
  return { hasAdminRole };
}
export default defineComponent({
  setup(context) {
    const store = useStore();
    const user = ref(JSON.parse(window.sessionStorage.getItem("user")!));
    const router = useRouter();
    const isAdmin = ref(false);
    const commandHandler = (command: string) => {
      if (command == "logout") {
        /*context
          .confirm("此操作将永久删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
          .then(() => {*/
        // 注销登陆
        axios.post("/logout");
        // 清空用户信息
        window.sessionStorage.removeItem("user");
        window.sessionStorage.removeItem("auth");
        window.sessionStorage.removeItem("tokenHeader");
        // 清空vuex上的课程信息
        store.state.courses = [];
        // 路由到登录页面
        router.replace("/");
        /*})
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });*/
      }
    };
    const { hasAdminRole } = useUser(user, isAdmin);
    hasAdminRole();
    return {
      user,
      commandHandler,
      isAdmin,
    };
  },
});
</script>
<style scoped>
.indexHeader {
  background: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.indexHeader .indexTitle {
  color: white;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
}
</style>
