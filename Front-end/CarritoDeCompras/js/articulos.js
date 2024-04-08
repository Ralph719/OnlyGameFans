// ARRAY CON TODOS LOS ARTÍCULOS
const articulos = [
    // JUEGOS
    {
        id_articulo: "0001",
        nombre: "The Witcher 3",
        imagen: "imgJuegos/theWitcher3PS4.jpg",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "CD Projekt Red",
            genero: "Fantasía",
            plataforma: "PlayStation 4",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0002",
        nombre: "Returnal",
        imagen: "imgJuegos/returnalPS5.jpg",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Housemarque",
            genero: "Suspenso",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0003",
        nombre: "Elden Ring",
        imagen: "imgJuegos/eldenRingPS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Bandai Namco",
            genero: "De rol",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0004",
        nombre: "Assassin's Creed Valhalla",
        imagen: "imgJuegos/acValhallaPS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Ubisoft",
            genero: "Acción",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0005",
        nombre: "Crash Bandicoot 4",
        imagen: "imgJuegos/crash4PS4.jpg",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Activision",
            genero: "Aventuras",
            plataforma: "PlayStation 4",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0006",
        nombre: "Super Mario Wonder",
        imagen: "imgJuegos/marioWonder.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Aventuras",
            plataforma: "Nintendo Switch",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0007",
        nombre: "Overcooked 2",
        imagen: "imgJuegos/overcooked2Nintendo.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Cocina",
            plataforma: "Nintendo Switch",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0008",
        nombre: "Persona 5",
        imagen: "imgJuegos/persona5PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Atlus",
            genero: "De rol",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0009",
        nombre: "Spiderman 2",
        imagen: "imgJuegos/spiderman2PS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Insomniac",
            genero: "Acción",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0010",
        nombre: "Mortal Kombat 1",
        imagen: "imgJuegos/mortalKombat1PS5.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "NetherRealm",
            genero: "Lucha",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0011",
        nombre: "Ark Ascended",
        imagen: "imgJuegos/arkAscendedPS5.png",
        precio: 44.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Studio Wildcard",
            genero: "Acción",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0012",
        nombre: "Splatoon 3",
        imagen: "imgJuegos/splatoon3Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Disparos",
            plataforma: "Nintendo Switch"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0013",
        nombre: "Final Fantasy VII Rebirth",
        imagen: "imgJuegos/ffviiRebirth(1).png",
        precio: 79.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Square Enix",
            genero: "Lucha, RPG, Aventura",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },



    // CONSOLAS
    {
        id_articulo: "00100",
        nombre: "PlayStation 5",
        imagen: "imgConsolas/PS5.png",
        precio: 499.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Sony",
            plataforma: "Sobremesa",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "00200",
        nombre: "Nintendo Switch Oled",
        imagen: "imgConsolas/Nintendo-Switch-Oled.png",
        precio: 399.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Nintendo",
            plataforma: "Sobremesa",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "00300",
        nombre: "Xbox Series X",
        imagen: "imgConsolas/Xbox-Series-X.png",
        precio: 499.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Microsoft",
            plataforma: "Sobremesa",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "00400",
        nombre: "Asus Rog Ally",
        imagen: "imgConsolas/Asus-Rog-Ally.png",
        precio: 559.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Asus",
            plataforma: "Portatil",
        },
        disponibilidad: true,
    },

    /*{
        id_articulo: "00500",
        nombre: "PlayStation 4 Slim",
        imagen: "imgConsolas/ps4_slim.png",
        precio: 229.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Sony",
            plataforma: "Sobremesa",
        },
        disponibilidad: true,
    }*/

]


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
    
    // RECORREMOS EL ARRAY PARA MOSTRAR CADA ARTÍCULO CON SU RESPECTIVA INFORMACIÓN
    articulosElegidos.forEach(articulo => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${articulo.imagen}" alt="${articulo.nombre}">
            <div class="detalles">
                <h3 class="nombreProducto">${articulo.nombre}</h3>
                <small class="tipoProducto">${articulo.categoria.plataforma}</small>
                <p class="precioProducto">${articulo.precio} €</p>
                <button class="agregarProducto" id="${articulo.id_articulo}">Agregar</button>
            </div>
        `;

        // AÑADIMOS CADA ARTÍCULO
        contenedorArticulos.append(div);
    })
    
    actualizarBotonesAgregar();
}

cargarArticulos(articulos);

// CON ESTE BUCLE PODREMOS MOSTRAR LOS ARTÍCULOS DE CADA CATEGORÍA SELECCIONADA
categorias.forEach(categoria => {

    categoria.addEventListener("click", (e) => {

        categorias.forEach(categoria => categoria.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // VERIFICA SI LA CATEGORÍA SELECCIONADA ES DIFERENTE A 'todos'
        if(e.currentTarget.id != "todos") {
            // SELECCIONARÁ SÓLO LOS ARTÍCULOS QUE COINCIDAN CON EL ID DE LA CATEGORÍA SELECCIONADA
            const tituloCategoria = articulos.find(articulo => articulo.categoria.id_categoria === e.currentTarget.id);
            titulo.innerText = tituloCategoria.categoria.id_categoria;

            const categoriaElegida = articulos.filter(articulo => articulo.categoria.id_categoria === e.currentTarget.id);
            cargarArticulos(categoriaElegida);
        } else {
            // SI ES IGUAL A 'todos' MOSTRARÁ TODOS LOS ARTICULOS
            titulo.innerText = "Todos los productos";
            cargarArticulos(articulos);
        }

    })
});

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

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const articuloAgregado = articulos.find(articulo => articulo.id_articulo === idBoton);
    
    // VERIFICAMOS SI EL ARTÍCULO SELECCIONADO YA HA SIDO AGREGADO AL CARRITO ANTES
    if(articulosEnCarrito.some(articulo => articulo.id_articulo === idBoton)) {
        const index = articulosEnCarrito.findIndex(articulo => articulo.id_articulo === idBoton);
        articulosEnCarrito[index].cantidad++;
    } else {
    // AGREGAMOS EL NUEVO ARTÍCULO AL CARRITO
        articuloAgregado.cantidad = 1;
        articulosEnCarrito.push(articuloAgregado);
    }
    actualizarCantidadCarrito();

    // GUARDAMOS LOS ARTÍCULOS AGREGADOS AL CARRITO EN EL ALMACENAMIENTO LOCAL DEL NAVEGADOR
    localStorage.setItem("articulos-en-carrito", JSON.stringify(articulosEnCarrito));
}

function actualizarCantidadCarrito() {
    let nuevaCantidad = articulosEnCarrito.reduce((acc, articulo) => acc + articulo.cantidad, 0);
    carritoCantidad.innerText = nuevaCantidad;
}