module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue', '.css', '.scss'],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
                'api': '@/api'
            }
        }
    }
}