<?php

session_start();

include 'conexion_be.php';  // Asegúrate de que el archivo de conexión está correctamente incluido

$nombre_completo = $_POST['nombre_completo'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$contrasena = hash('sha512', $contrasena);

// Verificar si el correo ya existe
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");

if(mysqli_num_rows($verificar_correo) > 0){
    echo '
    <script>
        alert("El correo ya existe");
        window.location = "index.php";
    </script>
    ';
    exit();
}

// Verificar si el usuario ya existe
$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");

if(mysqli_num_rows($verificar_usuario) > 0){
    echo '
    <script>
        alert("El usuario ya existe");
        window.location = "index.php";
    </script>
    ';
    exit();
}

// Insertar nuevo usuario
$query = "INSERT INTO usuarios (nombre_completo, correo, usuario, contrasena) 
          VALUES ('$nombre_completo', '$correo', '$usuario', '$contrasena')";

$ejecutar = mysqli_query($conexion, $query);

if($ejecutar){
    $_SESSION['usuario'] = $usuario;

    // Redireccionar a otro proyecto
    header("Location: ../bienvenida.php"); // Especifica la página correcta a la que quieres redirigir
    exit();

    echo '
    <script>
        alert("Registro exitoso");
    </script>
    ';
}else{
    echo '
    <script>
        alert("Error al registrarse");
        window.location = "index.php";
    </script>
    ';
}

mysqli_close($conexion);

?>
