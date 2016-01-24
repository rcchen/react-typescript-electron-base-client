module.exports = {
    entry: './src/init.tsx',
    output: {
        filename: './build/app.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
