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
      <div class="pageData">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
import { Reservation, RestPageBean } from "@/store/type";
import axios from "@/axios";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const reservations = ref<Reservation[]>([]);
    let total = ref(0);
    let currentPage = ref(1);
    let size = ref(10);
    function getReservations() {
      axios
        .get(
          `/reservationTime/?currentPage=${currentPage.value}&size=${size.value}`
        )
        .then((resp) => {
          if (resp) {
            const data = resp;
            total.value = (data as unknown as RestPageBean).total!;
            reservations.value = resp.data;
          }
        });
    }
    getReservations();
    function currentChange(current: number) {
      currentPage.value = current;
      getReservations();
    }
    function sizeChange(s: number) {
      size.value = s;
      getReservations();
    }
    return {
      reservations,
      total,
      currentChange,
      sizeChange,
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
.pageData {
  display: flex;
  justify-content: flex-end;
}
</style>
