<template>
  <div class="params">
    <table class="size" v-for="(itemlist,index) in detailParams.rule" :key="index">
      <tr v-for="(item,index) in itemlist" :key="index">
        <td v-for="(items,index) in item" :key="index">{{items}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(item,index) in detailParams.info" :key="index">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.params {
  padding: 30px 15px;
  margin-top: 30px;
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
.size {
  width: 100%;
}

.size td {
  width: 20%;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
.info {
  width: 100%;
}
.info td {
  border-bottom: 1px solid #ddd;
}
.info-key {
  width: 35%;
  font-size: 13px;
  padding: 10px 0;
}
.info-value{
    color: var(--color-tint)
}
</style>