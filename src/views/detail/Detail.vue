<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :swiper-imgs='swiperImgs'></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childs/DetailNavBar";
import DetailSwiper from './childs/DetailSwiper';

import { detailInfo } from "api/";

export default {
  name:'detail',
  data() {
    return {
      swiperImgs:[]
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      detailInfo({ iid: this.$route.params.id })
        .then(res => {
          console.log(res);
          const data=res.result;
          //轮播图数据
          this.swiperImgs=data.itemInfo.topImages;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
};
</script>
<style scoped>
</style>