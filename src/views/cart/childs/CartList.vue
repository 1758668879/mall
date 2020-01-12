<template>
  <div>
    <cart-list-item v-for='item in cartList' :key='item.iid' :cart-list-item='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  data() {
    return {

    };
  },
  props:{
      cartList:{
          type:Array,
          default(){
            return [];
          }
      }
  },
  created() {

  },
  methods: {

  },
  components:{
      CartListItem
  }
};
</script>
<style scoped>


</style>