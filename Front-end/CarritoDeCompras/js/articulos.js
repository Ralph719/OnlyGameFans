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
            genero: "Suspenso",
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
        precio: 59.99,
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
            desarrollador: "Nintendo",
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
        disponibilidad: true,
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
            desarrollador: "Milestone S.r.l",
            genero: "Carreras",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },
    

    {
        id_articulo: "0016",
        nombre: "Gran Turismo 7",
        imagen: "imgJuegos/GranTurismo7_PS5.png",
        precio: 58.90,
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
        nombre: "Rise of the Ronin",
        imagen: "imgJuegosTransformarAPNG/RiseRonin_PS5.webp",
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
        imagen: "imgJuegosTransformarAPNG/HogwartsLegacy_PS5.jpg",
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
        imagen: "imgJuegosTransformarAPNG/UnravelTwo_Nintendo.webp",
        precio: 39.90,
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
        imagen: "imgJuegosTransformarAPNG/MarioKartDeluxe8_Nintendo.webp",
        precio: 49.90,
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
        imagen: "imgJuegosTransformarAPNG/TheCrewMotorfest_PS5.jpg",
        precio: 35.90,
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
        nombre: "Cyberpunk",
        imagen: "imgJuegosTransformarAPNG/Cyberpunk_PS5.jpg",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "CD Projekt",
            genero: "Accion",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0024",
        nombre: "Pokemon Purpura",
        imagen: "imgJuegosTransformarAPNG/PokemonPurpura_Nintendo.webp",
        precio: 49.90,
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
        imagen: "imgJuegosTransformarAPNG/PokemonEscarlata_Nintendo.webp",
        precio: 49.90,
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
        imagen: "imgJuegosTransformarAPNG/",
        precio: 49.90,
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
        imagen: "imgJuegosTransformarAPNG/Mario3DWorldsBF_Nintendo.webp",
        precio: 49.90,
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
        nombre: "POR DEFINIR - PS4",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0029",
        nombre: "The Leyend of Zelda : Tears of the Kingdom",
        imagen: "imgJuegosTransformarAPNG/LeyendOfZelda.TOTK_Nintendo.jpg",
        precio: 49.90,
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
        nombre: "Super Mario Odyssey ",
        imagen: "imgJuegosTransformarAPNG/SuperMarioOdyssey.png",
        precio: 49.90,
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
        imagen: "imgJuegosTransformarAPNG/MarioStrikersBattleLeagueFootball_Nintendo.jpg",
        precio: 49.90,
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
        nombre: "POR DEFINIR - PS4",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0033",
        nombre: "POR DEFINIR - PS4",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0034",
        nombre: "God of War Ragnarok",
        imagen: "imgJuegosTransformarAPNG/GOWRagnarok_PS5.webp",
        precio: 69.99,
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
        imagen: "imgJuegosTransformarAPNG/",
        precio: 49.90,
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
        nombre: "POR DEFINIR - PS4/PS5",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4/5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0037",
        nombre: "Kirby y la tierra olvidada",
        imagen: "imgJuegosTransformarAPNG/KirbyTO_Nintendo.jpg",
        precio: 49.90,
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
        nombre: "Hogwarts Lecacy",
        imagen: "imgJuegosTransformarAPNG/HogwartsLegacy_Nintendo.jpg",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Avalanche Software",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0039",
        nombre: "Animal Crossing : New Horizons",
        imagen: "imgJuegosTransformarAPNG/AnimalCrossing.NH_Nintendo.png",
        precio: 49.90,
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
        nombre: "POR DEFINIR - PS4",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0041",
        nombre: "POR DEFINIR - PS4",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0042",
        nombre: "Resident Evil 4 Remake",
        imagen: "imgJuegosTransformarAPNG/ResidentEvil4Remake_PS5.jpg",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Capcom",
            genero: "Terror",
            plataforma: "PlayStation 5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0043",
        nombre: "POR DEFINIR - PS4/PS5",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4/5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0044",
        nombre: "Gang Beasts",
        imagen: "imgJuegosTransformarAPNG/GangBeasts_Nintendo.jpg",
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
        id_articulo: "0044",
        nombre: "POR DEFINIR - PS4/PS5",
        imagen: "imgJuegos/GranTurismo7_PS4.png",
        precio: 49.90,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Polyphony Digital",
            genero: "Aventuras",
            plataforma: "PlayStation 4/5"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0044",
        nombre: "It takes two",
        imagen: "imgJuegosTransformarAPNG/ItTakesTwo_Nintendo.jpg",
        precio: 32.50,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Hazelight Studios",
            genero: "Aventuras",
            plataforma: "Nintendo"
        },
        disponibilidad: true,
    },

    {
        id_articulo: "0044",
        nombre: "Final Fantasy XVI",
        imagen: "imgJuegosTransformarAPNG/FFVXI_PS5.png",
        precio: 69.99,
        categoria: {
            id_categoria: "juegos",
            desarrollador: "Square Enix",
            genero: "RPG",
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
            fabricante: "ValveCorporation",
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