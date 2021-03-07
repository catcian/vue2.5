// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

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
