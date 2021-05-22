import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";
import axios from '@/axios'

router.beforeEach((to,from,next) => {
    if(window.sessionStorage.getItem('auth')){
      if(!window.sessionStorage.getItem('user')){
          return axios.get('/getCurrentUser').then(resp => {
          if(resp){
            // 存入用户信息
            window.sessionStorage.setItem('user',JSON.stringify(resp));
            next();
          }
        })
      }
        next();
    }else{
        next();
    }
  })

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
