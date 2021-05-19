import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

// 请求拦截器
axios.interceptors.request.use(config => {
    const auth = sessionStorage.getItem('auth');
    if(auth){
        const tokenHeader = sessionStorage.getItem("tokenHeader");
        if(tokenHeader)
        config.headers[tokenHeader] = auth;
    }
    return config;
},error => {
    return Promise.reject(error)
})

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
        ElMessage.error(success.data.message );
        return;
      }
      if (success.data.message) {
        ElMessage.success(success.data.message );
      }
    }
    return success.data;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status == 504 || error.response.status == 404) {
      ElMessage.error("服务器被吃了啊！！！" );
    } else if (error.response.data.code == 403) {
      ElMessage.error("权限不足");
    } else if (error.response.data.code == 401) {
      ElMessage.error("尚未登录，请登录");
      router.replace("/");
    } else if (error.response.data.message) {
      ElMessage.error(error.response.data.message );
    } else ElMessage.error("未知错误!" );
    return;
  }
);


export default axios;
