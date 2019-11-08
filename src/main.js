import Vue from 'vue'
import App from './App.vue'

import './assets/css/reset.css'
//rem的
import './assets/js/rem.js';
//导入路由router（因为router是一个标准的模块，所以起个名字导入）
import router from './router.js';
//导入eventbus
import './eventbus.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
