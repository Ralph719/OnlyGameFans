<%-- 
    Document   : index
    Created on : 2 may. 2024, 13:51:47
    Author     : Ralph-Niky
--%>
<%@page import="java.util.List"%>
<%@page import="logica.Videojuego"%>
<%@page import="logica.Consola"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/articulos.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="Logos/LogoFinal.png">
        <!-- Cairo -->
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
        <!-- Bebas Neue -->
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

        <title>OnlyGameFans | Tienda gaming online</title>
    </head>
    <body>
        
        <div class="wrapper" id="videojuegos">

            <aside>
                <header class="logo">
                    <!--<h1 class="logo-titulo">OnlyGameFans</h1>-->
                    <img src="Logos/OnlyGameFansTitulo.png" class="img-logo">
                </header>

                <div class="container-user-space">
                    <div class="user-space">
                        <a href="inicioSesion.jsp">
                            <img src="Logos/icono_usuario.png" id="icono-usuario">
                        </a>
                        <a href="inicioSesion.jsp">
                            <span>
                                <p id="userEmail">Tu cuenta</p>
                            </span>
                        </a>
                    </div>
                </div>

                <!--MENÚ LATERAL-->
                <nav>
                    <ul class="menu">

                        <li>
                            <button id="todos" class="botonCategoria active"><i class="bi bi-controller"></i> Todos los productos</button>
                        </li>
                        <li>
                            <button id="videojuegos" class="botonCategoria">Videojuegos</button>
                        </li>
                        <li>
                            <button id="consolas" class="botonCategoria">Consolas</button>
                        </li>
                        <li>
                            <form action="SvCarrito" method="GET">
                                <button type="submit" class="alCarrito" onclick="enviarUserAlCarrito(this)">
                                    <a class="botonCategoria carrito" href="carrito.jsp">
                                        <i class="bi bi-cart2"></i>Carrito
                                    </a>
                                </button>
                            </form>
                        </li>
                    </ul>
                </nav>

                <footer>
                    <p class="textoFooter">© 2024 OnlyGameFans</p>
                </footer>

            </aside>
            
            <!--DE ESTE LADO SE MOSTRARÁN LOS PRODUCTOS-->
            <main>
                <div class="titulo">
                    <h2 class="tituloPrincipal" id="tituloPrincipal">Todos los productos</h2>

                    <div class="containerBuscador">
                        <input type="text" name="buscador" class="buscador" id="buscador" placeholder="Buscar...">
                        <button class="botonBuscador"><i class="bi bi-search"></i></button>
                    </div>
                </div>

                <div class="containerProductos" id="containerProductos">
                <!--LOS ARTÍCULOS SERÁN CARGADOS CON JAVASCRIPT-->
                </div>

                <!-- VENTANA EMERGENTE -->
                <div id="modal" class="modal">
                    <div class="modal-content">
                      <span class="close">&times;</span>
                      <p>Artículo agregado al carrito correctamente.</p>
                    </div>
                </div>
                  
            </main>

        </div>
        
        <script>
            var userEmail = localStorage.getItem("userEmail");

            if (userEmail) {
                // Actualiza el texto de "Tu cuenta" por el username/email del usuario
                document.getElementById("userEmail").innerText = userEmail;
                
                console.log("Usuario/Email: ", userEmail);
            }
            
            function enviarUserAlCarrito(button) {
                if (userEmail) {
                    var xhr = new XMLHttpRequest();

                    // Abrir la solicitud GET
                    xhr.open("GET", "SvCarrito?userEmail=" + encodeURIComponent(userEmail), true);

                    // Enviar la solicitud GET
                    xhr.send();
                }
            }
        </script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/articulos37.js"></script>
        <script src="js/buscador.js"></script>
    </body>
</html>
