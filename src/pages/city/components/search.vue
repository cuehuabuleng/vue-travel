<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="showSearch">
      <ul>
        <li v-for="(item, index) of list" :key="index" class="search-item" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNodata">没找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
   methods: {
    handleCityClick(city){
      this.changeCity(city)
       this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNodata() {
      return !this.list.length;
    },
    showSearch() {
      if (this.keyword.length >= 1) {
        return true;
      }
      return false;
    }
  },
  watch: {
    keyword() {
      //实现防抖，性能优化
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    width: 100%;
    box-sizing: border-box;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
    border-bottom: 1px solid #7a717133;
  }
}
</style>