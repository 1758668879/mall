<template>
  <div class="recommend">
      <goods :goods='detailRecommend'></goods>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods';
export default {
  data() {
    return {};
  },
  props: {
    detailRecommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {},
  methods: {},
  components:{
      Goods
  }
      
};
</script>
<style scoped>
.recommend {
  padding: 20px 15px;
}
</style>