<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/list";
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      list: [],
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      detailId: ""
    };
  },
  methods: {
    getDetailInfo() {
      axios.get("/api/detail.json", {
          params: {
            id: this.detailId
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    window.console.log("mounted");
  },
  activated() {
    window.console.log("active");
    window.console.log(this.$route.params.id);
    this.detailId = this.$route.params.id;
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>