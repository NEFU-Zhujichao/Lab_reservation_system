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
      <el-table :data="allCourses" stripe type="2">
        <el-table-column
          prop="id"
          label="编号"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="授课教师名字"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="courseName"
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

        <el-table-column
          prop="periods"
          label="实验课程学时数"
          align="center"
          width="200"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import store, { State } from "@/store";
import { useStore } from "vuex";
import { GET_ALL_COURSES, LIST_COURSES, POST_COURSE } from "@/store/VuexTypes";
import { Course, Courses } from "@/store/type";
import axios from "@/axios";

interface CourseWithUser {
  id?: number;
  name?: string;
  courses?: Course[];
}

function useCourse(
  courseForm: Ref<Course>,
  allCourses: Ref<Courses[] | undefined>
) {
  const addCourse = () => {
    store.dispatch(POST_COURSE, courseForm.value).then((resp) => {
      if (resp) {
        courseForm.value = {};
        store.state.allCourses = [];
        getCourses();
      }
    });
  };

  const getCourses = () => {
    store.dispatch(GET_ALL_COURSES).then((resp) => {
      if (resp) {
        const data: CourseWithUser[] = resp.data;
        data.forEach((cWU) => {
          cWU.courses?.forEach((c) => {
            if (allCourses.value != null) {
              allCourses.value.push({
                id: c.id,
                name: cWU.name,
                courseName: c.name,
                studentNumber: c.studentNumber,
                periods: c.periods,
              });
            }
          });
        });
      }
    });
  };
  return {
    addCourse,
    getCourses,
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const allCourses = computed(() => store.state.allCourses);
    const courseForm = ref<Course>({});
    const { addCourse, getCourses } = useCourse(courseForm, allCourses);
    if (allCourses.value?.length == 0) getCourses();
    return {
      allCourses,
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
