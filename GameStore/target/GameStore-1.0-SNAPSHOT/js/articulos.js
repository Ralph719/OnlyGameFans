$(document).ready(function () {
    let datosArticulos;

    $.ajax({
        url: 'SvArticulos',
        type: 'GET',
        dataType: 'json', // Datos esperados del servlet
        success: function (data) {
            datosArticulos = data;
            console.log('Tipo de datos recibidos:', typeof datosArticulos);
            console.log('Datos recibidos:', datosArticulos);
            cargarArticulos(datosArticulos);

            // Variables dentro de la solicitud AJAX
            const categorias = document.querySelectorAll(".botonCategoria");
            const titulo = document.querySelector("#tituloPrincipal");

            // Filtrar y cargar artículos por categoría
            categorias.forEach(categoria => {
                categoria.addEventListener("click", (e) => {
                    console.log('Click en la categoría:', e.currentTarget.id);
                    categorias.forEach(categoria => categoria.classList.remove("active"));
                    e.currentTarget.classList.add("active");

                    const categoriaSeleccionada = e.currentTarget.id;
                    const articulosFiltrados = datosArticulos[categoriaSeleccionada];

                    if (categoriaSeleccionada !== "todos") {
                        //console.log('Artículos filtrados:', articulosFiltrados);
                        titulo.innerText = categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1);
                        contenedorArticulos.innerHTML = "";
                        cargarArticulos({[categoriaSeleccionada]: articulosFiltrados});
                    } else {
                        //console.log('Mostrar todos los productos');
                        titulo.innerText = "Todos los productos";
                        cargarArticulos(datosArticulos);
                    }
                });
            });
        },
        error: function (xhr, status, error) {
            console.error('Error en la solicitud:', status, error);
        }
    });

    // Evento para manejar la respuesta del servlet luego de agregar un artículo al carrito
    $(document).on('submit', '.articulo', function (event) {
        event.preventDefault(); // Evitamos el envío del formulario

        const form = $(this);
        const formData = form.serialize();

        $.ajax({
            type: 'POST',
            url: 'SvArticulos',
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status === 'success') {
                    // Acción para cuando se agrega el artículo correctamente
                    mostrarModal();
                } else {
                    // Acción en caso de un error
                    alert('Error al agregar el artículo: ' + data.message);
                }
            },
            error: function () {
                alert('Ocurrió un error al procesar la solicitud.');
            }
        });
    });

    const contenedorArticulos = document.querySelector("#containerProductos");

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
    }

    function agregarArticulo(articulo) {
        let userEmail = localStorage.getItem("userEmail");

        let plataforma;
        if (articulo.plataforma) {
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
                    <button class="agregarProducto" id="${articulo.idArticulo}">Agregar</button>
                    <input type="hidden" id="idProducto" name="idProducto" value="${articulo.idArticulo}"></input>
                    <input type="hidden" id="userEmail" name="userEmail" value="${userEmail}">
                </div>
            </form>
        `;
        // Agregamos cada artículo al contenedor de estos en la página
        contenedorArticulos.append(div);
    }

    function obtenerDatosArticulos() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Manejar la respuesta recibida del servidor
                var datos = JSON.parse(this.responseText);
                cargarArticulos(datos);
            }
        };
        xhttp.open("GET", "SvArticulos", true);
        xhttp.send();
    }

    // CREAMOS LA VENTANA EMERGENTE Y EL BOTÓN DE CERRAR
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    // ABRIR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN EL BOTÓN
    function mostrarModal() {
        modal.style.display = "block";
    }

    // CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN LA X
    span.onclick = function () {
        modal.style.display = "none";
    };

    // CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK FUERA DE LA VENTANA EMERGENTE
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});