module.exports = {
    entry: './src/js/app.jsx',
    output: {
        path: './build/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
