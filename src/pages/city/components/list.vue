<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item ,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState,mapMutations } from 'vuex';
export default {
  name: "CityList",
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
  props: {
    hot: Array,
    cities: Object,
    letter:String
  },
  methods: {
    handleCityClick(city){
      window.console.log('cityclick')
      this.changeCity(city)
       this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter(){
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
  },
};
</script>

<style lang="stylus" scoped>
.list {
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.item-list {
  .item {
    line-height: 0.74rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ccc;
  }
}
</style>