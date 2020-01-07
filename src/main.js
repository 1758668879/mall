import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import VueLazyLoad from 'vue-lazyload';
import VuePreview from 'vue-preview'
import _ from 'lodash';
import './permise';
Vue.prototype.$_ = _;
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    loading: require('assets/imgs/common/shh.png')
});

Vue.use(VuePreview)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')