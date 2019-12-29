import { request } from 'network/request';

/*
获取轮播图等数据 
 */
export function getHomeMultiData() {
    return request({
        url: 'home/multidata',
        method: 'get'
    });
}

/* 
获取流行 上新 精选数据
*/
export function getGoodsData(data) {
    return request({
        url: 'home/data',
        method: 'get',
        params: data
    })
}