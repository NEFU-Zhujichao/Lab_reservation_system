<template>
  <div>
    <div>
      <el-form ref="form" :model="userForm" label-width="80px">
        <el-input
          v-model="userForm.name"
          size="mini"
          class="addInput"
          placeholder="请输入用户的真实姓名"
          suffix-icon="el-icon-circle-plus"
        ></el-input>

        <el-input
          v-model="userForm.username"
          size="mini"
          class="addInput"
          placeholder="请输入用户的登录用户名"
          suffix-icon="el-icon-circle-plus"
        ></el-input>

        <el-input
          v-model="userForm.password"
          size="mini"
          class="addInput"
          placeholder="请输入用户的登录密码"
          show-password
          suffix-icon="el-icon-circle-plus"
        ></el-input>
        <el-checkbox-group v-model="userForm.roles">
          <el-checkbox v-for="r in roles" :key="r.id" :label="r.id">{{
            r.name
          }}</el-checkbox>
        </el-checkbox-group>
        <!--el-select
          v-model="userForm.roles"
          placeholder="请选择"
          size="small"
          class="addInput"
        >
          <el-option
            v-for="r in roles"
            :key="r.id"
            :label="r.name"
            :value="{ id: r.id }"
          >
          </el-option>
        </el-select-->
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-circle-plus"
          @click="addUser"
          >添加</el-button
        >
      </el-form>
    </div>
    <div>
      <el-table :data="users" stripe type="2">
        <el-table-column
          prop="id"
          label="编号"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="用户姓名"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户登录名"
          align="center"
          width="150"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="updateUser(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteUser(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="编辑" v-model="dialogFormVisible">
        <el-form :model="updateTeacherForm">
          <el-tag class="dialog-tag">编号</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateTeacherForm.id"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
          <el-tag class="dialog-tag">真实姓名</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateTeacherForm.name"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancelDoUpdateTeacher">取 消</el-button>
            <el-button type="primary" @click="doUpdateTeacher">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import store, { State } from "@/store";
import { Role, User } from "@/store/type";
import { useStore } from "vuex";
import { computed, defineComponent, ref, Ref } from "vue";
import {
  DELETE_USER,
  LIST_USERS,
  POST_USER,
  UPDATE_USER,
} from "@/store/VuexTypes";

function useUsers(
  users: Ref<User>,
  dialogFormVisible: Ref<boolean>,
  updateTeacherForm: Ref<User>
) {
  const addUser = () => {
    let rolesId: number[] = [];
    users.value.roles?.forEach((r) => rolesId.push(r as number));
    users.value.roles = [];
    rolesId.forEach((r) => users.value.roles?.push({ id: r }));
    rolesId = [];
    store.dispatch(POST_USER, users.value).then((resp) => {
      if (resp) {
        store.dispatch(LIST_USERS);
        users.value = { roles: [] };
      }
    });
  };

  const updateUser = (index: number, data: User) => {
    Object.assign(updateTeacherForm.value, data);
    dialogFormVisible.value = true;
  };

  const doUpdateTeacher = () => {
    dialogFormVisible.value = false;
    store.dispatch(UPDATE_USER, updateTeacherForm.value).then((resp) => {
      if (resp) {
        store.dispatch(LIST_USERS);
      }
    });
  };

  const deleteUser = (index: number, data: User) => {
    store.dispatch(DELETE_USER, data.id).then((resp) => {
      if (resp) {
        store.dispatch(LIST_USERS);
      }
    });
  };

  const cancelDoUpdateTeacher = () => {
    dialogFormVisible.value = false;
  };

  return {
    addUser,
    updateUser,
    doUpdateTeacher,
    deleteUser,
    cancelDoUpdateTeacher,
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const userForm = ref<User>({ roles: [] });
    const updateTeacherForm = ref<User>({ roles: [] });
    const dialogFormVisible = ref(false);
    if (store.state.users?.length == 0) {
      store.dispatch(LIST_USERS);
    }
    const users = computed(() => store.state.users);
    const roles: Role[] = [
      {
        id: 1,
        name: "ADMIN",
      },
      {
        id: 2,
        name: "TEACHER",
      },
    ];
    const {
      addUser,
      updateUser,
      doUpdateTeacher,
      deleteUser,
      cancelDoUpdateTeacher,
    } = useUsers(userForm, dialogFormVisible, updateTeacherForm);
    return {
      userForm,
      users,
      roles,
      addUser,
      updateUser,
      doUpdateTeacher,
      deleteUser,
      cancelDoUpdateTeacher,
      updateTeacherForm,
      dialogFormVisible,
    };
  },
});
</script>
<style scoped>
.addInput {
  width: 400px;
  margin: 10px 10px 10px 0;
}
.dialog-tag {
  margin-right: 20px;
}
</style>
