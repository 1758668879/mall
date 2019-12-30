import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import VueLazyLoad from 'vue-lazyload';
import _ from 'lodash';

Vue.prototype.$_ = _;
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    loading: require('assets/imgs/common/placeholder.png')
});

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')