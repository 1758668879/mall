<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  props: {},
  created() {},
  methods: {
    show(message = "", wait = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      },wait);
    }
  }
};
</script>
<style scoped>
.toast {
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
</style>