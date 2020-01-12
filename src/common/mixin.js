import { ADD_CART_ALL } from '../store/mutations-type';
const mixin = {
    data() {
        return {
            backShow: false,
            topY: 1000
        }
    },
    methods: {
        //回到顶部
        goTop() {
            this.$refs.scroll.backTop(0, 0, 200);
        },
    }
}
const initCart = {
    created() {
        if (localStorage.cartList) {
            this.initCartData();
        }
    },
    methods: {
        //将本地存储的购物车数据保存到vuex
        initCartData() {
            this.$store.commit(ADD_CART_ALL, localStorage.cartList);
        },
    }
}
export { mixin, initCart }