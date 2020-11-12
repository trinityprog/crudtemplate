const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
])
    .sass('resources/sass/theme.scss', 'public/css')
    .options({
        processCssUrls: false
    });
mix.js('resources/js/app.js', 'public/js')
    .webpackConfig(require('./webpack.config'));
