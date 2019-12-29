<template>
  <div class="cart">
    <nav-bar>
      <template #nav-center>购物车(0)</template>
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
.cart {
  background-color: var(--color-tint);
  color: #fff;
}
</style>