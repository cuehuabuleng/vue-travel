<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          observer: true,
          observeParents: true,
        },
        autoplay: true, //可设置数值来指定播放速度
        speed: 400, // 切换图片速度
        loop: true
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background: white;
}

.swiper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.4%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>