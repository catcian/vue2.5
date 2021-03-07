// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 根实例
new Vue({
  el: '#app',
  router: router,
  // 局部组件
  components: { App: App },
  // 模板渲染组件组件
  template: '<App/>'
})
