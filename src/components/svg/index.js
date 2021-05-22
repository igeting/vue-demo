const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/static/icons/svg', false, /\.svg$/)
requireAll(req)