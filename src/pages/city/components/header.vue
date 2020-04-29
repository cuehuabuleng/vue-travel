<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe743;</div>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 0.4rem;
    color:#fff;
  }
}
</style>