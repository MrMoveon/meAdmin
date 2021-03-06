import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import AdminLayout from '@/view/layout/AdminLayout'
const Login = _import('login/Login')
// const Home = _import('home/Home')
// const Article = _import('container/Article')
// const Comments = _import('container/Comments')
// const UserList = _import('user/UserList')
// const Error = _import('error/error404')
import Home from '@/view/home/Home'
import Article from '@/view/container/Article'
import Comments from '@/view/container/Comments'
import UserList from '@/view/user/UserList'
import Error from '@/view/error/error404'
Vue.use(Router)
// 左侧菜单
export const leftMenu = [
    {
        path: '/container',
        name: 'Container',
        component: AdminLayout,
        redirect: '/container/article',
        meta: {
            title: '内容管理',
            icon: 'ios-paper'
        },
        children: [
            {
                path: 'article',
                name: 'Article',
                component: Article,
                meta: {
                    title: '文章管理'
                }
            },
            {
                path: 'comments',
                name: 'Comments',
                component: Comments,
                meta: {
                    title: '评论管理'
                }
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: AdminLayout,
        redirect: '/user/userlist',
        meta: {
            title: '用户管理',
            icon: 'ios-people'
        },
        children: [
            {
                path: 'userlist',
                name: 'UserList',
                component: UserList,
                meta: {
                    title: '用户列表'
                }
            }
        ]
    }
]
// 错误页面
export const error = [
    {
        path: '*',
        name: 'error',
        component: Error
    }
]
export const login = {
    path: '/login',
    name: 'Login',
    components: Login
}
export const routesList = [
    {
        path: '/',
        name: 'AdminLayout',
        component: AdminLayout,
        redirect: '/home',
        meta: {
            title: '主页'
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            }
        ]
    },
    login,
    ...leftMenu,
    ...error
]

export default new Router({
    routes: routesList
})
