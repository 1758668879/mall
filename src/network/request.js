import axios from 'axios';

/* 
封装网络请求
*/
export function request(config) {
    /* 
    配置axios基础属性
    */
    let instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/w1',
        //baseURL: 'http://106.54.54.237:8000/api/w1',
        timeout: 30000
    });
    /* 
     设置响应请求拦截器
    */
    instance.interceptors.request.use(config => {
        //console.log(config);
        return config;
    });
    instance.interceptors.response.use((res) => {
        //console.log(res);
        return res.data;
    }, err => {
        console.log(err);
        return;
    })
    return new Promise((resolve, reject) => {
        instance(config).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}