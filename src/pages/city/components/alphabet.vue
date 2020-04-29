<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object  
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      return: {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      window.console.log('click',e)
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart(e) {
      window.console.log(e.touches[0].clientY)
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus === true) {
        //js防抖，减少滚动时间的触发，（每隔16毫秒触发一次）
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      // event.preventDefault()
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>


