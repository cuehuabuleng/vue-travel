import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home/home';
import city from '@/pages/city/city';
import detail from '@/pages/detail/detail';
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/city',
            name: 'city',
            component: city
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: detail
        },
    ],
    //跳转路由的时候，返回到页面的最顶部最左部
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})