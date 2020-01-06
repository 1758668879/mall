<template>
  <div class="shops">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" width="30" height="30" alt />
      <span class="shop-title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="shop-sell">
        {{shopInfo.cSells}}
        <div class="shop-cell-text">总销量</div>
      </div>
      <div class="shop-all">
        {{shopInfo.cGoods}}
        <div class="shop-all-text">全部宝贝</div>
      </div>
      <div class="shop-level">
        <div  class="shop-level-item" v-for="(item,index) in shopInfo.score" :key="index">
          <div class="shop-level-name" >{{item.name}}</div>
          <div class="shop-level-score" :style="{color:item.isBetter?'red':'green'}">{{item.score}}</div>
          <div class="shop-level-isbetter" >
            <span :style="{backgroundColor:item.isBetter?'red':'green'}">{{item.isBetter?'高':'低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="goshop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.shops{
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-logo {
  padding: 20px;
}
.shop-logo img {
  vertical-align: middle;
}
.shop-title {
  font-size: 18px;
  margin-left: 10px;
}
.shop-detail {
  display: flex;
  text-align: center;
}
.shop-sell {
  flex: 1;
}
.shop-all {
  flex: 1;
  border-right: 1px solid #ddd;
}
.shop-level {
  flex: 2;
  font-size: 13px;
  text-align: left;
}
.shop-cell-text,
.shop-all-text {
  font-size: 13px;
  padding-top: 5px;
}
.goshop {
  text-align: center;
  margin-top: 20px;
}
.goshop span {
  padding: 10px 15px;
  background-color: #f2f5f8;
  border-radius: 10px;
  font-size: 14px;
}
.shop-level-item{
  display:flex;
}
.shop-level-item div{
  padding: 3px;
  margin-left: 10px;
}
.shop-level-name{
  flex: 2;
}
.shop-level-score,.shop-level-isbetter{
  flex:1;
}
.shop-level-isbetter{
  color:#fff;
}
</style>
