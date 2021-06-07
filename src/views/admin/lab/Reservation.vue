<template>
  <div>
    <div>
      <el-table :data="reservations" stripe type="2">
        <el-table-column
          prop="id"
          label="编号"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="uname"
          label="授课教师名字"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="cname"
          label="实验课程名称"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="labName"
          label="实验室名称"
          align="center"
          width="200"
        >
        </el-table-column>

        <el-table-column prop="week" label="周" align="center" width="200">
        </el-table-column>
        <el-table-column prop="day" label="星期" align="center" width="200">
        </el-table-column>
        <el-table-column prop="section" label="节数" align="center" width="200">
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

interface Reservation {
  id?: number;
  uid?: number;
  uname?: string;
  cid?: number;
  cname?: string;
  labName?: string;
  week?: number;
  day?: number;
  section?: number;
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const reservations = ref<Reservation[]>([]);
    function getReservations() {
      axios.get("/reservationTime/").then((resp) => {
        if (resp) {
          reservations.value = resp.data;
        }
      });
    }
    getReservations();
    return {
      reservations,
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
