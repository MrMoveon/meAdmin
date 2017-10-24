// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(iView, VueAxios, axios)

Vue.config.productionTip = false

const filterRouter = ['Login', 'Error', 'Home']
 // 判断conTabs里面是否存在name元素
function inConTabs (name) {
    let tabs = []
    store.getters.conTabs.map((item, index) => {
        tabs.push(item.name)
    })
    return tabs.indexOf(name) !== -1
}
// 返回contabs里面的name元素的位置索引
function inConTabsIndex (name) {
    let tabs = []
    store.getters.conTabs.map((item, index) => {
        tabs.push(item.name)
    })
    return tabs.indexOf(name)
}
router.beforeEach((to, from, next) => {
    if (filterRouter.indexOf(to.name) === -1) {
        // 菜单的tab切换功能，
        if (inConTabs(to.name)) {
            store.commit('setOpenName', to.matched[0].name)
            store.commit('setActiveName', store.getters.conTabs[inConTabsIndex(to.name)].name)
        } else {
            store.commit('setConTabs', {
                title: to.meta.title,
                name: to.name
            })
            store.commit('setOpenName', to.matched[0].name)
            store.commit('setActiveName', to.name)
        }
    }
    next()
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
