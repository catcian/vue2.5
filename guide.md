1-1 
基础内容 -> 基础语法 -> mvvm 模式 -> 组件化

生命周期 -> 动画特效

项目实战 -> 环境搭建 -> 使用git -> 数据模拟 -> 本地开发

联调 -> 真机测试 -> 上线

2-1 
vue2  https://cn.vuejs.org/v2/guide/

2-2 hello world
code  vue/vue1/index.html

2-3 todolist
www.todolist.cn
v-for
v-on:click
v-model 数据双向绑定 app.$data.inputValue = '321'

2-4 mvvm 模式
lagency mvp

mvvm presenter -> ViewModel 

vue2.x 
vue 如何知道数据改变？如何改变视图？源码
1. ES5 Object.defineProperty()
1. virtual dom

2-5 组件化
组件 -> 区域

2-6 组件化 todolist
/vue2-todolist/index2.html
全局组件：
Vue.component({})
局部组件
new Vue({
  components: {TodoItem}
})

2-7 组件间传值
简写：v-bind:index => :index
this.$emit('delete', params)
/vue2-todolist/index2.html

2-8 summary
vueje.org/v2/guide -> 介绍

3-1 vue 实例
组件 => 实例
vm.$el => $ => 实例的属性或实例的方法

3-2 vue 实例 生命周期钩子
beforeCreate 
vm.text = 123
beforeUpdate
lifecycle

学习 -> api -> 生命周期钩子： activated deactivated errorCaptured

3-3 vue 模版语法
v-text
v-html = "js 表达式"

3-4 计算属性 & 侦听器
计算属性，内置缓存，依赖 变量没有发生改变时候不会进行计算，提升性能; 依赖值发生改变，进行计算

3-5 计算属性 setter & getter

3-6 vue 样式绑定
1. class 对象绑定
1. class 数组绑定 [变量, 变量2]