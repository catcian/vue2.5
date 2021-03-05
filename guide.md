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