<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1601/f2/f2425c4c4488f76390.water.jpg_600x330_3a0cec65.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">深圳野生动物园</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe7b3;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}

</script>

<style  lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8));
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .5)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
