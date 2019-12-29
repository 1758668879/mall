import Vue from 'vue';
import Router from 'vue-router';
import { getTitle } from 'common/util';
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);
/* 
引入路由

*/
const Home = () =>
    import ('views/home/Home');
const Category = () =>
    import ('views/category/Category');
const Cart = () =>
    import ('views/cart/Cart');
const Profile = () =>
    import ('views/profile/Profile');
/* 
映射路由
*/
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { title: "首页" }
    }, {
        path: '/category',
        component: Category,
        meta: { title: '分类' }
    }, {
        path: '/cart',
        component: Cart,
        meta: { title: '购物车' }
    }, {
        path: '/profile',
        component: Profile,
        meta: { title: '个人' }
    }
];

const router = new Router({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    document.title = getTitle(to.meta.title)
    next();
})
export default router;