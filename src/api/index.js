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

//获取商品详情信息
export function detailInfo(data) {
    return request({
        url: 'detail',
        method: 'get',
        params: data
    });
}

//商品推荐
export function getRecommend() {
    return request({
        url: '/recommend',
        method: 'get'
    });
}


//对商品详情信息进行处理----标题价格快递
export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.lowPrice = itemInfo.lowPrice;
        this.discountBgColor = itemInfo.discountBgColor;
        this.discountDesc = itemInfo.discountDesc;
        this.sell = columns[0];
        this.collect = columns[1];
        this.services1 = shopInfo.services[0];
        this.services2 = shopInfo.services[1];
        this.services3 = shopInfo.services[2];
    }
}
//对衣服参数进行处理
export class Params {
    constructor(info, rule) {
        this.rule = rule.tables;
        this.info = info.set;
    }
}