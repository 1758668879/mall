<template>
  <div class="goods-item" @click="goodsItemClick(goodsItem.iid)">
    <img v-lazy="showImgs" alt @load="loadImg" />
    <div class="goods-descrition">
      <p>{{goodsItem.title}}</p>
      <span class="price">&yen;{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    showImgs() {
      if (this.goodsItem.show && this.goodsItem.show.img) {
        return this.goodsItem.show.img;
      } else if (this.goodsItem.image) {
        return this.goodsItem.image;
      }
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  methods: {
    loadImg() {
      this.refresh();
    },
    goodsItemClick(id) {
      console.log(id);
      this.$router.push({
        path: `/detail/${id}`
      });
    }
  },
  inject: ["refresh"]
};
</script>
<style scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  text-align: center;
  font-size: 14px;
}
.goods-item img {
  width: 100%;
}
.goods-item p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
}
.goods-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item .collect {
  position: relative;
}
.goods-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/imgs/common/collect.svg") no-repeat 0/14px;
}
.goods-descrition {
  position: absolute;
  bottom: 3px;
  left: 0px;
  right: 0px;
}
</style>