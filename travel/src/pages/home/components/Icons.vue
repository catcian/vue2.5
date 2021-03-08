<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png" alt="">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .icons
    width: 100%
    overflow:hidden
    height: 0
    padding-bottom: 50% // 宽度的 50%
    // background: green
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
</style>
