export default {
    //总个数
    cartListLength(state) {
        return state.cartList.length
    },
    //选中的个数
    cartListCheckLength(state) {
        return state.cartList.filter(item => item.isCheck === true).length
    },
    cartListSelactAll(state, getters) {
        let checkLength = state.cartList.filter(item => item.isCheck === true).length;
        if (checkLength === 0) {
            return false;
        } else {
            if (checkLength === getters.cartListLength) {
                return true;
            } else {
                return false;
            }
        }
    },
    cartTotal(state) {
        let total = 0;
        if (state.cartList.length > 0) {
            let checkArr = state.cartList.filter(item => item.isCheck === true);
            if (checkArr.length > 0) {
                total = checkArr.map(item => {
                    return (item.count * item.price) * 10;
                }).reduce((totals, num) => totals + num, 0)
            }
        }
        return total * 10 / 100
    }
}