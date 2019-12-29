<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{active:index==currentIndex}"
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0 //用来标记当前激活的下标
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index){
       this.currentIndex=index;
       this.$emit('tabClick',index);
    }
  },
  created() {}
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  position: sticky;
  top:44px;
  background-color: #eee;
  height: 40px;
  line-height: 40px;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  padding: 6px;
}
</style>