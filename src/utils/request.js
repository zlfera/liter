import axios from "axios";
import store from "../store";
import router from "../router";
export const baseURL = "https://apipc-xiaotuxian-front.itheima.net/";
const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});
instance.interceptors.request.use(
    (config) => {
        const { profile } = store.state.user;

        if (profile.token) {
            config.headers.Authorization = `Bearer ${profile.token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
instance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        //console.log(err.response.status);

        if (err.response && err.response.status === 401) {
            //1.清空无效用户信息
            //2.跳转到登录页面
            //3.跳转需要传参到登录页面

            store.commit("user/setUser", {});
            const route = encodeURIComponent(
                router.currentRoute.value.fullPath
            );
            console.log(route);
            router.push(`/login?redirectUrl=${route}`);
        }
        return Promise.reject(err);
    }
);
//请求工具函数
export default (url, method, submitData) => {
    return instance({
        url,
        method,
        [method?.toLowerCase() === "get" ? "params" : "data"]: submitData,
    });
};
