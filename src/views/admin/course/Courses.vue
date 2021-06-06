<template>
  <div>
    <div>
      <div>
        <!--el-form ref="form" :model="courseForm" label-width="80px">
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
        </el-form-->
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
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import store, { State } from "@/store";
import { useStore } from "vuex";
import { LIST_COURSES, POST_COURSE } from "@/store/VuexTypes";
import { Course, CourseWithUser } from "@/store/type";
import axios from "@/axios";

function useCourse(courseForm: Ref<Course>, currentUserId: number) {
  const addCourse = () => {
    store.dispatch(POST_COURSE, courseForm.value).then((resp) => {
      if (resp) {
        store.dispatch(LIST_COURSES, currentUserId);
        courseForm.value = {};
      }
    });
  };
  return {
    addCourse,
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const currentUserId = JSON.parse(sessionStorage.getItem("user")!).id;
    if (store.state.courses?.length == 0) {
      store.dispatch(LIST_COURSES, currentUserId);
    }
    let courses = ref<Course[]>();
    function getCourses() {
      axios.get("/course/").then((resp) => {
        if (resp) {
          const data: CourseWithUser[] = resp.data;
          data.forEach((cU) => {
            cU.courses?.forEach((c) => {
              console.log("c=" + c);
              courses.value?.push(c);
            });
          });
        }
      });
    }
    getCourses();
    const courseForm = ref<Course>({});
    const { addCourse } = useCourse(courseForm, currentUserId);
    return {
      courses,
      courseForm,
      addCourse,
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
