<template>
  <div>
    <div>
      <el-select
        v-model="courseIdRef"
        placeholder="请选择要预约的实验课程"
        size="mini"
        class="selectInput"
      >
        <el-option
          v-for="c in courses"
          :key="c.id"
          :label="c.name"
          :value="c.id"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-circle-plus"
        @click="queryLabs"
        >查询可用实验室</el-button
      >
    </div>
    <div>
      <el-select
        v-model="labNameRef"
        placeholder="请选择要预约的实验室"
        size="mini"
        class="selectInput"
      >
        <el-option
          v-for="l in labs"
          :key="l.id"
          :label="l.name"
          :value="l.name"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-circle-plus"
        @click="queryAppointments"
        >查询该实验室的预约情况</el-button
      >
    </div>
    <div>
      <el-dialog
        title="选择实验时间"
        v-model="dialogFormVisible"
        fullscreen
        center
      >
        <div style="text-align: center">
          <span class="selectedPeriods">可选学时： </span>
          <span
            :style="refScores >= sumScores ? reachedStyle : unreachedStyle"
            class="selectedPeriods"
          >
            {{ refScores }}
          </span>
          <span class="selectedPeriods">/ {{ sumScores }}</span>
        </div>
        <table border="1px solid red">
          <thead>
            <th>第几节</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </thead>
          <tbody>
            <tr v-for="rs in reservationState" :key="rs.sectionId">
              <td>第{{ rs.sectionId }}节</td>
              <td v-for="d in rs.days" :key="d.day">
                <template v-for="c in d.checkboxs" :key="c.week">
                  <template v-if="c.week % 3 == 0">
                    第{{ c.week }}周
                    <input
                      type="checkbox"
                      :disabled="c.disabled"
                      :value="{
                        week: c.week,
                        day: d.day,
                        section: rs.sectionId,
                      }"
                      @change="calculateScores"
                      v-model="selectedCheckboxs.reservationTimes"
                    />
                    <br />
                  </template>
                  <template v-else>
                    第{{ c.week }}周
                    <input
                      type="checkbox"
                      :disabled="c.disabled"
                      :value="{
                        week: c.week,
                        day: d.day,
                        section: rs.sectionId,
                      }"
                      @change="calculateScores"
                      v-model="selectedCheckboxs.reservationTimes"
                    />
                  </template>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancelAppointment">取 消</el-button>
            <el-button type="primary" @click="doAppointment"
              >我已成功选择</el-button
            >
          </span>
        </template>
      </el-dialog>
      <!--table border="1px solid red">
        <thead>
          <th>第几节</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </thead>
        <tbody>
          <tr v-for="rs in reservationState" :key="rs.sectionId">
            <td>第{{ rs.sectionId }}节</td>
            <td v-for="d in rs.days" :key="d.day">
              <template v-for="c in d.checkboxs" :key="c.week">
                <template v-if="c.week % 3 == 0">
                  第{{ c.week }}周
                  <input
                    type="checkbox"
                    :disabled="c.disabled"
                    v-model="selectedCheckboxs"
                    :value="{
                      cid: courseIdRef,
                      labname: labNameRef,
                      week: c.week,
                      section: rs.sectionId,
                      day: d.day,
                    }"
                    @click="addAppointment"
                  />
                  <br />
                </template>
                <template v-else>
                  第{{ c.week }}周
                  <input
                    type="checkbox"
                    :disabled="c.disabled"
                    v-model="selectedCheckboxs"
                    :value="{
                      cid: courseIdRef,
                      labname: labNameRef,
                      week: c.week,
                      section: rs.sectionId,
                      day: d.day,
                    }"
                    @click="addAppointment"
                  />
                </template>
              </template>
            </td>
          </tr>
        </tbody>
      </table-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, Ref, watch } from "vue";
import store, { State } from "@/store";
import { useStore } from "vuex";
import {
  GET_APPOINTMENTS_BY_LAB_NAME,
  GET_COURSE_BY_ID,
  GET_LABS_BY_COURSE_ID,
  LIST_COURSES,
  POST_APPOINTMENT,
} from "@/store/VuexTypes";
import {
  Appointment,
  Course,
  Lab,
  listReservationState,
  Section,
} from "@/store/type";

function useCourse(
  courseIdRef: Ref<number | undefined>,
  labs: Ref<Lab[] | undefined>
) {
  const queryLabs = () => {
    store.dispatch(GET_LABS_BY_COURSE_ID, courseIdRef.value).then((resp) => {
      if (resp) {
        labs.value = resp.data;
      }
    });
  };
  return {
    queryLabs,
  };
}

function useAppoinment(
  labNameRef: Ref<string | undefined>,
  reservationState: Ref<Section[]>,
  dialogFormVisible: Ref<boolean>,
  selectedCheckboxs: Ref<Appointment>,
  courseIdRef: Ref<number | undefined>,
  sumScores: Ref<number>,
  refScores: Ref<number>
) {
  const queryAppointments = () => {
    store.state.listReservationState = listReservationState();
    store.dispatch(GET_COURSE_BY_ID, courseIdRef.value).then((resp) => {
      if (resp) {
        const data: Course = resp.data;
        sumScores.value = data.periods!;
      }
    });
    store
      .dispatch(GET_APPOINTMENTS_BY_LAB_NAME, labNameRef.value)
      .then((resp) => {
        if (resp) {
          dialogFormVisible.value = true;
          const data: Appointment[] = resp.data;
          if (data != null && data.length > 0) {
            data.forEach((appointment) => {
              if (
                appointment.reservationTimes != null &&
                appointment.reservationTimes.length > 0
              ) {
                reservationState.value.forEach((rs) => {
                  appointment.reservationTimes.forEach((rT) => {
                    if (rs.sectionId == rT.section) {
                      rs.days.forEach((day) => {
                        if (day.day == rT.day) {
                          day.checkboxs.forEach((c) => {
                            if (c.week == rT.week) {
                              c.disabled = true;
                            }
                          });
                        }
                      });
                    }
                  });
                });
              }
            });
          }
        }
      });
  };

  const queryAppointmentsWithoutDialog = () => {
    store
      .dispatch(GET_APPOINTMENTS_BY_LAB_NAME, labNameRef.value)
      .then((resp) => {
        if (resp) {
          const data: Appointment[] = resp.data;
          if (data != null && data.length > 0) {
            data.forEach((appointment) => {
              if (
                appointment.reservationTimes != null &&
                appointment.reservationTimes.length > 0
              ) {
                reservationState.value.forEach((rs) => {
                  appointment.reservationTimes.forEach((rT) => {
                    if (rs.sectionId == rT.section) {
                      rs.days.forEach((day) => {
                        if (day.day == rT.day) {
                          day.checkboxs.forEach((c) => {
                            if (c.week == rT.week) {
                              c.disabled = true;
                            }
                          });
                        }
                      });
                    }
                  });
                });
              }
            });
          }
        }
      });
  };

  const doAppointment = () => {
    if (selectedCheckboxs.value.reservationTimes.length > 0) {
      selectedCheckboxs.value.cid = courseIdRef.value;
      selectedCheckboxs.value.labName = labNameRef.value;
      store.dispatch(POST_APPOINTMENT, selectedCheckboxs.value).then((resp) => {
        if (resp) {
          queryAppointmentsWithoutDialog();
        }
      });
    }
    dialogFormVisible.value = false;
  };

  const cancelAppointment = () => {
    dialogFormVisible.value = false;
  };

  const calculateScores = () => {
    refScores.value = selectedCheckboxs.value.reservationTimes.length * 2;
  };
  return {
    queryAppointments,
    doAppointment,
    cancelAppointment,
    calculateScores,
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
    const courseIdRef = ref<number>();
    const labs = ref<Lab[]>();
    const labNameRef = ref<string>();
    const dialogFormVisible = ref<boolean>(false);
    if (store.state.listReservationState.length == 0) {
      const listReservation = listReservationState();
      store.state.listReservationState = listReservation;
    }
    const reservationState = computed(() => store.state.listReservationState);
    const selectedCheckboxs = ref<Appointment>({ reservationTimes: [] });
    const refScores = ref(0);
    const sumScores = ref(0);
    const reachedStyle = { color: "green" };
    const unreachedStyle = { color: "red" };
    const { queryLabs } = useCourse(courseIdRef, labs);
    const {
      queryAppointments,
      cancelAppointment,
      doAppointment,
      calculateScores,
    } = useAppoinment(
      labNameRef,
      reservationState,
      dialogFormVisible,
      selectedCheckboxs,
      courseIdRef,
      sumScores,
      refScores
    );
    return {
      courses,
      courseIdRef,
      labs,
      labNameRef,
      queryLabs,
      queryAppointments,
      reservationState,
      selectedCheckboxs,
      calculateScores,
      dialogFormVisible,
      cancelAppointment,
      doAppointment,
      refScores,
      sumScores,
      reachedStyle,
      unreachedStyle,
    };
  },
});
</script>
<style scoped>
.selectInput {
  margin: 10px 10px 10px 0;
}
.selectedPeriods {
  font-size: 30px;
  text-align: center;
}
</style>
