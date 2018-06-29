// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import $ from 'jquery'
/**引入layer插件**/
import layer from './plugins/layer/layer'
import './plugins/layer/need/layer.css'

/**使用插件**/
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

/**使用插件axios**/
Vue.prototype.$http = axios;

/**定义通用指令-权限控制**/
Vue.directive('roles', function (el, binding) {
  //从本地存储中获取权限编码集
  let roles = sessionStorage.roles;
  //判断权限数据中是否包含此编码
  if(roles == null || roles == undefined){
  	roles = ['P108'];
  }
  let resCode = roles.find(function(element,index,array){
  	return element == binding.value.code;
  });
  //是否存在权限编码，如果不存在则移除该权限控制对象
  if(resCode == null || resCode == undefined){
  	$(el).remove();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
