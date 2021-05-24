<template>
  <div>
    <div>
      <div>
        <el-form ref="form" :model="labForm" label-width="80px">
          <el-input
            v-model="labForm.name"
            size="mini"
            class="addInput"
            placeholder="请输入实验室名称"
            suffix-icon="el-icon-circle-plus"
          ></el-input>

          <el-input
            v-model="labForm.number"
            size="mini"
            class="addInput"
            placeholder="请输入实验室机器数量"
            suffix-icon="el-icon-circle-plus"
          ></el-input>

          <el-input
            size="mini"
            style="margin-bottom: 6px"
            suffix-icon="el-icon-circle-plus"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入实验室详细信息"
            v-model="labForm.detail"
          >
          </el-input>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-circle-plus"
            @click="addLab"
            >添加</el-button
          >
        </el-form>
      </div>
    </div>
    <div>
      <el-table :data="labs" stripe type="2">
        <el-table-column
          prop="id"
          label="编号"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="实验室名称"
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="number"
          label="实验室机器数量"
          align="center"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="detail" label="实验室详细信息" align="center">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="updateLab(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteLab(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="编辑" v-model="dialogFormVisible">
        <el-form :model="updateLabForm">
          <el-tag class="dialog-tag">实验室名称</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateLabForm.name"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
          <el-tag class="dialog-tag">实验室机器数量</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateLabForm.number"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
          <el-tag class="dialog-tag">实验室详细信息</el-tag>
          <el-form-item :label-width="formLabelWidth">
            <el-input
              v-model="updateLabForm.detail"
              autocomplete="off"
              class="dialog-input"
              size="small"
            ></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancelDoUpdateLab">取 消</el-button>
            <el-button type="primary" @click="doUpdateLab">确 定</el-button>
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
import { LIST_LABS } from "@/store/VuexTypes";
import { Lab } from "@/store/type";
import axios from "@/axios";

function useLab(
  labForm: Ref<Lab>,
  dialogFormVisible: Ref<boolean>,
  updateLabForm: Ref<Lab>
) {
  const addLab = () => {
    axios.post("/lab/", labForm.value).then((resp) => {
      if (resp) {
        store.dispatch(LIST_LABS);
        labForm.value = {};
      }
    });
  };

  const updateLab = (index: number, data: Lab) => {
    // 使用赋值操作以防双向绑定时用户在输入框输入时导致视图也跟着响应更改
    Object.assign(updateLabForm.value, data);
    dialogFormVisible.value = true;
  };

  const doUpdateLab = () => {
    dialogFormVisible.value = false;
    axios.put("/lab/", updateLabForm.value).then((resp) => {
      store.dispatch(LIST_LABS);
    });
  };
  const cancelDoUpdateLab = () => {
    dialogFormVisible.value = false;
    //store.dispatch(LIST_LABS);
  };
  const deleteLab = (index: number, data: Lab) => {
    axios.delete(`/lab/${data.id}`).then((resp) => {
      // 等待删除成功后再去拉取实验室列表
      if (resp) {
        store.dispatch(LIST_LABS);
      }
    });
  };

  return {
    addLab,
    updateLab,
    deleteLab,
    doUpdateLab,
    cancelDoUpdateLab,
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    if (store.state.labs?.length == 0) {
      store.dispatch(LIST_LABS);
    }
    const labs = computed(() => store.state.labs);
    const labForm = ref<Lab>({});
    const updateLabForm = ref<Lab>({});
    const dialogFormVisible = ref(false);
    const { cancelDoUpdateLab, doUpdateLab, addLab, updateLab, deleteLab } =
      useLab(labForm, dialogFormVisible, updateLabForm);
    return {
      labs,
      updateLab,
      deleteLab,
      labForm,
      addLab,
      dialogFormVisible,
      updateLabForm,
      doUpdateLab,
      cancelDoUpdateLab,
    };
  },
  /*methods: {
    deleteLab2(index: number, data: Lab) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage("删除成功");
        })
        .catch(() => {
          ElMessage("取消删除");
        });
    },
  },*/
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
