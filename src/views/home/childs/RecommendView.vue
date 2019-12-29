<template>
  <div class="recommend">
     <div class="recommend-item" v-for="(item,index) in recommends" :key='index'>
         <a :href="item.link">
             <img :src="item.image" alt="">
         </a>
         <p>{{item.title}}</p>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },
  props:{
     recommends:{
         type:Array,
         default(){
             return [];
         }
     }
  },
  methods: {

},
  created() {

  },
};
</script>
<style scoped>
.recommend{
    display: flex;
    padding: 4px;
    padding:20px 0px 30px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    width: 25%;
    text-align: center;
}
.recommend-item img{
    width: 100%;
}

</style>