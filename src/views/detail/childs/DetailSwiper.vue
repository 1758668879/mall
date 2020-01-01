<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in swiperImgs" :key='item'>
       <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/";

export default {
  data() {
    return {};
  },
  props: {
    swiperImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {},
  methods: {},
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.detail-swiper{
    height: 300px;
}
</style>