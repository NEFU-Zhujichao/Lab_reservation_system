<template>
  <div id="nav">
    <router-view :key="$route.path" />
  </div>
</template>

<style>
/* 修改登录页面的表单中验证码和图片不对其的问题*/
.el-form-item__content {
  display: flex;
}
</style>
