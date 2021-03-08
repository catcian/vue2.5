<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
      //     title: '南宫旅游景区',
      //     desc: '亚洲唯一飞行式过山车等你来挑战'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/2102/d0/d029e357941e625da3.water.jpg_200x200_18e3d8e3.jpg',
      //     title: '南宫旅游景区',
      //     desc: '亚洲唯一飞行式过山车等你来挑战'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1910/6a/6a22d154133b1422a3.water.jpg_200x200_eebf77fd.jpg',
      //     title: '北京杜莎夫人蜡像馆',
      //     desc: '亚洲唯一飞行式过山车等你来挑战'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg',
      //     title: '春晖园温泉度假村',
      //     desc: '亚洲唯一飞行式过山车等你来挑战'
      //   },
      //   {
      //     id: '0005',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/53/53f7752ece875d00a3.img.jpg_200x200_5c006913.jpg',
      //     title: '龙脉温泉',
      //     desc: '亚洲唯一飞行式过山车等你来挑战'
      //   }
      // ]
    }
  }

}

</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    // background: red
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0 // ellipsis 没有作用
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
