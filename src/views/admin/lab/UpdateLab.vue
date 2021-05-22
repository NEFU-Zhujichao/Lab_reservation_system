<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="实验室名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="实验室机器数量">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="实验室机器数量">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Lab } from "@/store/type";

export default defineComponent({
  setup() {
    const form = ref<Lab>({});
  },
});
</script>
