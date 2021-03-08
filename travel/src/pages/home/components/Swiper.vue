<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // swiperList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_350x240_06106a40.jpg'
      //   }, {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/61/415f2f6c128f635cc218eb2d0faf5066.water.jpg_350x240_66c16bc1.jpg'
      //   }
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}

</script>

<style lang="stylus" scoped>
// 3G Home.vue <div>test</div> 抖动感，由于开始Swiper dom节点上没有
// 自组件 穿透 >>>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    // padding-bottom: 68.57%
    background: #eee
    // width:100%
    // height: 31.25vw
    .swiper-img
      width: 100%

</style>
