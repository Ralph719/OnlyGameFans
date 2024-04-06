// RECUPERAMOS LA INFORMACIÓN DEL localStorage
const articulosEnCarrito = JSON.parse(localStorage.getItem("articulos-en-carrito"));

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
function cargarArticulosCarrito() {

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
                <img src="${articulo.imagen}" alt="${articulo.nombre}">
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
                    <p>${articulo.precio} €</p>
                </div>
                <div class="subtotalProducto">
                    <small>Subtotal</small>
                    <p>${articulo.precio * articulo.cantidad} €</p>
                </div>
                <button class="eliminarProducto" id="${articulo.id_articulo}">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            `;
            contenedorArticulos.append(div);
        })

    } else {
        carritoVacio.classList.remove("disabled");
        contenedorArticulos.classList.add("disabled");
        contenedorAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarArticulosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".eliminarProducto");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = articulosEnCarrito.findIndex(articulo => articulo.id_articulo === idBoton);

    articulosEnCarrito.splice(index, 1);
    cargarArticulosCarrito();

    localStorage.setItem("articulos-en-carrito", JSON.stringify(articulosEnCarrito));
}

// EVENTO PARA EL BOTÓN DE VACIAR
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    articulosEnCarrito.length = 0;
    localStorage.setItem("articulos-en-carrito", JSON.stringify(articulosEnCarrito));
    cargarArticulosCarrito();
}

function actualizarTotal() {
    const totalCalculado = articulosEnCarrito.reduce((acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
    precioTotal.innerText = `${totalCalculado} €`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    articulosEnCarrito.length = 0;
    localStorage.setItem("articulos-en-carrito", JSON.stringify(articulosEnCarrito));

    carritoVacio.classList.add("disabled");
    contenedorArticulos.classList.add("disabled");
    contenedorAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
}