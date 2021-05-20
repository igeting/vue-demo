module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: 'default',
    devServer: {
        port: 8080,
        proxy: 'http://localhost:8081'
    }

}