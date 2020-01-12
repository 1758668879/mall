<template>
  <div class="cart-list">
    <div class="check">
      <div class="check-buttom" :class={active:cartListItem.isCheck} @click="checkAccount(cartListItem.iid)">
        <img src="~assets/imgs/cart/tick.svg" alt />
      </div>
    </div>
    <div class="show-image">
      <img :src="cartListItem.image" :style="{width:'80px',height:'100px',borderRadius:'3px'}" alt />
    </div>
    <div class="cart-info">
      <div class="title">{{cartListItem.title}}</div>
      <div class="desc">商品描述:{{cartListItem.desc}}</div>
      <div class="price-count">
        <div class="price">{{cartListItem.price}}</div>
        <div class="count">x{{cartListItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  methods: {
      //选中或未选中到购物车
      checkAccount(iid){
          this.active=!this.active;
          this.$store.dispatch('checkAccount',iid);
      }
  }
};
</script>
<style scoped>
.cart-list {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
}
.check {
  position: relative;
  width: 30px;
}
.check-buttom {
  width: 24px;
  text-align: center;
  line-height: 24px;
  height: 24px;
  border-radius: 50%;
  border:2px solid #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.active{
      background-color: var(--color-tint);
      border:2px solid var(--color-tint)
}
.show-image {
  padding: 5px;
}
.cart-info {
  flex: 1;
  padding: 5px;
  overflow: hidden;
}
.cart-info .title,
.cart-info .desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cart-info .desc {
  font-size: 13px;
  margin: 20px 0;
}
.price-count{
  display: flex;
  justify-content: space-between   
}
.price-count .price{
    color: var(--color-tint);
    font-weight: 700
}
</style>