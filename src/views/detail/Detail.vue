<template>
  <div class="box">
    <detail-nav-bar class="nav"></detail-nav-bar>
    <Scroll class="detail" ref="scroll" :probe-type='3' @scroll="scroll">
      <detail-swiper :swiper-imgs="swiperImgs"></detail-swiper>
      <detail-description :goods="goods"></detail-description>
      <detail-shop :shop-info="shopInfo"></detail-shop>
      <detail-imgs @detailImgLoad="detailImgLoad" :detail-imgs="detailImgs"></detail-imgs>
    </Scroll>
    <back-top v-show='backShow' class="back-top" @click.native="goTop">
      <img src="~assets/imgs/common/top.png" alt />
    </back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childs/DetailNavBar";
import DetailSwiper from "./childs/DetailSwiper";
import DetailDescription from "./childs/DetailDescription";
import DetailShop from "./childs/DetailShop";
import DetailImgs from "./childs/DetailImgs";
import BackTop from "./childs/BackTop";

import Scroll from "components/content/scroll/Scroll";

import { detailInfo, Goods } from "api/";

export default {
  name: "detail",
  data() {
    return {
      swiperImgs: [],
      goods: {},
      shopInfo: {},
      detailImgs: {},
      backShow:false
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
          const data = res.result;
          //轮播图数据
          this.swiperImgs = data.itemInfo.topImages;
          //商品详情数据
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
          //商铺信息
          this.shopInfo = data.shopInfo;
          //图片详情
          this.detailImgs = data.detailInfo.detailImage[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    //详情图片加载完后刷新better-scroll
    detailImgLoad() {
      this.$refs.scroll.refresh();
    },
    //回到顶部
    goTop(){
      this.$refs.scroll.backTop(0,0,200);
    },
    scroll(position){
       this.backShow=-position.y>1000;
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailDescription,
    DetailShop,
    DetailImgs,
    BackTop,

    Scroll
  }
};
</script>
<style scoped>
.box {
  height: 100vh;
  position: relative;
  z-index: 100;
  background-color: #fff;
}

.nav {
  position: relative;
  z-index: 100;
  background: #fff;
}

.detail {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 0;
  z-index: 99;
  background: #fff;
}
.back-top {
  position: fixed;
  right: 5px;
  bottom: 49px;
  z-index: 99;
}
.back-top img {
  width: 46px;
  height: 46px;
}
</style>
