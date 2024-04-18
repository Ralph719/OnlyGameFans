<%-- 
    Document   : registrocuenta
    Created on : 13 abr. 2024, 22:18:42
    Author     : steph
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/RegistroCuenta.css">
        <title>Registra una cuenta | Gamestore.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
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
                    <li><span class="titulo">Registrar Usuario</span></li>
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

                <form class="container-labels" action="SvRegistrarUsuario" method="POST">

                    <div class="formularios">
                        <div class="container-form-child" id="container-form-child-izquierda">

                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Nombre completo</label><br><input autofocus type="text" id="name" name="nombreCompleto"></h2>
                            </div>
    
                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Nombre de usuario</label><br><input autofocus type="text" id="username" name="username"></h2>
                            </div>
        
                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Edad</label><br><input autofocus type="text" id="age" name="edad"></h2>
                            </div>
    
                        </div>
        
                        <div class="container-form-child" id="container-form-child-derecha">
        
                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Dirección</label><br><input autofocus type="text" id="address" name="direccion"></h2>
                            </div>
        
                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Correo electrónico</label><br><input autofocus type="text" id="email" name="email"></h2>
                            </div>
                            
                            <div class="container-form-child-nephew">
                                <h2 class="indx"><label>Contraseña</label><br><input type="password" id="password" name="password"></h2>
                                <!--<span class="showpwd">
                                    <input type="checkbox" onclick="mostrarContraseña()">
                                    <label for="contraseñaVisible">Mostrar contraseña</label>
                                </span>-->
                                <!-- AÑADIR ICONO/CHECKBOX PARA VER CONTRASEÑA -->
                            </div>
    
                        </div>
                    </div>

                    <button type="submit" class="boton-seis" id="boton">
                        <span>Crear cuenta</span>
                        <svg>
                            <rect x="0" y="0" fill="none"></rect>
                        </svg>
                    </button>
                </form>
                
            </div>

        </div>
        
        <script src="js/RegistroCuenta.js"></script>

    </body>
    <footer>
        <!-- FUNCIÓN DE ADMINISTRADOR -->
        <div class="verUsuarios">
            <h1>Ver lista de usuarios</h1>
            <form action="SvRegistrarUsuario" method="GET">
                <button type="submit">Mostrar Usuarios</button>
            </form>
        </div>

        <!-- TODO -->

    </footer>
</html>