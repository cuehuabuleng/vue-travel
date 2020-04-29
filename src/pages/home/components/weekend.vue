<template>
  <div>
    <div class="title">周木去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list :Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  .item-img-wrapper {
      overflow :hidden;
      height:0;
      padding-bottom:26.7%;
    .item-img {
        width :100%
    }
  }

  .item-info {
      padding:.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-heigth: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>