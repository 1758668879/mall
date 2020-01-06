<template>
  <div class="detail-imgs">
    <div class="start"></div>
    <div class="center">{{detailImgs.desc}}</div>
    <div class="end"></div>
    <span style="padding-left:15px"> {{detailImgs.key}}</span>
    <div v-for="(item,index) in detailImgs.list" :key="index">
        <img @load="detailImgLoad" v-lazy="item" alt="" style="width:100%;">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        count:0,
    };
  },
  props: {
    detailImgs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  computed:{
      length(){
          return this.detailImgs.list.length || 1;
      }
  },
  methods: {
      detailImgLoad(){
         /* if(++this.count==this.length){
             this.$emit('detailImgLoad'); 
         } */
          this.$emit('detailImgLoad'); 
      }
  }
};
</script>
<style scoped>

.start,
.end {
  width: 90px;
  height: 1px;
  margin-left: 15px;
  background: #a3a3a5;
  position: relative;
}
.end {
  float: right;
  margin-right: 15px;
}
.start::after,
.end::after {
  width: 5px;
  height: 5px;
  content: "";
  background-color: #000;
  position: absolute;
  bottom: 0;
}
.end::after {
  right: 0;
  content: "";
  clear: both;
  display: table;
}
.center {
  font-size: 14px;
  padding: 10px 15px;
}
</style>