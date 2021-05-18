<template>
  <table>
    <thead>
      <th>*</th>
      <th>Monday</th>
      <th>Monday</th>
      <th>Monday</th>
      <th>Monday</th>
      <th>Monday</th>
      <th>Monday</th>
      <th>Monday</th>
    </thead>
    <tbody>
      <tr>
        <td>1 2</td>
        <td>
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
          可用：<input type="checkbox" />可用：<input type="checkbox" />
          可用：<input type="checkbox" /> 可用：<input type="checkbox" />
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
        <td>
          <div>可用：<input type="checkbox" /></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let x = 10;
  },
});
</script>
