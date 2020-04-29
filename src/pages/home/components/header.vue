<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe69d;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to = '/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe652;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      font-size: 0.6rem;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    line-height: 0.64rem;
    height: 0.64rem;
  }

  .header-right {
    min-width: 1.24rem;
    float: right;
    text-align: center;
    color :#fff;

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>