<template>
  <div class="center">
    <h1>我的首页</h1>
    <router-link to='/home'>前往我的网站</router-link>

    <div class="beian">
        <a href="">粤ICP备20003756号-1</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {

  },
  methods: {

  },
};
</script>
<style scoped>
.center{
    text-align: center;
}
.beian{
    position: fixed;
    bottom: 60px;
    left:0;
    right:0
    
}
</style>
