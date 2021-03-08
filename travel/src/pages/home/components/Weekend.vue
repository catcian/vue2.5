<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
      //     title: '北京赏花好地方',
      //     desc: '乱花渐欲迷人眼，京城赏花大搜索'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
      //     title: '京城周末撒欢',
      //     desc: '在帝都过周末，不仅仅是城中游！'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
      //     title: '京城溜娃必去',
      //     desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
      //     title: '帝都必打卡',
      //     desc: '来北京必去的景点非这些地方莫属'
      //   },
      //   {
      //     id: '0005',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
      //     title: '寻找北京的皇城范儿',
      //     desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      //   }
      // ]
    }
  }
}

</script>

<style lang="stylus" scoped>
   @import '~styles/mixins.styl';
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.4375%
    .item-img
      width: 100%
  .item-info
    padding: .14rem .2rem .2rem .2rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
