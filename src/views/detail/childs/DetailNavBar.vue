<template>
  <nav-bar class="navbar">
    <template #nav-left>
      <div class="navbar-left" @click="backPrev">
        <img src="~assets/imgs/common/back.svg" alt />
      </div>
    </template>
    <template #nav-center>
      <div class="navbar-center">
        <div @click="navClick(index)" :class="{active:currentIndex==index}" class="navbar-center-item" v-for="(item,index)  in titles" :key="item">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  created() {},
  methods: {
      backPrev(){
          this.$router.back();
      },
      navClick(index){
          this.currentIndex=index;
          this.$emit('navClick',index);
      }
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.navbar-center {
  display: flex;
  text-align: center;
  font-size:13px;
}
.navbar-left img {
  margin-top: 11px;
}
.navbar-center-item {
  flex: 1;
}
.active{
    color:var(--color-high-text);
}
</style>