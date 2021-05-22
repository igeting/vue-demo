'use strict'
const path = require('path')
const port = process.env.port || 8080
const resolve = dir => {
    return path.join(__dirname, dir)
}

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
            .set('@', resolve('src'))
            .set('style', resolve('src/style'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))

        let svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
            symbolId: 'icon-[name]'
        })
    },
    devServer: {
        port: port,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        },
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    },
}
