import Vue from 'vue'
import App from './layouts/App.vue'

 // 样式
import './assets/css/base.css';// ~~ src
import './assets/js/font.js';//字体比值控制


Vue.config.productionTip = false
// 引入路由
import router from './plugins/router.js';
// 引入 拦截器
import './plugins/axios';
// 引入过滤器
import './filters';
// 引入vant
import './plugins/vant'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// export default vm;
