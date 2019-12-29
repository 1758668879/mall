<template>
    <div class="tab-item" @click="tabBarPath">
       <div v-if='!isActive'><slot name='item-icon'></slot></div>
       <div v-else><slot name='item-icon-active'></slot></div>
       <div :style="isActiveColor"><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    isActiveColor(){
      return this.isActive?{'color':this.activeColor}:{};
     
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
      tabBarPath(){
          this.$router.push(this.path);
      }
  },
  created() {}
};
</script>
<style scoped>
.tab-item {
  flex: 1;
}
.tab-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle
}
.active{
  color:red;
}
</style>