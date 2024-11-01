<?php

    session_start();
    if(!isset($_SESSION['usuario'])){
        echo '
        <script>
            alert("Por favor debe iniciar sesion ");
            window.location = "index.php";
        </script>
        ';
        session_destroy();
        die();

    }


?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenida</title>
        <link rel="stylesheet" href="./crud/styles.css">
        <link rel="stylesheet" href="assets/css/styles.css">
    </head>
    <body>
        <main class="container">
            <div class="caja__trasera-login">
                <h1 class="crud_title">Bienvenida</h1>
                <a href="php/cerrar_sesion.php"><img src="" >Cerrar Sesión</a>
                <a href="./crud/index.html"><img src="" >Página Principal</a>

            </div>
        </main>
    </body>
    </html>