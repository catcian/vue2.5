<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: '',
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (resp) {
      resp = resp.data
      if (resp.ret && resp.data) {
        const { city, cities, hotCities } = resp.data
        this.city = city
        this.cities = cities
        this.hotCities = hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}

</script>

<style lang="stylus" scoped>

</style>
