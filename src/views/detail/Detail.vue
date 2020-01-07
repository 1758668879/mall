<template>
  <div class="box">
    <detail-nav-bar class="nav"></detail-nav-bar>
    <Scroll class="detail" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper ref="swiper" :swiper-imgs="swiperImgs"></detail-swiper>
      <detail-description :goods="goods"></detail-description>
      <detail-shop :shop-info="shopInfo"></detail-shop>
      <detail-imgs @detailImgLoad="detailImgLoad" :detail-imgs="detailImgs"></detail-imgs>
      <detail-params ref="params" :detail-params="detailParams"></detail-params>
      <detail-comment ref="comment" :detail-comment="detailComment"></detail-comment>
      <detail-recomment ref="recommend" :detail-recommend="detailRecommend"></detail-recomment>
    </Scroll>
    <back-top v-show="backShow" class="back-top" @click.native="goTop">
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
import DetailParams from "./childs/DetailParams";
import DetailComment from "./childs/DetailComment";
import DetailRecomment from "./childs/DetailRecomment";
import BackTop from "./childs/BackTop";

import Scroll from "components/content/scroll/Scroll";

import { detailInfo, Goods, Params, getRecommend } from "api/";

export default {
  name: "detail",
  data() {
    return {
      swiperImgs: [],
      goods: {},
      shopInfo: {},
      detailImgs: {},
      backShow: false,
      detailParams: {},
      detailComment: [],
      detailRecommend: [],
      navItemOffstTop: []
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  updated() {
    this.$nextTick(() => {
      setTimeout(() => {
         this.navItemOffstTop = [];
        let top1 = this.$refs.swiper.$el.offsetTop;
        let top2 = this.$refs.params.$el.offsetTop;
        let top3 = this.$refs.comment.$el.offsetTop;
        let top4 = this.$refs.recommend.$el.offsetTop;
        this.navItemOffstTop.push(top1, top2, top3, top4);
        console.log(this.navItemOffstTop);
      }, 20);
    });
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
          //获取参数
          this.detailParams = new Params(
            data.itemParams.info,
            data.itemParams.rule
          );
          //商品评论
          if (data.rate.list.length > 0) {
            this.detailComment = data.rate.list;
          }
        })
        .catch(err => {
          console.log(err);
        });
      //商品推荐
      getRecommend()
        .then(res => {
          this.detailRecommend = res.data.list;
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
    goTop() {
      this.$refs.scroll.backTop(0, 0, 200);
    },
    refresh() {
      this.$refs.scroll.refresh();
    },
    scroll(position) {
      // console.log(position);
      this.backShow = -position.y > 1000;
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailDescription,
    DetailShop,
    DetailImgs,
    DetailParams,
    DetailComment,
    DetailRecomment,
    BackTop,

    Scroll
  },
  provide() {
    return {
      refresh: this.refresh
    };
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
