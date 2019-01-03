const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: './',
    outputDir: 'build',
    assetsDir: 'static',
    filenameHashing: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('pages', resolve('src/pages'))
            .set('components', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('filters', resolve('src/filters'))
    },
    devServer: {
        proxy: {
            '/snjt-cpu-portal': {
                target: 'http://ectest.snjt.com',
                ws: true,
                changeOrigin: true
            },
        }
    },

    // 通过 webpack-merge 合并到最终的配置中
    configureWebpack:{

    }
}