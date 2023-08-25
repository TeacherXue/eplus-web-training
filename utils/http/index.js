// import baseConfig from "../config/index.js";

//封装axios,设置请求超时时间,请求拦截器,响应拦截器,错误处理,请求头设置,请求地址设置
const http = axios.create({
    baseURL: baseConfig.baseURL,
    timeout: baseConfig.timeout,
    headers: baseConfig.headers
});

//请求拦截器
http.interceptors.request.use(
    config => {
        //请求头设置
        config.headers.accessToken = localStorage.getItem("token");
        return config;
    }
);

//响应拦截器
http.interceptors.response.use(
    response => {
        return response.data;
    }
);

// export default http;