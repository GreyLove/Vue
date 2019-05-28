import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import Shop from './components/Shop.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/search', component: Search },
        { path: '/shopcar', component: Shop },
    ],
    linkActiveClass: 'mui-active'
})


export default router