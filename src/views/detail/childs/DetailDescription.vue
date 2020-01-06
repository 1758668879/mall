<template>
  <div v-if="Object.keys(goods).length>0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">&yen;{{goods.lowNowPrice}}</span>
      <span class="oldPrice">&yen;{{goods.lowPrice}}</span>
      <span class="chuoxiao" v-if='goods.discountDesc' :style="{backgroundColor:goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="xiaoliao">
      <div>{{goods.sell}}</div>
      <div class="shoucang">{{goods.collect}}</div>
      <div class="tuichu">{{goods.services1.name}}</div>
    </div>
    <div class="kuaidi">
      <div><img style="width: 14px;height: 14px" :src="goods.services2.icon" alt="">{{goods.services2.name}}</div>
      <div><img style="width: 14px;height: 14px" :src="goods.services3.icon" alt="">{{goods.services3.name}}</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailDescription",
    data() {
      return {}
    },
    props: {
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 16px;
    padding: 10px 5px;
  }

  .price {
    margin-bottom: 20px;
  }

  .newPrice {
    font-size: 18px;
    color: var(--color-high-text);
    padding: 5px;
    font-weight: bold;
  }

  .oldPrice {
    font-size: 14px;
    text-decoration: line-through;
    margin-right: 5px;
  }

  .xiaoliao {
    display: flex;
    padding: 0 5px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    padding-bottom: 3px;
  }
  .chuoxiao{
    color: #ffffff;
    padding: 3px;
    border-radius: 8px;
  }
  .xiaoliao div {
    flex: 1;
  }

  .shoucang {
    text-align: center;
  }

  .tuichu {
    text-align: right;
  }

  .kuaidi {
    display: flex;
    justify-content: space-between;
    padding: 20px 5px;
    font-size: 14px;
    border-bottom: 5px solid #eee;
  }

  .kuaidi img {
    position: relative;
    top:2px;
  }

</style>
