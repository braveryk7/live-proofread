const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 15000,
        inline: true,
        watchContentBase: true,
        open: 'Chrome',
        overlay: {
            warnings: true,
            errors: true
        },
        useLocalIp: true,
        publicPath: '/js/',
    }
};