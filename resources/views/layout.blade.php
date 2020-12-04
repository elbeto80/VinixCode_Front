<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>AdminLTE 3 | Blank Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ mix('css/template.css') }}">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    </head>

    <body class="hold-transition sidebar-mini">
        <div id="app">
            <div class="wrapper">
                @include('comun/header')

                @include('comun/menu')

                @yield('contenido')

                @include('comun/footer')

            </div>
        </div>

        <!-- Todos los js integrados y compliados con webpack -->
        <script src="{{ mix('js/template.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>

</html>
