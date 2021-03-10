<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      typs: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}

</script>

<style  lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inhret
  .container
    display:flex
    flex-direction: column
    justify-content: center
    z-index:99
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    background: #000
    .wrapper
      // overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
        margin-top: 50%
        transform: translateY(-50%)
      .swiper-pagination
        color: #fff
</style>
