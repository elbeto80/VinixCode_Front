<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Alberto A. Álvarez - Prueba desarrollador</title>
    <link rel="stylesheet" href="{{ mix('css/template.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
</head>

<body id="page-top">

    <div id="wrapper">
        @include('comun/menu')
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                @include('comun/header')
                <div id="app" class="container-fluid">
                    @yield('contenido')
                </div>
            </div>
            @include('comun/footer')
        </div>
    </div>

    <!-- Todos los js integrados y compliados con webpack -->
    <script src="{{ mix('js/template.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
