import { ADD_CART, ADD_CART_COUNT, ADD_CART_ALL, CHECK_ACCOUNT, CART_SELECT_ALL } from './mutations-type';
export default {
    [ADD_CART](state, payload) {
        payload.count = 1;
        state.cartList.push(payload);
    },
    [ADD_CART_COUNT](state, payload) {
        payload.count += 1;
    },
    [ADD_CART_ALL](state, payload) {
        //console.log(payload);
        state.cartList = JSON.parse(payload);
    },
    [CHECK_ACCOUNT](state, payload) {
        payload.isCheck = !payload.isCheck;
    },
    [CART_SELECT_ALL](state, payload) {
        state.cartList.map(item => item.isCheck = !payload)
    }
}