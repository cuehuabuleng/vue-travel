<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link  class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    list:Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  border-bottom: solid 1px #e5e2e2d9;
  margin-bottom :.5rem;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
  }

  .item-desc {
    line-heigth: 0.4rem;
    color: #ccc;
    ellipsis();
  }

  .item-button {
    background: #ff9300;
    padding: 0.05rem;
    border-radius: 0.06rem;
    color: #fff;
    margin-top: 0.2rem;
  }
}
</style>