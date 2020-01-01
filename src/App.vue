<template>
  <div>
     <main-tab-bar></main-tab-bar>
      <keep-alive :exclude="['detail']">
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/mainTabBar";
export default {
  data() {
    return {};
  },
  components: {
    MainTabBar
  }
};
</script>>
<style>
@import "assets/css/base";
</style>
