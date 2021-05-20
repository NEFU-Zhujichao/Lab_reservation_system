<template>
  <el-container>
    <el-header>实验室预约管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-submenu index="1">
            <template #title><i class="el-icon-location"></i>导航一</template>
            <el-menu-item index="/index/test1">test1</el-menu-item>
            <el-menu-item index="/index/test2">test2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <table>
          <thead>
            <th>*</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wendsday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
              <td>
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
                可用：<input type="checkbox" /> 可用：<input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let x = 10;
  },
});
</script>
