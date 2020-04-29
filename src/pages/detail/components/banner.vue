<template>
  <div>
    <div class="banner" @click="handleBannerclick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont arrow-icon">&#xe602;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "../../../comment/gallary/gallary";
import FadeAnimation from "../../../comment/fade/fadeanimation";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerclick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
    }
  }
}
</style>