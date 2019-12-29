<template>
  <div class="goods">
    <nav-bar>
      <template #nav-center>商品分类</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: {
    NavBar
  }
};
</script>
<style scoped>
.goods{
  background-color: var(--color-tint);
  color:#fff;
}
</style>