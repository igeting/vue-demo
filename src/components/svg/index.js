const requireAll = ctx => ctx.keys().map(ctx)
const req = require.context('@/static/icons/svg', false, /\.svg$/)
requireAll(req)