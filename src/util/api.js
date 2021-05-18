import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

// 响应拦截器
axios.interceptors.response.use(
  (success) => {
    // 业务逻辑错误
    /*
       code 
       message
       data
    */
    if (success.status && success.status == 200) {
      if (
        success.data.code == 500 ||
        success.data.code == 401 ||
        success.data.code == 403
      ) {
        ElMessage.error({ message: success.data.message });
        return;
      }
      if (success.data.message) {
        ElMessage.success({ message: success.data.message });
      }
    }
    return success.data;
  },
  (error) => {
    if (error.response.code == 504 || error.response.code == 404) {
      ElMessage.error({ message: "服务器被吃了啊！！！" });
    } else if (error.response.code == 403) {
      ElMessage.error({ message: "权限不足" });
    } else if (error.response.code == 401) {
      ElMessage.error({ message: "尚未登录，请登录" });
      router.replace("/");
    } else if (error.response.message) {
      ElMessage.error({ message: error.response.message });
    } else ElMessage.error({ message: "未知错误!" });
    return;
  }
);

let baseUrl = "";
// 封装json格式的post请求
export const postRequest = (url, params) => {
  return axios({
    url: `${baseUrl}${url}`,
    method: "post",
    data: params,
  });
};
