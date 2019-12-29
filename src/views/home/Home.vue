<template>
  <div class="home">
    <div class="nav">
      <nav-bar>
        <template #nav-center>购物街</template>
      </nav-bar>
    </div>
    <scroll>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <Feature />
      <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
      <Goods :goods="goodsList" />
    </scroll>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
  
<script>
import HomeSwiper from "./childs/HomeSwiper";
import RecommendView from "./childs/RecommendView";
import Feature from "./childs/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from 'components/content/scroll/Scroll';

import { getHomeMultiData, getGoodsData } from "api/";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentTab: "pop",
      tabs: ["pop", "new", "sell"]
    };
  },
  computed: {
    goodsList() {
      return this.goods[this.currentTab].list;
    }
  },
  methods: {
    /* 
      网络请求相关的
    */
    getHomeMultiData() {
      getHomeMultiData()
        .then(res => {
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getGoodsData(type) {
      getGoodsData({ type: type, page: this.goods[type].page + 1 })
        .then(res => {
          this.goods[type].page += 1;
          this.goods[type].list.push(...res.data.list);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    tabClick(index) {
      this.currentTab = this.tabs[index];
    }
  },
  created() {
    //请求轮播图多数据
    this.getHomeMultiData();

    //获取新品 流行 精选数据
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  components: {
    HomeSwiper,
    RecommendView,
    Feature,

    NavBar,
    TabControl,
    Goods,
    Scroll
  }
};
</script>
<style scoped>
.home {
  padding-top: 44px;
}
.nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
</style>