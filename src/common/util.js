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