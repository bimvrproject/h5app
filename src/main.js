import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import setAxios from "@/utils/setAxios";
import "./utils/common";

setAxios(); //执行拦截器方法，将每一个请求头装入token令牌

Vue.prototype.$http = axios; //请求调用$http即可

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("token")) {
      //判断本地是否存在token
      next();
    } else {
      if (to.path === "/login") {
        next();
      } else {
        next({
          path: "/"
        });
      }
    }
  } else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath == "/login") {
    if (localStorage.getItem("token")) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
