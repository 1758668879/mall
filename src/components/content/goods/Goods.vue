<template>
  <div class="goods">
    <goods-item v-for='(item,key) in goods' :key='key' :goods-item='item'></goods-item>
  </div>
</template>

<script>
import GoodsItem from "components/content/goods/GoodsItem";
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {},
  created() {},
  components: {
    GoodsItem
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
</style>