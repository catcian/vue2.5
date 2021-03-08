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
1. :style 对象/数组绑定

3-7 vue 条件渲染
v-if
v-else-if
v-else
vuejs.org/v2/guide -> 条件渲染

3-8 vue 列表渲染
v-for
数组渲染、对象渲染

3-9 vue set方法

set 向对象注入数据 全局方法：
Vue.set(vm.userInfo, 'address', 'beijing')
实例方法：
vm.$set(vm.userInfo, 'address', 'beijing')

数组
vm.userInfo[1] = 5 => error
Vue.set(vm.userInfo, 1, 5)
vm.$set(vm.userInfo, 1, 5)

3-10 vue 事件处理

3-11 vue 表单绑定
v-model :
input type=text
input type=checkbox
textarea
input type=radio
select - option

v-model修饰符
.lazy
.number
.trim

3-12 summary

实例 -> 组件
模版语法 -> v-if v-text
计算属性 -> computed
样式 -> 对象形式 数组形式
条件渲染 -> v-if v-else-if v-else\ template模板站位符
列表渲染 -> v-for 数组、对象
事件处理 -> 事件绑定 v-on = @、事件修饰符 prevent stop catch
表单绑定 -> select textarea

4-1 组件使用的细节
1. is 标签解决小bug 
2. 自组件 定义 data 必须函数
3. ref 获取 dom

4-2 父子组件数据传递
父组件 ->（属性） 子组件 传递数据
单项数据流概念：子组件 不能够直接修改 而是克隆 修改这个副本
子组件 ->(事件) 父组件 传递数据

4-3 组件参数校验与非 props 特性
props特性：父组件调用子组件 通过属性（content）向子组件传值，恰好子组件声明了对父组件传递过的接收(props.content)
     
props 特点：
  1. 不会在 dom 标签上显示
  1. 子组件 可以通过差值表达式，或者this.props 引用
非props特性：
1. 子组件没有声明对父组件声明的内容
1. 子组件无法获得该内容，无法使用
2. 非props 特性实际会展示在子组件最外侧 dom 标签上

4-4 组件绑定原生事件
子组件 监听原生事件 @click.native

4-5 非父子组件间的传值
1. vuex 
1. 发布订阅模式：总线机制

4-6 vue 使用插槽
1. 插槽
1. 具名插槽

4-7 作用域插槽
vue4/component-scope-slot.html

4-8 动态组件与v-once指令
vue4/dynamic-component-vonce.html

4-9 summary
vue 组件基础、深入了解组件

5-1 vue css 动画原理 过渡动画效果 transition
part5/animation.html
<transition name="fade">
  // 动态组件
</transition>
class
隐藏 -> 显示
+ fade-enter动画执行前 /fade-enter-active
- fade-enter | + fade-enter-to
- fade-enter-active/fade-enter-to

显示 -> 隐藏
+ fade-leave/fade-leave-active
- fade-leave | + fade-leave-to
- fade-leave-to/ fade-leave-active

5-2 vue animate.css 库
part5/animate.html
<link rel="stylesheet" type="text/css" href="./animate.css">

自定义样式
enter-active-class="animated swing"
leave-active-class="animated shake"
animate version3.5.2
http://daneden.me/animate

5-3 vue 使用过渡 & 动画
part5/transition-transform.html

5-4 vue js动画 velocityjs
@before-enter="handleBeforeEnter"
@enter="handleEnter"
@after-enter="handleAfterEnter"
@before-leave=
@leave
@after-leave
http://velocityjs.org/#duration
complete

5-5 vue 多个元素组件的过渡
part5/more0component-transition.html
1. 多个元素过渡效果 元素 key 
1. 动态组件 <component :is="type"></component>

5-6 vue 列表过渡
<transition-group>...</transition-group>

5-7 vue 动画封装
part5/encapsulation.html

5-8 summary
v2/guide/ 过渡/动画
1. 动态过渡
1. 状态过渡 tweenjs

6-1 vue 项目 环境配置 travel 
1. nodejs lts 8.9.4 -> node -v -> v7.10.1 npm -v -> 5.5.1
1. gitee.com git云仓库
个人主页 —> private -> 创建私有仓库 -> travel /MIT License
1. git --version  v2.10.1
gitee.com 
设置 -> ssh 公钥 ->
生产公钥/似钥
ssh-keygen -t rsa -C 'wangchn86@163.com'
查看公钥内容
cat ~/.ssh/id_rsa.pub
粘贴页面
1. 下载gitee.com 本地 SSH
git clone git ....git
1. 创建 vue 项目/ 安装 vue-cli
npm install --global vue-cli
vue init webpack Travel
Project name
exists y
vue-cli 2.8.2
name travel
description 
author chen.wang
Runtime +
install vue-router y
eslint y
standart
unit test n
e2e n
use npm 

运行
npm run dev

git status 
git add .
git commit -m "project initial'
git push 

6-2 cli.vuejs.org/zh
国内淘宝镜像
developer.aliyun.com/mirror/NPM
npm install 

vuecli2.x vuecli3.x 共用
npm install -g @vue/cli-init

6-3 项目介绍

6-4 单文件组件 & vue 路由
.vue 单文件组件 ===
vue.conponent('abc', {

})

路由：根据网站不同，返回不同内容给用户

6-5 单页应用 & 多页应用
network -> doc 

多页：页面跳转， 返回HTML
1. 首屏时间块，搜索引擎优化的seo效果好
1. 切面切换慢

单页：页面跳转，doc不返回HTML，JS渲染
1. 页面切换快
1. 首屏时间稍慢，seo差 解决（解决方案服务器渲染）

6-6 项目代码初始化
移动端：vieport meta 标签
<meta name="viewport" content="minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

重置页面样式表：assets/styles/reset.css
main.js import './assets/styles/reset.css

1px 边框问题：import './assets/styles/border.css
border: 1px solid green
二倍屏：多倍屏 引入文件

300ms 点击延迟
某些机型，click事件会延迟 300ms 执行
npm install fastclick@1.0.6 --save
main.js import fastClick from 'fastclick'
fastclick.attach(document.body)

iconfont 
delte pages/list

7-1 header 开发
750 iphone6 2x 图
styles var mixmin
npm install stylus@0.54.5 --save
npm install stylus-loader@3.0.1 --save

7-2 iconfont & 代码优化
src/assets/styles/iconfont/svgttf woff eot .iconfont.css
src/assets/styles/iconfont
1. 使用iconfont
1. webpack 配置 css 路径简化
1. stylus 定义变量

7-3 首页轮播图
1. 创建分支 index-swiper
git pull -> github 新分支拉下来
git checkout index-swiper -> 切换分支
git status -> 查看分支
git checkout master -> 切换到主分支
主分支：git merge orgin/index-swiper
主分支：git push

vue-awesome-swiper@2.6.7 --save
piao.qunar.com/touch

7-4 vue 图标页面布局
1. 创建 index-icons

7-5 图片区域逻辑
1. 只有两个图标时，拖动只能上侧可以拖动，下侧没有内容，无法拖动
1. computed 计算属性完成 第9个图标
1. vue-devtool @4.1.3 科学上网 打开shadowsocks 全局模式
1. 根据数据项不同自动构建轮播图
1. item 文字过多，省略 stylus 封装 mixins.styl/ellipsis

7-6 热销推荐组件 index-recommond
home/component/Recommend.vue
父级 flex: 1；min-width:0
子级 ellipsis() 无效果撑开

7-7 周末去哪组件
Weekend.vue
swiper  
  slot
/swiper