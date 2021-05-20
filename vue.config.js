const path = require('path')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: 'default',
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: true,
    integrity: false,
    configureWebpack: {},
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('style', path.join(__dirname, 'src/style'))
            .set('assets', path.join(__dirname, 'src/assets'))
            .set('components', path.join(__dirname, 'src/components'))
    },
    devServer: {
        open: false,
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    },
}