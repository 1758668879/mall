<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load='swiperImgLoad' alt="item.title" :title='item.title'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

	export default {
    name: "HomeSwiper",
    data(){
        return{
          count:0//用来记录轮播图的记载次数
        }
    },
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      swiperImgLoad(){
        if(this.count<1){
          this.$emit('homeSwiperImgLoad');
          this.count++;
        }
      }
    }
	}
</script>

<style scoped>

</style>
