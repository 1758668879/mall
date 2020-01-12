<template>
  <div class="bottom-bar">
    <div class="shop">
      <div class="shop-item shop-info">
        <div>
          <i class="icon service"></i>
          客服
        </div>
        <div>
          <i class="icon store"></i>
          店铺
        </div>
        <div>
          <i class="icon collect"></i>
          收藏
        </div>
      </div>
      <div class="shop-item cart-info">
        <div class="add-cart" @click="addCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    addCart(){
      this.$emit('addCart');
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  height: 58px;

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0;
  background-color: #fff;
  z-index: 100;
}
.shop {
  display: flex;
}
.shop-item {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.shop-info div {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.shop-info .icon {
  width: 24px;
  height: 24px;
  display: block;
  background-image: url("~assets/imgs/detail/detail_bottom.png");
  background-size: 24px;
  background-repeat:no-repeat;
  margin: 3px auto
}
.shop-info .service{
  background-position: 0 -57px;
}
.shop-info .store{
  background-position: 0 -107px;
}
.add-cart {
  background-color: #ffe817;
  color: #000;
  padding: 0 5px;
  flex: 2;
  text-align: center;
  line-height: 58px;
}
.buy {
  background-color: #f69;
  padding: 0 5px;
  color: #fff;
  flex: 1;
  text-align: center;
  line-height: 58px;
}
</style>