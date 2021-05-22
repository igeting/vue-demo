import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from '@/components/svg/SvgIcon'
import '@/components/svg/index'

Vue.use(ElementUI)

Vue.component('svg-icon', SvgIcon)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
