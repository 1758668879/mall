<template>
  <div>
    <nav-bar class="cart">
      <template #nav-center>购物车({{cartListLength}})</template>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list :cart-list='cartList'></cart-list>
    </scroll>
    <account />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from 'components/content/scroll/Scroll'

import CartList from './childs/CartList';
import Account from './childs/Account';
 
import {mapState,mapGetters} from 'vuex';

import {initCart} from 'common/mixin';

export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed:{
    ...mapState(['cartList']),
    ...mapGetters(['cartListLength'])
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    Account
  },
  activated(){
    this.$refs.scroll.refresh();
  },
  mixins:[initCart]
};
</script>
<style scoped>
.cart {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 1;
}
.scroll{
  position: absolute;
  top:44px;
  bottom:93px;
  left:0;
  right:0;
}
</style>