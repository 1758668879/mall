<template>
  <TabBar>
    <TabItem path='/home' >
      <template #item-icon>
        <img src="~assets/imgs/tabbar/home.svg" alt />
      </template>
      <template #item-icon-active >
        <img src="~assets/imgs/tabbar/home_active.svg" alt />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </TabItem>
    <TabItem path='/category' >
      <template #item-icon>
        <img src="~assets/imgs/tabbar/category.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/category_active.svg" alt />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </TabItem>
    <TabItem path='/cart' >
      <template #item-icon>
        <img src="~assets/imgs/tabbar/cart.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/cart_active.svg" alt />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </TabItem>
    <TabItem path='/profile' >
      <template #item-icon>
        <img src="~assets/imgs/tabbar/profile.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/profile_active.svg" alt />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </TabItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabItem from "components/common/tabbar/TabItem";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: {
    TabBar,
    TabItem
  }
};
</script>
<style scoped>
</style>