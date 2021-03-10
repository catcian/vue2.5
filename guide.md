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

7-8 axios index-ajax 分支
git checkout . -> 去除本次更改
vue-resource -> 最早
fetch
axios -> 推荐 浏览器SHR Nodehttp
axios@0.17.1 --save

index-ajax -> git merge index-recommend

Home.vue 发生 ajax 推荐
http://localhost:8080/static/mock/index.json
只有 static 目录下能够被访问
mounted

axios.get('/static/mock/index.json') 
axios.get('/api/index.json') 
开发环境上线环境地址处理：proxy 
/config/index.js
proxyTable: {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: {
      '^/api': '/static/mock/'
    }
  }
},

7-9 首页父子组件传值
Swiper.vue
<swiper :options="swiperOption" v-if="list.length">
或
computed: {
  showSwiper () {
    return this.list.length
  }
}

8-1 城市选择页 - 路由配置
city-router
city/City.vue

8-2 城市 搜索框
city/components/Search.vue

8-3 城市列表
区块滚动

8-4 BetterScroll 字母表
city/components/List.vue
npm install better-scroll@1.8.1 --save
iscroll 封装
效果，按住鼠标往下拖动，

city/components/Alphabet.vue

8-5 城市页面 动态渲染
/static/mock/city.json

8-6 城市页面 兄弟组件数据传递
字母组件：上下滑动时候，是第几个字母？
思路：
1. 首先获得 A 距离到顶部的高度
1. 然后滑动时候，在看下当前手指位置距离顶部的高度
1. 做一个差值，可以得到当前位置和 A 顶部的一个距离，在除以每个字母的高度，就知道当前是第几个字母。

根据下标找到对应的字母，需要一个数组。存储字母的列表 
computed: {
  letters() {
    const letters = []
    for (let i in this.cities ){
      letters.push(i)
    }
    return letters
    ['A','B','C' ]
  }
}

8-7 列表性能优化 perfomance
1. this.$refs['A'][0]
handleTouchMove
const startY = this.$refs['A'][0].offsetTop 
总是固定值
1. 函数截流 timer

8-8 vue 搜索逻辑
所搜城市和拼音
Search.vue
1. v-mode keyword 
1. watch 监听 keyword 改变
1. 截流函数 timer
if(value.spell.indexOf(this.keyword) > -1 ||
value.name.indexOf(this.keyword) > -1) {
  result.push(value)
}
1. 优化逻辑
div search-content ref=''search
  background #eee
li class search-item boder-bottom :key item.id
line-height: .62rem
padding-left: .2rem
background: #fff
color# 666

1. 滚动
import Bscroll from 'better-scroll'
mounted () {
  this.scroll = new Bscroll(this.$refs.search)
}

取消后，清除 list if (!this.keyword) {this.list = [] ; return }

1. 很长没有匹配时候
li class search-item border-bottom 没有找到匹配数据 v-show !list.length
城市列表显示 div class search-content v-show keyword

1. v-show !this.list.length -> computed: {hasNoData() {return !this.list.length}}

8-9 vuex 实现数据共享
点击城市区域-》首页城市变换
没有共用的父子组件的，数据通信

cn.vuejs.org/v2/guide -》 生态系统 -》 vuex
state： 数据
action： 异步操作
mutation： 同步操作

dispath -> action
commit -> mutation
npm install vuex@3.0.1 --save

src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex

Vue.use(Vuex)

export default new Vuex.stroe({
  state: {
    city: '北京',
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.citye = city
    }
  }
})

main.js 
import store from './store'

new Vue({
  ...
  store
  ..
})

Home.vue/ Search.vue
delete data.city
div {{ this.$store.state.city}} /div

City/List.vue
div {{ this.$store.state.city }}

.class button-wrapper @click=handleCityClick(tiem.name)
/item border-bottom @click=handleCityClick(item.name)

methods: {
  handleCityClick (name) {
    //this.$store.dispatch('changeCity', name)
    //this.$store.commit('changeCity', name)
  }
}

点击城市：返回到首页 编程式导航
1. a 
1. widown.location.href
router-link
js router.push
Search.vue/List.vue
this.$router.push('/')

8-10 vuex 高级使用 localStorage
刷新城市恢复
state: {
  city: localStorage.city || '深圳'
}
changeCity() {
  try {
  localStorage.city = city
  } catch (e) {}
}

localStorage 需要 try catch
因为某些浏览器如果用户关闭本地存储，或者隐身模式，浏览器可能直接抛出异常

let defaultCity = '深圳
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

mkdir store/state.js
export default {
  city
}

store/index.js 
import state from './state
import mutations from './mutations
exrpot default nex Vuex.Store({
  state,
  mutations
})

Header.vue 样式修正
.header-right
  min-width 1.04rem
  padding 0 .1rem

home/Header.vue / City/List.vue
this.$store.state.city 优化 this.city
import { mapState, mapMutations } from 'vuex'
computed: {
  ...mapState(['city'])
  ...mapState({
    currentCity: 'city'
  })
}
methods: {
  ...mapMutations(['changeCity])
  handleCityClick () { this.changeCity(city) }
}

getters: {
  doubleCity (state) {
    return state.city + ' ' + state.city
  }
}
computed: {
  ...mapGetters(['doubleCity])
}

module 

8-11 使用 keep-alive 优化网页性能
打开 networkd -> xhr
1. 每次路由发生切换，ajax 都会发送
1. 在桂林，显示桂林，在北京重新加载北京的内容

App.vue
<keep-alive> 路由的内容被加载过一次之后，就把路由中的内容放到内存中，下次不会重新执行钩子函数，只需从内存中获取
  <router-view/>
</keep-alive>

Home.vue
data: {
  return {
    lastCity: ''
  }
}
axios.get('/api/index.json?city=' + this.city) -> 

mounted () {
  this.lastCity = this.city
}
computed: {
  ,,,mapState(['city'])
}

activated () { 页面重新显示钩子
  判段当前 和上次是否相同，不相同发ajax
  if (this.lastCity !== this.city) this.getHomeInfo() this.lastCity = this.city
  console.log('activated')
}

8-12 fasclick 原生解决 300ms tap delay, gone away
https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
html {
  touch-action: manipulation
}
Alphabet 截流 8ms

new Bscroll(this.$refs.wrapper, {
  click: true
})

9-1 详情页面 动态路由 banner 
Recommend.vue
ul> router-link tag='li' :to="/detail“ + "item.id'

router.js
import Detail from '@page/detail/Detail.vue
{
  path:'/detail/:id',
  name: 'Detail',
  component: Detail
}

轮播 / 标题渐隐渐显 / 二级列表
src/pages/detail/componens/Banner.vue

div.banner
  img.banner-img src=
  div.banner-info
    div.banner-title /div
    div.banner-number span.iconfont.banner-icon 39 /div
  /div
/div

.banner
  position relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display flex
    position: absolute
    left0
    right 0
    bottom 0
    line-height .6rem
    color#fff
    background linear-gradient(top rgba(0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      padding 0 .4rem
      margin-top .14rem
      border-radius .2rem
      backgrund rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem



9-2 共用图片画廊组件拆分
webpack.bass.config
  alias： common
Banner.vue import CommonGallary from 'common/gallary/Gallary
div
  div.banner @click handleBannerClick /div
  common-gallary :imgs=imgs/common-gallary v-show showGallary @close handleGallaryColse/common-gallary
  
data () {
  return {
    showGallary,
    imgs: []
  }
}
methods: {
  handleBannerClick () {
    this.showGallary = true
  },
  handleGallaryColse () {
    this.showGallary = false
  }
}
src/common/gallary/Gallary.vue
name: CommonGallary
div.container @click handleGallaryClick
  div.wrapper
    swiper :options="swiperOptions
      swiper-slide v-for item,index in imgs :keyindex
        img.gallary-img :src item
      /swiper-slide
      div.swiper-pagination slot pagination
    /swiper 

  /div
/div
props: {
  imgs: {
    type: Array,
    default () {
      return []
    }
  }
}
data () {
  return {
    swiperOptions: {
      pagination: .swiper-pagination
      paginationType: 'fraction
      重新显示计算宽度有问题
      observeParents: true
      observe true
    }
  }
}
methods {
  handleGallaryClick () {
    this.$emit('close', )
  }
}

swiper4 www.swiper.com.cn/3
.container >>> .swiper-container
  overflow: inhret
.container
  diplayflex
  flex-direction coloumn
  justify-content center
  z-index99
  position: fixed
  left0
  right0
  top0
  bottom0
  background #000
  .wrapper
    //overflow:hidden
    height0
    width100%
    padding-bottom 100%
    background :#fff
    .gallary-img
      width 100%
    .swiper-pagnation
      color: #fff
      bottom: -1rem

9-3 详情页面 Header 渐隐渐显
/pages/detail/components/Header.vue
name:DetailHeader

div
  div.header-abs  div -> router-link tag=div to="/' v-show showAbs
    span.iconfont.header-abs-back <
  /div
  div.header-fixed v-show !showAbs :style="opacityStyle
    router-link to='/'
      div.iconfont header-fixed-back /div
    /router-link
  /div
/div

data () {
  return {
    showAbs: true,
    opacityStyle: {
    opacity: 0
    }
  }
},
methods: {
  handlScroll () {
    const top  = document.documentElement.scrollTop
    if (top > >) {
      let opacity = top /140
      opacity = opacity > 1 ? 1 : opacity
      tgus.opacityStyle = {
        opacity
      }
      this.showAbs = false
    } else {
      this.showAbs = true
    }
    console.log(documentElement.scrollTop)
  }
}
activated () {
  window.addEventListener('scroll',this.handlScroll)
}

@import '~styles/varibles.styl';
.header-abs
  position absolute
  left.2rem
  top.2rem
  width .8rem
  height .8rem
  line-height .8rem
  boder-radius .4
  background rgba(0,0,0,.8)
  text-center center
  .header-abs-back
    color#fff
    font=size .4rem
  .header city -> header-fixed
  .header
  position: fixed
  //overflow: hidden
  top 0
  left 0
  right 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .5rem
    color: #fff

Detail.vue
import DetailHeader from './components/Header
detail-banner
detail-header /detail-header
div.content /div

.content: 
  height:50rem
