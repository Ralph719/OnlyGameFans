function obtenerArticulosEnCarrito(userEmail) {
    var xhr = new XMLHttpRequest();

    // Configuración de la solicitud
    xhr.open('GET', `SvCarrito?userEmail=${userEmail}`, true);

    // Configuración de la función de callback para cuando la solicitud esté completa
    xhr.onload = function() {
        console.log('Respuesta recibida del servidor');
        if (xhr.status >= 200 && xhr.status < 300) {
            // Respuesta JSON
            var articulosEnCarrito = JSON.parse(xhr.responseText);

            console.log('Tipos de datos recibidos: ', typeof articulosEnCarrito);
            console.log('Artículos en carrito: ', articulosEnCarrito);

            cargarArticulosCarrito(articulosEnCarrito);
        } else {
            console.error('Hubo un error al realizar la solicitud:', xhr.status, xhr.statusText);
        }
    };

    // Enviar la solicitud
    xhr.send();
}


var userEmail = localStorage.getItem("userEmail");
if (userEmail) {
    console.log('Carrito del usuario: ', userEmail);
    obtenerArticulosEnCarrito(userEmail);
}

// VARIABLES
const carritoVacio = document.querySelector("#carritoVacio");
const contenedorArticulos = document.querySelector("#carritoProductos");
const contenedorAcciones = document.querySelector("#accionesCarrito");
const carritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".eliminarProducto");
const botonVaciar = document.querySelector("#vaciarCarrito");
const botonComprar = document.querySelector("#comprarCarrito");
const precioTotal = document.querySelector("#total");

// CARGA LOS ARTÍCULOS QUE HAN SIDO AGREGADOS AL CARRITO
function cargarArticulosCarrito(articulosEnCarrito) {
    
    // VERIFICA SI EXISTEN ARTÍCULOS EN EL CARRITO
    if (articulosEnCarrito && articulosEnCarrito.length > 0) {

        carritoVacio.classList.add("disabled");
        contenedorArticulos.classList.remove("disabled");
        contenedorAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");

        contenedorArticulos.innerHTML = "";

        // MOSTRAR LOS ARTÍCULOS AGREGADOS AL CARRITO
        articulosEnCarrito.forEach(articulo => {

            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img src="img${articulo.categoria}/${articulo.idArticulo}.png" alt="${articulo.nombre}">
                <div class="nombreProducto">
                    <small>Nombre</small>
                    <h3>${articulo.nombre}</h3>
                </div>
                <div class="cantidadProducto">
                    <small>Cantidad</small>
                    <p>${articulo.cantidad}</p>
                </div>
                <div class="precioProducto">
                    <small>Precio</small>
                    <p>${parseFloat(articulo.precio).toFixed(2)} €</p>
                </div>
                <div class="subtotalProducto">
                    <small>Subtotal</small>
                    <p class="precioSubtotal">${(articulo.precio * articulo.cantidad).toFixed(2)} €</p>
                </div>
                <form action="SvCarrito" method="POST">
                    <button class="eliminarProducto" id="${articulo.idArticulo}" onclick="return eliminarArticulo(this)">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                    <input type="hidden" id="idArticulo" name="idArticulo" value="${articulo.idArticulo}">
                    <input type="hidden" id="userEmail" name="userEmail" value="${userEmail}">
                </form>
            `;
            contenedorArticulos.append(div);
        });

    } else {
        carritoVacio.classList.remove("disabled");
        contenedorArticulos.classList.add("disabled");
        contenedorAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }

    actualizarTotal();
}

function actualizarTotal() {
    let subtotales = document.querySelectorAll(".precioSubtotal");
    let totalCalculado = 0;

    subtotales.forEach(subtotal => {
        totalCalculado += parseFloat(subtotal.innerText.replace("€", ""));
    });

    precioTotal.innerText = `${totalCalculado.toFixed(2)}€`;
}


function eliminarArticulo(button) {
    let idArticulo = button.id;
    let userEmail = document.getElementById("userEmail").value;
    
    if(userEmail) {
        var xhr = new XMLHttpRequest();

        // Configuración de la solicitud POST
        xhr.open('POST', 'SvCarrito', true);
        
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Datos a enviar
        var params = "action=eliminarArticulo&userEmail=" + encodeURIComponent(userEmail) + "&idArticulo=" + encodeURIComponent(idArticulo);
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Artículo eliminado del carrito');
                // Recargar la página
                location.reload();
            } else {
                console.error('Hubo un error al eliminar el artículo del carrito:', xhr.status, xhr.statusText);
            }
        };

        // Enviar la solicitud
        xhr.send(params);
        return false;
    }
    return true;
}