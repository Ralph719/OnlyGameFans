var userEmail = localStorage.getItem("userEmail");
if(userEmail) {
    console.log('Carrito del usuario: ', userEmail);
}

// Crear una función para hacer la solicitud AJAX
function obtenerArticulosEnCarrito() {
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('GET', `SvCarrito?userEmail=${userEmail}`, true);

    // Configurar la función de callback para cuando la solicitud esté completa
    xhr.onload = function() {
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

// Llamar a la función para obtener los artículos en el carrito
obtenerArticulosEnCarrito();

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
                    <p>${(articulo.precio * articulo.cantidad).toFixed(2)} €</p>
                </div>
                <button class="eliminarProducto" id="${articulo.idArticulo}">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            `;
            contenedorArticulos.append(div);
        });

    } else {
        carritoVacio.classList.remove("disabled");
        contenedorArticulos.classList.add("disabled");
        contenedorAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }

    //actualizarBotonesEliminar();
    //actualizarTotal();
}