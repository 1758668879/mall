<template>
  <div class="account">
    <div class="select">
      <div class="select-all" :class="{active:cartListSelactAll}" @click="selecAll">
        <img src="~assets/imgs/cart/tick.svg" alt />
      </div>
      <div class="select-text">全选</div>
    </div>
    <div class="total">
      合计:
      <span>&yen;{{cartTotal}}</span>
    </div>
    <div class="go-account">
      <button>去结算({{cartListCheckLength}})</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartListLength",'cartListCheckLength',"cartListSelactAll",'cartTotal']),
  
  },
  created() {},
  methods: {
    //全选和全部选
    selecAll() {
        this.$store.dispatch('cartSelectAll',this.cartListSelactAll);
    }
  }
};
</script>
<style scoped>
.account {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 44px;
  background-color: #eee;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
}
.select {
  position: relative;
  width: 84px;
  height: 100%;
}

.select-all {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  line-height: 24px;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border: 2px solid #ccc;
  background-color: #fff;
}
.active {
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);
}
.total {
  line-height: 44px;
}
.total span {
  color: var(--color-tint);
}
.select-text {
  margin-left: 28px;
  line-height: 44px;
  height: 100%;
  display: inline-block;
}
.go-account button {
  height: 100%;
  border: none;
  background-color: red;
  color: #fff;
  padding: 8px;
}
</style>