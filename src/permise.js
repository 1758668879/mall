import router from './router/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css' //这个样式必须引入
NProgress.configure({
    showSpinner: false
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})
router.afterEach((to, from) => {
    NProgress.done();
});