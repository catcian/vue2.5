<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{ item. desc }}</p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png" alt="">
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide> -->
    </swiper>

  </div>

  <!--
    1. 只有两个图标时，拖动只能上侧可以拖动，下侧没有内容，无法拖动
    1. computed 计算属性完成 第9个图标
    1. vue-devtool @4.1.3 科学上网 打开shadowsocks 全局模式
    1. 根据数据项不同自动构建轮播图
    1. item 文字过多，省略 stylus 封装 mixins.styl
   -->
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0005',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0006',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0007',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }, {
          id: '0008',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '景点门票'
        }
        // {
        //   id: '0009',
        //   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
        //   desc: '景点门票'
        // }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 当前数据展示的页面数
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    width: 100%
    // overflow:hidden
    height: 0
    padding-bottom: 50% // 宽度的 50%
    // background: green
  .icons
    margin-top: .1rem
    .icon
      position relative // 针对子级 icon-img
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25% // 针对宽度 25%
      // background: red
      height:0 // 针对子元素 icon-img 设置 后返现宽高不相等
      .icon-img
        position absolute // 父级没有relative 相对于 html 根元素 absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing: border-box // 针对图片间隙
        padding: .1rem // 针对图片间隙
        // background: blue
        .icon-img-content // 图标太大
          display:block// 图片剧中 -> 块级元素
          margin: 0 auto// 图片剧中
          height: 100% // 针对父元素 icon-img 高度
      .icon-desc
        position absolute
        left:0
        right:0
        bottom:0
        height: .44rem
        line-height: .44rem
        text-align: center// 文字左右剧中
        color: $darkTextColor
        ellipsis()
        // overflow: hidden // 文字过多优化
        // white-space: nowrap// 文字过多优化
        // text-overflow: ellipsis// 文字过多优化
</style>
