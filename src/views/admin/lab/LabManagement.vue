<template>
  <div>
    <el-table :data="labs" stripe type="2">
      <el-table-column
        prop="id"
        label="id"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="实验室名称"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="number" label="实验室机器数量" align="center">
      </el-table-column>
      <el-table-column prop="detail" label="实验室详细信息" align="center">
      </el-table-column>
      <el-table-column prop="" label="操作" align="center">
        <el-button @click="updateLab" size="mini" type="primary"
          >修改</el-button
        >
        <el-button @click="deleteLab" size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import axios from "@/axios";
import { ElMessage } from "element-plus";
import router from "@/router";
//import { Lab } from "@/store/type";

export interface Lab {
  id: number | null;
  name: string;
  number: number | null;
  detail: string;
}

function useLab() {
  const updateLab = () => {
    router.push("/index/updateLab");
  };

  const deleteLab = (id: number) => {
    router.push("/index/updateLab");
  };

  return {
    updateLab,
    deleteLab,
  };
}

export default defineComponent({
  setup() {
    const lab: Lab[] = [{ id: 1, name: "hello", number: 2, detail: "deeeeee" }];
    const labs = ref<Lab[]>(lab);

    axios.get("/lab/").then((resp) => {
      if (resp) {
        labs.value = resp.data;
      }
    });
    const { updateLab, deleteLab } = useLab();
    return {
      labs,
      updateLab,
      deleteLab,
    };
  },
});
</script>
