import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    }
]

const router = new VueRouter({
    mode: 'history', //hash, history
    base: process.env.BASE_URL,
    routes
})

export default router
