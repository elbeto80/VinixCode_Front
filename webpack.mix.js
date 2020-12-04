const mix = require('laravel-mix');

mix.styles([
    'resources/template/css/all.min.css',
    'resources/template/css/sb-admin-2.min.css',
 ], 'public/css/template.css').
 scripts([
    'resources/template/js/jquery.min.js',
    'resources/template/js/bootstrap.bundle.min.js',
    'resources/template/js/jquery.easing.min.js',
    'resources/template/js/sb-admin-2.min.js',
 ], 'public/js/template.js').
 js(['resources/js/app.js'], 'public/js/app.js').
 version();
