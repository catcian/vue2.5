<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (resp) {
      resp = resp.data
      if (resp.ret && resp.data) {
        const {sightName, bannerImg, gallaryImgs, categoryList} = resp.data
        this.sightName = sightName
        this.bannerImg = bannerImg
        this.gallaryImgs = gallaryImgs
        this.list = categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}

</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
