const mix = require('laravel-mix');

mix.styles([
    'resources/template/css/all.min.css',
    'resources/template/css/ionicons.min.css',
    'resources/template/css/adminlte.min.css',
 ], 'public/css/template.css').
 scripts([
    'resources/template/js/jquery.min.js',
    'resources/template/js/bootstrap.bundle.min.js',
    'resources/template/js/adminlte.min.js',
    'resources/template/js/demo.js',
 ], 'public/js/template.js').
 js(['resources/js/app.js'], 'public/js/app.js').
 version();
