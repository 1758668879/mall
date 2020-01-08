<template>
  <div class="comment" v-if="detailComment.length>0">
    <div class="header">
      <div class="user-comment">用户评价</div>
      <div class="more">
        更多
        <span class="more-load">></span>
      </div>
    </div>
    <div v-for="(item,index) in detailComment" :key="index">
      <div class="user">
        <img :src="item.user.avatar" alt />
        <span class="comment-name">{{item.user.uname}}</span>
      </div>
      <p class="comment-content">{{item.content}}</p>
      <div>
        <span class="comment-time">{{item.created | formatTime}}</span>
        <span class="comment-style">{{item.style}}</span>
      </div>
      <div v-if='item.images'>
        <img :src="item.images" alt="">
        <!-- <vue-preview class="comment-imgs" :slides="showImgs(item.images)"></vue-preview> -->
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "common/util";
export default {
  data() {
    return {};
  },
  props: {
    detailComment: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed:{
    
  },
  created() {},
  filters: {
    formatTime(va) {
      return format(va * 1000, "YYYY-MM-DD");
    }
  },
  methods: {
    showImgs(imgs){
      let tmpArr=[];
      for(let i of imgs){
         tmpArr.push({
           src:i,
           msrc:i,
           w:600,
           h:600
         });
      }
      console.log(tmpArr);
      return tmpArr;
    }
  }
};
</script>
<style scoped>
.comment {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.header {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.user-comment {
  font-size: 16px;
}
.more-load {
  margin-left: 5px;
}
.user {
  padding-top: 20px;
  padding-bottom: 10px;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.comment-name {
  font-size: 14px;
}
.comment-content {
  font-size: 13px;
  margin-bottom: 10px;
}
.comment-time,
.comment-style {
  font-size: 12px;
  color: #aaa;
}
.comment-time {
  margin-right: 10px;
}

img  {
  width: 60px;
  height: 60px;
  margin: 6px;
}

</style>