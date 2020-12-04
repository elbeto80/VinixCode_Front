<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Alberto A. Álvarez - Prueba desarrollador</title>
    <link href="./css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link href="./css/sb-admin-2.min.css" rel="stylesheet">
</head>

<body id="page-top">

    <div id="wrapper">
        @include('comun/menu')
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                @include('comun/header')
                <div class="container-fluid">
                    <div id="app">
                        @yield('contenido')
                    </div>
                </div>
            </div>
            @include('comun/footer')
        </div>
    </div>

    <script src="./js/jquery.min.js"></script>
    <script src="./js/bootstrap.bundle.min.js"></script>
    <script src="./js/jquery.easing.min.js"></script>
    <script src="./js/sb-admin-2.min.js"></script>
</body>

</html>
