import Vue from 'vue';
import VueRouter from 'vue-router';

import login from './pages/login.vue';
import logcode from './pages/logcode.vue';
import register from './pages/register.vue';
import home from './pages/home.vue';
// 将vue-router注册到全局，这样每一个组件（任意一个vue文件）都可以使用router-link和router-view组件了
Vue.use(VueRouter)
// 定义路由规则（数组内的每一成员都是一个对象）
const routes = [{
		//path代表用户访问的什么页
		path: '/',
		//代表在router-view中渲染什么组件
		component: login,
	},
	{
		path: '/logcode',
		component: logcode,
	},
	{
		path: '/register',
		component: register,
	},
	{
		path: '/home',
		component:home,
	}
]
// 创建路由实例
const router = new VueRouter({
	routes,
	mode: 'history'
});
//导出router
export default router;
