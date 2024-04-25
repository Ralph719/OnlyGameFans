// ARRAY CON TODOS LOS ARTÍCULOS
const articulos = [
    // JUEGOS
    {
        id_articulo: "0001",
        nombre: "The Witcher 3",
        imagen: "imgJuegos/theWitcher3_PS4.jpg",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "CD Projekt Red",
            genero: "Fantasia",
            plataforma: "PlayStation 4",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0002",
        nombre: "Returnal",
        imagen: "imgJuegos/returnal_PS5.jpg",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Housemarque",
            genero: "Terror",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0003",
        nombre: "Elden Ring",
        imagen: "imgJuegos/eldenRing_PS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Bandai Namco",
            genero: "Rol",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0004",
        nombre: "Assassin's Creed Valhalla",
        imagen: "imgJuegos/acValhalla_PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Ubisoft",
            genero: "Accion",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0005",
        nombre: "Crash Bandicoot 4",
        imagen: "imgJuegos/crash4_PS4.jpg",
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
        imagen: "imgJuegos/marioWonder_NINTENDO.png",
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
        imagen: "imgJuegos/overcooked2_NINTENDO.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Team 17",
            genero: "Cocina",
            plataforma: "Nintendo Switch",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0008",
        nombre: "Persona 5",
        imagen: "imgJuegos/persona5_PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Atlus",
            genero: "Rol",
            plataforma: "PlayStation 5",
        },
        disponibilidad: false,
    },

    {
        id_articulo: "0009",
        nombre: "Spiderman 2",
        imagen: "imgJuegos/spiderman2_PS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Insomniac",
            genero: "Accion",
            plataforma: "PlayStation 5",
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0010",
        nombre: "Mortal Kombat 1",
        imagen: "imgJuegos/mortalKombat1_PS5.png",
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
        imagen: "imgJuegos/arkAscended_PS5.png",
        precio: 44.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Studio Wildcard",
            genero: "Accion",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0012",
        nombre: "Splatoon 3",
        imagen: "imgJuegos/splatoon3_NINTENDO.png",
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
        nombre: "It Takes Two",
        imagen: "imgJuegos/ItTakesTwo_Nintendo.png",
        precio: 29.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Hazelight Studios",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0014",
        nombre: "Final Fantasy XV",
        imagen: "imgJuegos/ffXV_PS4.png",
        precio: 19.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Square Enix",
            genero: "RPG",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0015",
        nombre: "Ride 5",
        imagen: "imgJuegos/ride5_PS5.png",
        precio: 44.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Milestone",
            genero: "Carreras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },
    

    {
        id_articulo: "0016",
        nombre: "Gran Turismo 7",
        imagen: "imgJuegos/GranTurismo7_PS5.png",
        precio: 54.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Carreras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0017",
        nombre: "Final Fantasy VII Rebirth",
        imagen: "imgJuegos/ffviiRebirth_PS5.png",
        precio: 79.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Square Enix",
            genero: "RPG",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0018",
        nombre: "Rise Of The Ronin",
        imagen: "imgJuegos/RiseRonin_PS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Team Ninja",
            genero: "Aventuras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0019",
        nombre: "Hogwarts Legacy",
        imagen: "imgJuegos/HogwartsLegacy_PS5.png",
        precio: 59.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Avalanche Software",
            genero: "Accion",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0020",
        nombre: "Unravel Two",
        imagen: "imgJuegos/UnravelTwo_Nintendo.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Coldwood Interactive",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0021",
        nombre: "Mario Kart Deluxe 8",
        imagen: "imgJuegos/MarioKartDeluxe8_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Carreras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0022",
        nombre: "The Crew Motorfest",
        imagen: "imgJuegos/TheCrewMotorfest_PS5.png",
        precio: 35.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Ubisoft Ivory Tower",
            genero: "Carreras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0023",
        nombre: "Cyberpunk 2077",
        imagen: "imgJuegos/Cyberpunk_PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "CD Projekt Red",
            genero: "Disparos",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0024",
        nombre: "Pokemon Purpura",
        imagen: "imgJuegos/PokemonPurpura_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Game Freak",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0025",
        nombre: "Pokemon Escarlata",
        imagen: "imgJuegos/PokemonEscarlata_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Game Freak",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0026",
        nombre: "Far Cry 6",
        imagen: "imgJuegos/farCry6PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Ubisoft",
            genero: "Accion",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0027",
        nombre: "Super Mario 3D Worlds + Bowser's Fury",
        imagen: "imgJuegos/Mario3DWorldsBF_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0028",
        nombre: "Borderlands 3",
        imagen: "imgJuegos/borderlands3PS4.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Gearbox Software",
            genero: "Disparos",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0029",
        nombre: "The Leyend Of Zelda: Tears Of The Kingdom",
        imagen: "imgJuegos/LeyendOfZeldaTOTK_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0030",
        nombre: "Super Mario Odyssey",
        imagen: "imgJuegos/SuperMarioOdyssey_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0031",
        nombre: "Mario Strikers Battle League Football",
        imagen: "imgJuegos/MarioStrikersBattleLeagueFootball_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Next Level Games",
            genero: "Deportes",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0032",
        nombre: "Wonderlands Next Level Edition",
        imagen: "imgJuegos/wonderlandsPS5.png",
        precio: 69.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Gearbox Software",
            genero: "Disparos",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0033",
        nombre: "New Tales From The Borderland",
        imagen: "imgJuegos/newTalesPS5.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Gearbox Software",
            genero: "Aventura",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0034",
        nombre: "God of War: Ragnarok",
        imagen: "imgJuegos/GOWRagnarok_PS5.jpg",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "SIE",
            genero: "Aventuras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0035",
        nombre: "Cuphead",
        imagen: "imgJuegos/Cuphead_Nintendo.png",
        precio: 39.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Studio MDHR",
            genero: "Accion",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0036",
        nombre: "Final Fantasy XVI",
        imagen: "imgJuegos/FFXVI_PS5.png",
        precio: 69.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Square Enix",
            genero: "RPG",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0037",
        nombre: "Kirby Y La Tierra Olvidada",
        imagen: "imgJuegos/KirbyTO_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "HAL Laboratory",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0038",
        nombre: "Gang Beasts",
        imagen: "imgJuegos/GangBeasts_Nintendo.png",
        precio: 24.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Lucha",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0039",
        nombre: "Animal Crossing: New Horizons",
        imagen: "imgJuegos/AnimalCrossing.NH_Nintendo.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Nintendo",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0040",
        nombre: "Resident Evil 4 Remake",
        imagen: "imgJuegos/ResidentEvil4Remake_PS5.png",
        precio: 49.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Capcom",
            genero: "Terror",
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
        precio: 459.99,
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

    {
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
    },

    {
        id_articulo: "00600",
        nombre: "Xbox One",
        imagen: "imgConsolas/Xbox_one.png",
        precio: 149.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Microsoft",
            plataforma: "Sobremesa",
        },
        disponibilidad: true,
    }, 

    {
        id_articulo: "00700",
        nombre: "SteamDeck",
        imagen: "imgConsolas/Valve_Steam_Deck.png",
        precio: 519.99,
        categoria: {
            id_categoria: "consolas",
            fabricante: "Valve Corporation",
            plataforma: "Portatil",
        },
        disponibilidad: true,
    },

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
        div.classList.add("producto", "enabled");
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
