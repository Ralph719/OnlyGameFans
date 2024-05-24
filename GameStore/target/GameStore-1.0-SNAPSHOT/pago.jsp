<%-- 
    Document   : pago
    Created on : 22 may. 2024, 20:31:57
    Author     : steph
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Método de pago | OnlyGameFans.com</title>
        <link href="https://fonts.googleapis.com/css?family=Lato|Liu+Jian+Mao+Cao&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/pago.css">
        <link rel="shortcut icon" href="Logos/LogoFinal.png">
    </head>
    <body>
        
        <div id="fondo-borroso">
            <div class="eligeOpcion" id="choosePayment">
                <div class="contenido">
                    <label>
                        <h1>Elige tu método de pago:</h1> <br>
                    </label>
                    <div class="inputs">
                        <input type="radio" name="formaPago" class="input" id="visa"><p>Visa</p> 
                        <input type="radio" name="formaPago" class="input" id="mastercard"><p>Mastercard</p>
                    </div>
                    <div class="content-buttons"><a href="#" id="close-button">Aceptar</a></div>
                </div>
            </div>
        </div>

        <div class="contenedor">

            <!-- Tarjeta -->
            <div class="dobleTarjeta">
                <section class="tarjeta" id="tarjeta">
                    <div class="delantera">
                        <div class="logo-marca" id="logo-marca">
                            <img id="imgVisa" src="imgs/visa.jpeg" alt="" style="display: none;"> <!-- IMÁGEN DE LA TARJETA QUE ELIJAS --> 
                            <img id="imgMastercard" src="imgs/mastercard.png" alt="" style="display: none;">
                        </div>
                        <img src="imgs/chip-tarjeta.png" class="chip" alt="">
                        <div class="datos">
                            <div class="grupo" id="numero">
                                <p class="label">Número Tarjeta</p>
                                <p class="numero">#### #### #### ####</p>
                            </div>
                            <div class="flexbox">
                                <div class="grupo" id="nombre">
                                    <p class="label">Nombre Tarjeta</p>
                                    <p class="nombre">**** ****</p>
                                </div>
        
                                <div class="grupo" id="expiracion">
                                    <p class="label">Expiracion</p>
                                    <p class="expiracion"><span class="mes">MM</span> / <span class="year">AA</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </section>

                <section class="tarjeta" id="tarjeta">
                    <div class="trasera">
                        <span class="magnetica"></span>
                        <div class="datos">
                            <div class="grupo" id="firma">
                                <p class="label">Firma</p>
                                <div class="firma"><p></p></div>
                            </div>
                            <div class="grupo" id="ccv">
                                <p class="label">CCV</p>
                                <p class="ccv"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Formulario -->
            <form action="SvPedidos" method="POST" id="formulario-tarjeta" class="formulario-tarjeta">
                <div class="grupo">
                    <label for="inputNumero">Número Tarjeta</label>
                    <input type="text" id="inputNumero" name="numero" maxlength="19" autocomplete="off">
                </div>
                <div class="grupo">
                    <label for="inputNombre">Nombre</label>
                    <input type="text" id="inputNombre" name="nombre" maxlength="19" autocomplete="off">
                </div>
                <div class="flexbox">
                    <div class="grupo expira">
                        <label for="selectMes">Expiración</label>
                        <div class="flexbox">
                            <div class="grupo-select">
                                <select name="mes" id="selectMes">
                                    <option disabled selected>Mes</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                            <div class="grupo-select">
                                <select name="year" id="selectYear">
                                    <option disabled selected>Año</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>

                    <div class="grupo ccv">
                        <label for="inputCCV">CCV</label>
                        <input type="text" id="inputCCV" name="cvv" maxlength="3">
                    </div>
                </div>
                <span id="advertencia" class="advertencia" style="display: none;">Debe rellenar todos los campos</span>
                <button class="btn-enviar">Continuar a resumen de compra</button>
            </form>
        </div>
        <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
        <script src="js/pago1.js"></script>
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