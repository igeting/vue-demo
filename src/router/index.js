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
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    }
]

const router = new Router({
    mode: 'hash', //hash, history
    base: process.env.BASE_URL,
    routes
})

export default router
