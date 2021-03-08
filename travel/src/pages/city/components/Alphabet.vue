<template>
  <ul class="list">
    <li class="item"
    v-for="(letter, index) of letters"
    :key="index"
    :ref="letter"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
  >{{ letter }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      console.log('touchstart')
      this.touchStatus = true
    },
    handleTouchMove (touchEvent) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = touchEvent.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      console.log('touchent')
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let letter in this.cities) {
        letters.push(letter)
      }
      return letters
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    // background: red
    .item
      line-height: .4rem
      text-align: center
      color: #bgColor
</style>
