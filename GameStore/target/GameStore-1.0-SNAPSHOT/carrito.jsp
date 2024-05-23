<%-- 
    Document   : carrito
    Created on : 9 may. 2024, 9:55:22
    Author     : steph
--%>
<%@page import="java.util.List"%>
<%@page import="logica.Articulo"%>
<%@page import="com.google.gson.Gson"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/carrito.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <title>Tu carrito de compras | OnlyGameFans</title>
        <link rel="shortcut icon" href="Logos/LogoFinal.png">
    </head>
    <body>
        
        <div class="wrapper">

            <aside>
                <header class="logo">
                    <img src="Logos/OnlyGameFansTitulo.png" class="img-logo">
                </header>
                <nav>
                    <ul class="menu">
                        <li>
                            <a class="botonCategoria botonVolver" href="articulos.jsp">
                                <!--ÍCONO FLECHA DE RETORNO-->
                                <i class="bi bi-arrow-left-circle-fill"></i> Seguir comprando
                            </a>
                        </li>
                        <li>
                            <a class="botonCategoria botonCarrito active" href="carrito.jsp">
                                <i class="bi bi-cart2"></i> Carrito
                            </a>
                        </li>
                    </ul>
                </nav>
                <footer>
                    <p class="textoFooter">© 2024 OnlyGameFans</p>
                </footer>
            </aside>
            
            <main>
                <h2 class="tituloPrincipal">Carrito</h2>
                <div class="containerCarrito">
    
                    <!--MENSAJE QUE SE MUESTRA CUANDO EL CARRITO ESTÁ VACÍO-->
                    <p id="carritoVacio" class="carritoVacio">Tu carrito está vacío. <i class="bi bi-emoji-frown-fill"></i></p>
    
                    <div id="carritoProductos" class="carritoProductos disabled">
                        <!--LOS PRODUCTOS SERÁN CARGADOS CON JAVASCRIPT-->
                    </div>
    
                    <div id="accionesCarrito" class="accionesCarrito disabled">
                        
                        <div class="accionesIzquierda">
                            <form action="SvCarrito" method="POST" style="width: fit-content; height: fit-content;">
                                <button id="vaciarCarrito" class="vaciarCarrito" onclick="return enviarUserAlCarrito(this)">Vaciar carrito</button>
                            </form>
                        </div>
    
                        <div class="accionesDerecha">
                            <div class="precioTotal">
                                <p>Total: </p>
                                <p id="total"></p>
                            </div>
                            <a href="envio.jsp">
                                <button id="comprarCarrito" class="comprarCarrito">Comprar ahora</button>
                            </a>
                        </div>

                    </div>

                    <p id="carritoComprado" class="carritoComprado disabled">Gracias por tu compra! <i class="bi bi-emoji-laughing-fill"></i></p>

                </div>
            </main>
        </div>
        
        <script>
            var userEmail = localStorage.getItem("userEmail");
            
            function enviarUserAlCarrito(button) {
                if (userEmail) {
                    var xhr = new XMLHttpRequest();
                    //xhr.open("POST", "SvCarrito?userEmail" + encodeURIComponent(userEmail), true);
                    xhr.open("POST", "SvCarrito", true);
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    
                    xhr.onload = function() {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            location.reload();
                        } else {
                            console.error('Hubo un error al vaciar el carrito:', xhr.status, xhr.statusText);
                        }
                    };
                    
                    xhr.send("action=vaciarCarrito&userEmail=" + encodeURIComponent(userEmail));
                    return false;
                }
                return true;
            }
        </script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/carritoCompras8.js"></script>
    </body>
</html>