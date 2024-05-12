$(document).ready(function() {
    let datosArticulos;

    $.ajax({
        url: 'SvArticulos',
        type: 'GET',
        dataType: 'json', // Datos esperados del servidor
        success: function(data) {
            // La función se ejecuta cuando la solicitud es exitosa
            datosArticulos = data;
            console.log('Tipo de datos recibidos:', typeof datosArticulos);
            console.log('Datos recibidos:', datosArticulos);
            cargarArticulos(datosArticulos);

            // CON ESTE BUCLE PODREMOS MOSTRAR LOS ARTÍCULOS DE CADA CATEGORÍA SELECCIONADA
            categorias.forEach(categoria => {
                categoria.addEventListener("click", (e) => {
                    console.log('Click en la categoría:', e.currentTarget.id);
                    categorias.forEach(categoria => categoria.classList.remove("active"));
                    e.currentTarget.classList.add("active");

                    const categoriaSeleccionada = e.currentTarget.id;

                    // Filtrar los artículos según la categoría seleccionada
                    const articulosFiltrados = datosArticulos[categoriaSeleccionada];

                    if (categoriaSeleccionada !== "todos") {
                        console.log('Artículos filtrados:', articulosFiltrados);
                        // Actualizar el título de la página
                        titulo.innerText = categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1);

                        // Vaciar el contenedor de artículos antes de cargar los nuevos artículos filtrados
                        contenedorArticulos.innerHTML = "";

                        // Cargar los artículos de la categoría seleccionada
                        cargarArticulos({ [categoriaSeleccionada]: articulosFiltrados });
                    } else {
                        // Si la categoría seleccionada es "todos", mostrar todos los productos
                        console.log('Mostrar todos los productos');
                        titulo.innerText = "Todos los productos";
                        cargarArticulos(datosArticulos);
                    }
                });
            });
        },
        error: function(xhr, status, error) {
            // Esta función se ejecuta cuando hay un error en la solicitud
            console.error('Error en la solicitud:', status, error);
        }
    });
});

// VARIABLES
const contenedorArticulos = document.querySelector("#containerProductos");
const categorias = document.querySelectorAll(".botonCategoria");
const titulo = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".agregarProducto");
const carritoCantidad = document.querySelector("#carritoCantidad");


// FUNCIÓN PARA CARGAR LOS ARTICULOS EN LA PÁGINA
function cargarArticulos(articulosElegidos) {
    // PRIMERO SE VACÍA EL CONTENIDO
    contenedorArticulos.innerHTML = "";

    // Verificar si hay artículos de videojuegos
    if (articulosElegidos.videojuegos && articulosElegidos.videojuegos.length > 0) {
        // Iterar sobre los videojuegos y agregarlos
        articulosElegidos.videojuegos.forEach(articulo => {
            agregarArticulo(articulo);
        });
    }

    // Verificar si hay artículos de consolas
    if (articulosElegidos.consolas && articulosElegidos.consolas.length > 0) {
        articulosElegidos.consolas.forEach(articulo => {
            agregarArticulo(articulo);
        });
    }

    actualizarBotonesAgregar();
}

function agregarArticulo(articulo) {
    
    let plataforma;
    
    if(articulo.plataforma) {
        plataforma = articulo.plataforma;
    } else {
        plataforma = articulo.tipo;
    }
    
    const div = document.createElement("div");
    div.classList.add("producto", "enabled");
    div.innerHTML = `
        <form class="articulo" action="SvArticulos" method="POST">
            <img src="img${articulo.categoria}/${articulo.idArticulo}.png" alt="${articulo.nombre}">
            <div class="detalles">
                <h3 class="nombreProducto" id="nombreProducto">${articulo.nombre}</h3>
                <small class="tipoProducto" id="tipoProducto">${plataforma}</small>
                <p class="precioProducto" id="precioProducto">${articulo.precio} €</p>
                <button class="agregarProducto" id="${articulo.idArticulo}" onclick="enviarUserEmail(this)">Agregar</button>
                <input type="hidden" id="idProducto" name="idProducto" value="${articulo.idArticulo}"></input>
            </div>
        </form>
    `;
    // AÑADIMOS CADA ARTÍCULO
    contenedorArticulos.append(div);
}

function obtenerDatosArticulos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Manejar la respuesta recibida del servidor
            var datos = JSON.parse(this.responseText);
            cargarArticulos(datos);
        }
    };
    xhttp.open("GET", "SvArticulos", true);
    xhttp.send();
}

function enviarDatos() {
    var id = document.getElementById("idProducto").innerText;
    var nombre = document.getElementById("nombreProducto").innerText;
    var precio = document.getElementById("precioProducto").innerText;
    
    var datosProducto = {
        id: id,
        nombre: nombre,
        precio: precio
    };
    
    var datosJSON = JSON.stringify(datosProducto);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Datos enviados correctamente al servlet");
        }
    };
    
    xhttp.open("POST", "SvArticulos", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(datosJSON);
}

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".agregarProducto");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// ESTRUCTURA PARA ALMACENAR LOS ARTÍCULOS EN EL CARRITO
let articulosEnCarrito;
// RECUPERAMOS LA INFORMACIÓN DEL localStorage
let articulosEnCarritoLS = localStorage.getItem("articulos-en-carrito");
// VERIFICAMOS SI YA EXISTEN ARTÍCULOS EN EL CARRITO
if (articulosEnCarritoLS) {
    articulosEnCarrito = JSON.parse(articulosEnCarritoLS);
    actualizarCantidadCarrito();
} else {
    articulosEnCarrito = [];
}
console.log(articulosEnCarrito);

// CREAMOS LA VENTANA EMERGENTE Y EL BOTÓN DE CERRAR
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

// ABRIR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN EL BOTÓN
function mostrarModal() {
  modal.style.display = "block";
}

// CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN LA X
span.onclick = function() {
  modal.style.display = "none";
}

// CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK FUERA DE LA VENTANA EMERGENTE
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const articuloAgregado = articulos.find(articulo => articulo.id_articulo === idBoton);
    
    // Verificar si el artículo seleccionado ya ha sido agregado al carrito antes
    if(articulosEnCarrito.some(articulo => articulo.id_articulo === idBoton)) {
        const index = articulosEnCarrito.findIndex(articulo => articulo.id_articulo === idBoton);
        articulosEnCarrito[index].cantidad++;
    } else {
        // Agregar el nuevo artículo al carrito
        articuloAgregado.cantidad = 1;
        articulosEnCarrito.push(articuloAgregado);
    }
    actualizarCantidadCarrito();

    // Guardar los artículos agregados al carrito en el almacenamiento local del navegador
    localStorage.setItem("articulos-en-carrito", JSON.stringify(articulosEnCarrito));
    
    // Mostrar la ventana emergente
    mostrarModal();
}

function actualizarCantidadCarrito() {
    let nuevaCantidad = articulosEnCarrito.reduce((acc, articulo) => acc + articulo.cantidad, 0);
    carritoCantidad.innerText = nuevaCantidad;
}