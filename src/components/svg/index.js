import Vue from 'vue'
import SvgIcon from '@/components/svg/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const requireAll = ctx => ctx.keys().map(ctx)
requireAll(require.context('@/static/icons/svg', false, /\.svg$/))
