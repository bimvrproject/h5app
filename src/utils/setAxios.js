import axios from "axios";
import store from "@/store";

/**
 * http全局拦截
 * token放在请求的header上面带回去给后端
 */
export default function setAxios() {
  /**
   * 而在axios中的post请求要非常注意两个地方
   * 要设置合适的请求头，一般采用x-www-form-urlencoded即可
   * 发送的数据要序列化，特别注意啊，因为axios默认的格式是Request Payload
   */
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

  //请求拦截
  axios.interceptors.request.use(config => {
    if (store.state.token) {
      config.headers.token = store.state.token;
    }
    return config;
  });
  //每次的请求有返回的，都是先经过这个拦截器先的
  axios.interceptors.response.use(response => {
    if (response.status == 200) {
      const data = response.data;
      // if(data.code==-1){
      //     //登录过期 需要重新登录 清空vuex的token和localstorage的token
      //     store.commit('settoken','')
      //     localStorage.removeItem('token')
      //     //跳转到login页面
      //     router.replace({path:'/login'})
      // }
      return data;
    }
    return response;
  });
}
