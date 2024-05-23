<%-- 
    Document   : envio
    Created on : 22 may. 2024, 18:27:40
    Author     : steph
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/envio2.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <title>Envío - pedido | OnlyGameFans.com</title>
        <link rel="shortcut icon" href="Logos/LogoFinal.png">
    </head>
    <body> 
        <div class="container">

            <div class="container-envio">

                <span class="titulo">Envío de tu pedido</span>
                <img src="imgs/map_icon.png" class="map_icon">

                <div class="container-form">

                    <form>

                        <div class="container-form-child">

                            <div class="izquierda">
                                <div class="container-form-nephew">
                                    <label class="indx">Dirección</label>
                                    <input type="text" id="direccion" name="direccion" placeholder="Calle del Coso, 7A">
                                </div>
    
                                <div class="container-form-nephew">
                                    <label class="indx">País</label>
                                    <input type="text" id="pais" name="pais">
                                </div>
    
                                <div class="container-form-nephew">
                                    <label class="indx">Email</label>
                                    <input type="text" id="email" name="email" placeholder="ejemplo@gmail.com">
                                </div>
                            </div>                            

                            <div class="derecha">
                                <div class="container-form-nephew">
                                    <label class="indx">Código postal</label>
                                    <input type="text" id="cp" name="cp">
                                </div>
    
                                <div class="container-form-nephew">
                                    <label class="indx">Provincia</label>
                                    <input type="text" id="provincia" name="provincia">
                                </div>
    
                                <div class="container-form-nephew">
                                    <label class="indx">Teléfono</label>
                                    <input type="text" id="telefono" name="telefono">
                                </div>
                            </div>
                            
                        </div>

                        <div class="contenedor">
                            <a href="pago.jsp" style="width: fit-content">
                                <button class="boton cinco" onclick="guardarDatos()">
                                    <div class="icono">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </div>
                                    <span>Proceder con el pago</span>
                                </button>
                            </a>
                        </div>

                    </form>

                </div>

            </div>

        </div>
        <script>
            function guardarDatos() {
                let direccion = document.getElementById("direccion").value;
                let pais = document.getElementById("pais").value;
                let email = document.getElementById("email").value;
                let cpostal = document.getElementById("cp").value;
                let provincia = document.getElementById("provincia").value;
                
                localStorage.setItem("direccion", direccion);
                localStorage.setItem("pais", pais);
                localStorage.setItem("email", email);
                localStorage.setItem("cpostal", cpostal);
                localStorage.setItem("provincia", provincia);
            }
        </script>
        <!--<script src="js/envio.js"></script>-->
    </body>

    <footer>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="registrocuenta.jsp">¡Crea una cuenta ahora!</a>
                </li>
                <li>
                    <a href="articulos.jsp">Ver videojuegos</a>
                </li>
            </ol>
        </div>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="carrito.jsp">Revisa tu carrito</a>
                </li>
                <li>
                    <a href="articulos.jsp">Ver consolas</a>
                </li>
            </ol>
        </div>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="#">Política de cookie</a>
                </li>
                <li>
                    <a href="#">Información sobre datos personales</a>
                </li>
            </ol>
        </div>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="#">Terminos de venta</a>
                </li>
                <li>
                    <a href="#">Política de devoluciones</a>
                </li>
            </ol>
        </div>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="#">Política de la empresa</a>
                </li>
            </ol>
        </div>

        <!-- CONTENEDOR PARA LAS REDES SOCIALES -->
        <div class="container-rrss">

            <div class="rrss">

                <span class="facebook">
                    <a href="#">
                        <img src="RRSS/LogoFacebook.png" alt="Facebook" class="fb">
                    <p>Facebook</p>
                    </a>
                </span>
                
                <span class="instagram">
                    <a href="#">
                        <img src="RRSS/LogoInstagram.png" alt="Instragram" class="ig">
                        <p>Instagram</p>
                    </a>
                </span>

                <span class="x">
                    <a href="#">
                        <img src="RRSS/LogoX.png" alt="X" class="x-twitter">
                        <p>X</p>
                    </a>
                </span>

            </div>

        </div>
    </footer>
</html>