const withOffline = require('next-offline');

module.exports = withOffline({
    generateInDevMode: true,
    workboxOpts: {
        // TODO
        // importWorkboxFrom: 'local',
        runtimeCaching: [
            {
                urlPattern: /static\/webpack\/.*hot-update.json/,
                handler: 'networkOnly',
                options: {
                    cacheName: 'webpack-hmr'
                }
            },
            {
                urlPattern: /static/,
                handler: 'networkFirst',
                options: {
                    cacheName: 'static-next-js'
                }
            },
            {
                urlPattern: /^https:\/\/maxcdn\.bootstrapcdn\.com/,
                handler: 'cacheFirst',
                options: {
                    cacheName: 'bootstrap'
                }
            },
            // {
            //     urlPattern: /.*/,
            //     handler: 'networkFirst',
            //     options: {
            //         cacheName: 'html-home'
            //     }
            // },
        ],
    }
});