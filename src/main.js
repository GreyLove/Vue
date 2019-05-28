import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import app from './App.vue'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

let vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})