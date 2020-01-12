<template>
  <div class="box">
    <detail-nav-bar class="nav" ref="nav" @navClick="navClick"></detail-nav-bar>
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
    <bottom-bar @addCart="addCart"></bottom-bar>
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
import BottomBar from "./childs/BottomBar";

import Scroll from "components/content/scroll/Scroll";
import Toast from "components/common/toast/Toast";

import { mixin, initCart } from "common/mixin";

import { detailInfo, Goods, Params, getRecommend } from "api/";
import { debounce } from "common/util";

export default {
  name: "detail",
  data() {
    return {
      swiperImgs: [],
      goods: {},
      shopInfo: {},
      detailImgs: {},
      detailParams: {},
      detailComment: [],
      detailRecommend: [],
      navItemOffstTop: [],
      getOffSetYs: null,
      scrollIndex: 0,
      scrollNavs: null,
    };
  },
  created() {
    this.initData();
  },
  mixins: [mixin, initCart],
  mounted() {
    this.getOffSetYs = debounce(() => {
      this.navItemOffstTop = [];
      let top1 = this.$refs.swiper.$el.offsetTop;
      let top2 = this.$refs.params.$el.offsetTop;
      let top3 = this.$refs.comment.$el.offsetTop;
      let top4 = this.$refs.recommend.$el.offsetTop;
      this.navItemOffstTop.push(top1, top2, top3, top4);
    }, 200);
    this.scrollNavs = debounce(y => {
      let index = this.navItemOffstTop.findIndex(item => {
        return item > y;
      });
      switch (index) {
        case 1:
          this.scrollIndex = 0;
          break;
        case 2:
          this.scrollIndex = 1;
          break;
        case 3:
          this.scrollIndex = 2;
          break;
        case -1:
          this.scrollIndex = 3;
          break;
      }
      this.$refs.nav.currentIndex = this.scrollIndex;
    }, 100);
  },
  methods: {
    initData() {
      detailInfo({ iid: this.$route.params.id })
        .then(res => {
          const data = res.result;
          //console.log(data);
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
      this.getOffSetYs();
    },

    scroll(position) {
      this.backShow = -position.y > this.topY;
      this.scrollNavs(-position.y);
    },
    navClick(index) {
      this.$refs.scroll.backTop(0, -this.navItemOffstTop[index], 500);
    },
    //加入购物车
    addCart() {
      let cartInfo = {
        iid: this.$route.params.id,
        image: this.swiperImgs[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice
      };
      //console.log(cartInfo);
      this.$store.dispatch("addCart", cartInfo).then(res => {
         this.$toast.show(res);
      });
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
    BottomBar,
    Toast,

    Scroll
  },
  provide() {
    return {
      refresh: this.detailImgLoad
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
  bottom: 58px;
  z-index: 99;
  background: #fff;
}
.back-top {
  position: fixed;
  right: 5px;
  bottom: 60px;
  z-index: 99;
}
.back-top img {
  width: 46px;
  height: 46px;
}
</style>
