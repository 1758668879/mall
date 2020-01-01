<template>
  <div class="wraper" ref='wraper'>
     <div class="content">
         <slot></slot>
     </div>
  </div>
</template>

<script>
 import BScroll from 'better-scroll';
export default {
  data() {
    return {
       scroll:null
    };
  },
  props:{
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  created() {

  },
  mounted(){
     this.scroll= new BScroll(this.$refs.wraper,{
         click:true,
         probeType:3,
         pullUpLoad:true
     }); 
     //监测滚动事件
     this.scroll.on('scroll',position=>{
         this.$emit('scroll',position);
     });
     //监测滚动到底部
     this.scroll.on('pullingUp',()=>{
         this.$emit('getBottom');
     });
     
  },
  methods: {
      //监听回到顶部
     backTop(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
     },
     //重置监听到底部事件
     finishPullUp(){
         
         this.scroll && this.scroll.finishPullUp();
     },
     //图片加载完成重新refresh
     refresh(){
         this.scroll && this.scroll.refresh();
     }
  },
};
</script>
<style scoped>
.wraper{
    
}
</style>