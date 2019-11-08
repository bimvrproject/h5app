import Vue from 'vue';

const eventbus = new Vue();
// 挂载到vue原型上
Vue.prototype.$eventbus = eventbus;