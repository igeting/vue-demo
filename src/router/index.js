import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//can browse repeat path
const RouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return RouterPush.call(this, to).catch(err => err)
}

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页',
        },
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/views/about'),
        meta: {
            title: '关于',
        },
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login'),
        meta: {
            title: '登录',
        },
    }
]

const router = new Router({
    mode: 'hash', //hash, history
    routes: routes,
})

const title = to => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'vue'
    }
}

router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (to.path == '/login') {
        if (token) {
            title(to)
            next({path: '/'})
        } else {
            title(to)
            next()
        }
    } else {
        if (token) {
            title(to)
            next()
        } else {
            // next({path: '/login'})
            next()
        }
    }
})

export default router
