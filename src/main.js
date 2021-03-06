import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')