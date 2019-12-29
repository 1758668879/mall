<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  text-align: center;
  background-color: rgba(230, 230, 230, 1);
  box-shadow: 0 -1px 1px #ddd;
  font-size: 14px;
  z-index: 10;
}

</style>