import moment from 'moment';
export function getTitle(title) {
    return title ? title : 'mall';
}

/* 
格式化时间函数封装
*/
export function format(data, arg) {
    return moment(data).format(arg);
}

/* 
防抖函数
*/
export function debounce(func, delay) {
    let timer;
    return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay)
    }
}

/* 
节流函数
*/

export function throttle(func, delay) {
    let timer;
    let flag;
    return function() {
        if (flag) {
            return false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        flag = true;
        timer = setTimeout(() => {
            func.apply(this, arguments);
            flag = false;
        }, delay);
    }
}