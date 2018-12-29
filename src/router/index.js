import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue';
import list from '../pages/list.vue';
import hello from '../pages/hello.vue';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            meta: {
                title: '首页'
            },
            name: 'index',
            component: index
        },
        {
            path: '/pages/list',
            meta: {
                title: '列表示例页'
            },
            name: 'list',
            component: list
        },{
            path: '/pages/hello',
            meta: {
                title: 'hello world页'
            },
            name: 'hello',
            component: hello
        },

    ]
})
