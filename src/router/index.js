import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from '@/view/layout/AdminLayout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AdminLayout',
            component: AdminLayout
        }
    ]
})
