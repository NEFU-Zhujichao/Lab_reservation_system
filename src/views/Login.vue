<template>
  <div>
    <el-form
      :rules="rulesRef"
      ref="form"
      :model="loginFormRef"
      class="loginContainer"
    >
      <h3 class="loginTitle">实验室预约系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginFormRef.username"
          placeholder="请输入用户名"
          autocomplete="false"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginFormRef.password"
          placeholder="请输入密码"
          autocomplete="false"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" style="display: flex; align-items: center">
        <el-input
          type="text"
          v-model="loginFormRef.code"
          placeholder="点击图片更换验证码"
          autocomplete="false"
          style="width: 230px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script lang="ts">
import AppVue from "@/App.vue";
import { defineComponent, ref, Ref } from "vue";
import { ElMessage } from "element-plus";

interface LoginForm {
  username: string;
  password: string;
  code?: string | null;
}
function useCaptcha(captcha: Ref<string>) {
  const updateCaptcha = () => {
    captcha.value = "/captcha?time=" + new Date();
  };
  return {
    updateCaptcha,
  };
}
export default defineComponent({
  setup(refs) {
    const loginForm: LoginForm = {
      username: "admin",
      password: "123",
      code: "",
    };
    const captchaUrl = ref("/captcha?time=" + new Date());
    const loginFormRef = ref(loginForm);
    const checked = ref(true);
    const rules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    };
    const rulesRef = ref(rules);
    function submitLogin() {
      if (loginFormRef.value.username == "admin")
        ElMessage.success("用户名正确");
      else ElMessage.error("用户名错误");
    }
    const { updateCaptcha } = useCaptcha(captchaUrl);
    return {
      loginFormRef,
      captchaUrl,
      checked,
      submitLogin,
      rulesRef,
      updateCaptcha,
    };
  },
});
</script>
<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px;
  background-color: white;
  border: 1px solid #eaeaea7c;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  text-align: center;
}
.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}
</style>
