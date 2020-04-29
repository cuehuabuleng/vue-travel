<template>
  <div>
    <home-header></home-header>
    <home-swiper :list = "swiperList"></home-swiper>
    <home-icon :list = "iconList"></home-icon>
    <home-recommend :list = "recommendList"></home-recommend>
    <home-weekend :list = "weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/header.vue";
import HomeSwiper from "./components/swiper.vue";
import HomeIcon from "./components/icons.vue";
import HomeRecommend from "./components/recommend.vue";
import HomeWeekend from "./components/weekend.vue";
import axios from "axios";
import { mapState } from 'vuex';
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  data() {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("api/index.json?city=" + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList
      }
    }
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo();
    }
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city
  }
};
</script>