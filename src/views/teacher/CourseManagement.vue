<template>
  <div>
    <div>
      <div>
        <el-form ref="form" :model="courseForm" label-width="80px">
          <el-input
            v-model="courseForm.name"
            size="mini"
            class="addInput"
            placeholder="请输入实验课程名称"
            suffix-icon="el-icon-circle-plus"
          ></el-input>

          <el-input
            v-model="courseForm.studentNumber"
            size="mini"
            class="addInput"
            placeholder="请输入实验课程人数"
            suffix-icon="el-icon-circle-plus"
          ></el-input>
          <el-input
            v-model="courseForm.periods"
            size="mini"
            class="addInput"
            placeholder="请输入实验课程学时数"
            suffix-icon="el-icon-circle-plus"
          ></el-input>

          <el-button
            type="primary"
            size="mini"
            icon="el-icon-circle-plus"
            @click="addCourse"
            >添加</el-button
          >
        </el-form>
      </div>
    </div>
    <div>
      <el-table :data="courses" stripe type="2">
        <el-table-column
          prop="id"
          label="编号"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="实验课程名称"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="studentNumber"
          label="实验课程人数"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="periods" label="实验学时数" align="center">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="mini"
              @click="updateCourse(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteCourse(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="编辑" v-model="dialogFormVisible">
        <el-form :model="updateCourseForm">
          <el-tag class="dialog-tag">实验课程名称</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateCourseForm.name"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
          <el-tag class="dialog-tag">实验课程人数</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateCourseForm.studentNumber"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
          <el-tag class="dialog-tag">实验课程课时数</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateCourseForm.periods"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancelDoUpdateCourse">取 消</el-button>
            <el-button type="primary" @click="doUpdateCourse">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import store, { State } from "@/store";
import { useStore } from "vuex";
import {
  DELETE_COURSE,
  LIST_COURSES,
  POST_COURSE,
  UPDATE_COURSE,
} from "@/store/VuexTypes";
import { Course } from "@/store/type";

function useCourse(
  courseForm: Ref<Course>,
  dialogFormVisible: Ref<boolean>,
  updateCourseForm: Ref<Course>,
  currentUserId: number
) {
  const addCourse = () => {
    store.dispatch(POST_COURSE, courseForm.value).then((resp) => {
      if (resp) {
        store.dispatch(LIST_COURSES, currentUserId);
        courseForm.value = {};
      }
    });
  };

  const updateCourse = (index: number, data: Course) => {
    // 使用赋值操作以防双向绑定时用户在输入框输入时导致视图也跟着响应更改
    Object.assign(updateCourseForm.value, data);
    dialogFormVisible.value = true;
  };

  const doUpdateCourse = () => {
    dialogFormVisible.value = false;
    store.dispatch(UPDATE_COURSE, updateCourseForm.value).then((resp) => {
      store.dispatch(LIST_COURSES, currentUserId);
    });
  };
  const cancelDoUpdateCourse = () => {
    dialogFormVisible.value = false;
  };
  const deleteCourse = (index: number, data: Course) => {
    store.dispatch(DELETE_COURSE, data.id).then((resp) => {
      // 等待删除成功后再去拉取实验室列表
      if (resp) {
        store.dispatch(LIST_COURSES, currentUserId);
      }
    });
  };

  return {
    addCourse,
    updateCourse,
    deleteCourse,
    doUpdateCourse,
    cancelDoUpdateCourse,
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const currentUserId = JSON.parse(sessionStorage.getItem("user")!).id;
    if (store.state.courses?.length == 0) {
      store.dispatch(LIST_COURSES, currentUserId);
    }
    const courses = computed(() => store.state.courses);
    const courseForm = ref<Course>({});
    const updateCourseForm = ref<Course>({});
    const dialogFormVisible = ref(false);
    const {
      cancelDoUpdateCourse,
      doUpdateCourse,
      addCourse,
      updateCourse,
      deleteCourse,
    } = useCourse(
      courseForm,
      dialogFormVisible,
      updateCourseForm,
      currentUserId
    );
    return {
      courses,
      courseForm,
      addCourse,
      updateCourse,
      deleteCourse,
      updateCourseForm,
      dialogFormVisible,
      doUpdateCourse,
      cancelDoUpdateCourse,
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
