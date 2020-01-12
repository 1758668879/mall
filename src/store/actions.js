import { ADD_CART, ADD_CART_COUNT, CHECK_ACCOUNT, CART_SELECT_ALL } from './mutations-type';
export default {
    addCart({ commit, state }, payLoad) {
        return new Promise((resolve, reject) => {
            let newCartList = state.cartList.find(item => item.iid === payLoad.iid)
            if (newCartList) {
                //之前购物车有该商品，只需增加数量
                commit(ADD_CART_COUNT, newCartList);
                resolve('购物车数量+1');
            } else {
                //之前购物车没有该商品
                payLoad.isCheck = false;
                resolve('成功添加到购物车');
                commit(ADD_CART, payLoad);
            }
            //保存购物车数据到本地
            localStorage.cartList = JSON.stringify(state.cartList)
        })
    },
    //购物车结算选中和未选中切换
    checkAccount({ commit, state }, payload) {
        let newCartList = state.cartList.find(item => item.iid == payload)
        commit(CHECK_ACCOUNT, newCartList);
        localStorage.cartList = JSON.stringify(state.cartList)
    },
    //全选和全不选
    cartSelectAll({ commit, state }, payload) {
        commit(CART_SELECT_ALL, payload);
        localStorage.cartList = JSON.stringify(state.cartList)
    }
}