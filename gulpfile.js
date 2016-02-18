const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');

gulp.task('default', function() {
    return  gulp.src('./src/js/app.jsx')
    .pipe(webpack({
        watch: true,
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.md$/,
                    loader: 'raw-loader'
                }
            ]
        }
    }))
    .pipe(gulp.dest('./build'))
});
