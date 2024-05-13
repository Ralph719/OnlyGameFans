<%-- 
    Document   : inicioSesion
    Created on : 15 abr. 2024, 21:26:22
    Author     : steph
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/inicioSesion1.css">
        <title>Inicia sesión | OnlyGameFans.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="Logos/LogoFinal.png">
    </head>
    <body>
        <div class="container">

            <!--ANIMACION DE FIGURAS-->
            <div>
                <ul>
                    <!--<li class="cuadrados"></li>-->
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                    <li class="cuadrados"></li>
                </ul>
                <ul>
                    <!--<li class="circulos"></li>-->
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                    <li class="circulos"></li>
                </ul>
                <ul>
                    <!--<li class="equis"></li>-->
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                    <li class="equis"></li>
                </ul>
                <ul>
                    <!--<li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" points="50,20 95,95 5,95"/>
                        </svg>
                    </li>-->
                    <li class="triangulos">
                        <svg width="300" height="1700">
                            <polygon class="recta" points="50,20 95,95 5,95" style="animation-delay: 3s; animation-duration: 8s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="2000">
                            <polygon class="recta" id="small" points="50,20 95,95 5,95" style="animation-delay: 0s; animation-duration: 18s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1600">
                            <polygon class="recta" points="50,20 95,95 5,95" style="animation-delay: 7s; animation-delay: 15s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" id="small" points="50,20 95,95 5,95"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" points="50,20 95,95 5,95" style="animation-delay: 2s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" id="small" points="50,20 95,95 5,95" style="animation-delay: 5s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" points="50,20 95,95 5,95" style="animation-delay: 10s; animation-duration: 30s;"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" points="50,20 95,95 5,95" style="animation-delay: 1s; animation-duration: 40s"/>
                        </svg>
                    </li>
                    <li class="triangulos">
                        <svg width="300" height="1800">
                            <polygon class="recta" id="small" points="50,20 95,95 5,95" style="animation-delay: 0s; animation-duration: 12s"/>
                        </svg>
                    </li>
                </ul>
            </div>

            <div class="containerTitulo">
                <ul style="list-style: none;">
                    <li class="bordeSuperior"></li>
                    <li><span class="titulo">Iniciar sesión</span></li>
                    <li class="bordeInferior"></li>
                </ul>
            </div>

            <div class="containerImage">
                <div class="slider">
                    <div class="personajes">
                        <ul>
                            <li style="background-image: url('imgs/creed.png');"></li>
                            <li style="background-image: url('imgs/link.png');"></li>
                            <li style="background-image: url('imgs/marco.gif');"></li>
                            <li style="background-image: url('imgs/chief.png');"></li>
                            <li style="background-image: url('imgs/geralt.png');"></li>
                            <li style="background-image: url('imgs/arthur.png');"></li>
                            <li style="background-image: url('imgs/bigDaddy.png');"></li>
                            <li style="background-image: url('imgs/bo3.png');"></li>
                            <li style="background-image: url('imgs/nier.png');"></li>
                            <li style="background-image: url('imgs/elden.webp');"></li>
                            <li style="background-image: url('imgs/crash.png');"></li>
                            <li style="background-image: url('imgs/lara.png');"></li>
                            <li style="background-image: url('imgs/mario.png');"></li>
                            <li style="background-image: url('imgs/ryu.webp');"></li>
                            <li style="background-image: url('imgs/solidSnake.webp');"></li>
                            <li style="background-image: url('imgs/scorpion.png');"></li>
                            <li style="background-image: url('imgs/persona5.png');"></li>
                            <li style="background-image: url('imgs/kratos.png');"></li>
                            <li style="background-image: url('imgs/joel.png');"></li>
                            <li style="background-image: url('imgs/claptrap.png');"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container-form">

                <form class="container-labels" action="SvRegistrarUsuario" method="GET">

                    <div class="container-form-child">
                        <h2 class="indx"><label>Usuario/Email</label><br>
                        <input autofocus type="text" id="userEmail" name="userEmail" 
                               value="<%= (request.getParameter("userEmail") != null) ? request.getParameter("userEmail") : "" %>"></h2>
                        <br><span id="advertenciaUserEmail" class="advertencia" style="display: none;">Nombre de usuario o email no registrado</span>
                    </div>
    
                    <div class="container-form-child">
                        <h2 class="indx"><label>Contraseña</label><br><input type="password" id="password" name="password"></h2>
                        <br><span id="advertenciaPassword" class="advertencia" style="display: none;">Contraseña incorrecta</span>
                    </div>
                    
                    <span id="advertencia" class="advertencia" style="display: none;">Alguno de los campos está vacío. Debe rellenar todos.</span>
    
                    <!-- EL BOTÓN DE INICIO SESIÓN DEBE REDIRIGIRTE A LA PÁGINA PRINCIPAL CUANDO HAYAS INGRESADO TUS DATOS -->
                    <!-- SI NO, DEBE PERMANECER EN LA PÁGINA DE INICIO SESIÓN -->
                    <div class="contenedor-botones">
                        <div class="botones">
                            <button class="boton seis" onclick="guardarUserEmail()">
                                <span>Iniciar sesión</span>
                                <svg>
                                <rect x="0" y="0" fill="none"></rect>
                                </svg>
                            </button>
                        </div>
                        <img src="imgs/fallout-okay.png" alt="fallout-okay">
                    </div>

                </form>
                
            </div>

            <span class="link-box">
                <a href="registrocuenta.jsp"><p>Registrate aquí si no tienes una cuenta</p></a>
            </span>
        </div>
        
        <%
            Boolean campoVacio = (Boolean) request.getAttribute("campoVacio");
            if (campoVacio != null && campoVacio) {
        %>
        <script>
            document.getElementById("advertencia").style.display = "inline";
        </script>
        <%
            }
        %>
        
        <%
            Boolean userEmailNotExist = (Boolean) request.getAttribute("userEmailNotExist");
            if (userEmailNotExist != null && userEmailNotExist) {
        %>
        <script>
            document.getElementById("advertenciaUserEmail").style.display = "inline";
        </script>
        <%
            }
        %>
        
        <%
            Boolean passwordWrong = (Boolean) request.getAttribute("passwordWrong");
            if (passwordWrong != null && passwordWrong) {
        %>
        <script>
            document.getElementById("advertenciaPassword").style.display = "inline";
        </script>
        <%
            }
        %>
        <script>
            fetch('http://localhost:8080/GameStore/SvRegistrarUsuario', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => {
                if (response.ok) {
                    // Extraer el token de la respuesta
                    return response.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => {
                // Almacenar el token en el almacenamiento local
                localStorage.setItem('token', data.token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        </script>
        <script>
            // Función para guardar el userEmail en el localStorage
            function guardarUserEmail() {
                var userEmailInput = document.getElementById("userEmail");
                var userEmail = userEmailInput.value;
                localStorage.setItem("userEmail", userEmail);
                console.log(userEmail);
            }
        </script>
    </body>
    <footer>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="../RegistroUsuario/registrocuenta.html">¡Crea una cuenta ahora!</a>
                </li>
                <li>
                    <a href="../CarritoDeCompras/index.html">Ver videojuegos</a>
                </li>
            </ol>
        </div>

        <div class="container-footer">
            <ol>
                <li>
                    <a href="../CarritoDeCompras/carrito.html">Revisa tu carrito</a>
                </li>
                <li>
                    <a href="../CarritoDeCompras/index.html">Ver consolas</a>
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
                        <img src="RRSS/LogoFacebook.png" class="fb">
                        <p>Facebook</p>
                    </a>
                </span>

                <span class="instagram">
                    <a href="#">
                        <img src="RRSS/LogoInstagram.png" class="ig">
                        <p>Instagram</p>
                    </a>
                </span>

                <span class="x">
                    <a href="#">
                        <img src="RRSS/LogoX.png" class="x-twitter">
                        <p>X</p>
                    </a>
                </span>

            </div>

        </div>

    </footer>
</html>