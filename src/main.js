import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import './filter/index'
// import './theme/theme.less'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')
