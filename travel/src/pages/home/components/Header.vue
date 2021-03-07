<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}

// 1rem = html font-size = 50px

// Ui 86px 二倍图 应该写出 43px -> 多少 rem ? 1/50 = x/43 x = .86rem
// 为什么设置font-size = 50px 正好 是86/100=.86rem

</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
