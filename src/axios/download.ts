import axios from "axios";

const service = axios.create({
    responseType: 'arraybuffer'
})

service.defaults.baseURL = '/api/';

// 请求拦截器
service.interceptors.request.use(config => {
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
service.interceptors.response.use(
    (resp) => {
      const headers = resp.headers;
      let reg = RegExp("/application\/json/");
      if(headers['content-type'].match(reg)){
          resp.data = unitToString(resp.data);
      }else{
          let fileDownload = require('js-file-download');
          let filename = headers['content-disposition'].split(';')[1].split('filename=')[1];
          let contentType = headers['content-type'];
          filename = decodeURIComponent(filename);
          fileDownload(resp.data,filename,contentType);
      }
      return resp;
    },
    (error) => {
      console.log(error.response);
    }
  );

function unitToString(data: any){
    let encodedString = String.fromCharCode.apply(null,(new Uint8Array(data) as unknown) as number[]);
    let decodedString = decodeURIComponent(escape(encodedString));
    return JSON.parse(decodedString);
}

export default service;