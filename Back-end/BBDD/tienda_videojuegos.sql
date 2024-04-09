 -- Creación de la base de datos
Drop database if exists `tienda_juegos`;
Create database `tienda_juegos` CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Use tienda_juegos;

 -- Se empieza a crear las tablas, antes de crear cada una de ellas se eliminará si ya existe
Drop table if exists usuario;
Create table `usuario` (
	id_usuario int,
    nombre varchar (15) not null,
    apellidos varchar (20),
    edad tinyint (3) default 18,
    direccion varchar(25) not null,
    email varchar (30) not null unique,
    primary key (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into usuario values
	(1, 'Pedro', 'Milian', 25, 'Paseo Independencia 8', 'pedrop@gmail.com'),
    (2, 'Sara', 'Sanchez', 18, 'Avenida Madrid 125', 'saras@gmail.com'),
    (3, 'Alex', 'García', 21, 'Calle Delicas 25', 'alexa@gmail.com'),
    (4, 'Juan', 'Blesa', 35, 'Conde Aranda 2', 'juanj@gmail.com'),
    (5, 'Cristina', 'Pérez', 22, 'Calle Domingo Ram 17', 'cristinac@gmail.com');


Drop table if exists articulo;
Create table `articulo`(
	id_articulo int (10),
    nombre varchar (50) not null,
    precio double (6, 2) not null,
    disponibilidad boolean not null,
    primary key (id_articulo),
    check (precio > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into articulo values
	(1, 'Bioshock Infinite', 25.99, true),
    (2, 'Persona 5', 39.99, false),
    (3, 'Ps4 Pro', 299.99, true),
    (4, 'The Witcher 3', 9.99, true),
    (5, 'Elden Ring', 59.99, true),
    (6, 'Ps5', 399.99, true),
    (7, 'Steam Deck', 349.99, true),
    (8, 'Xbox X', 329.99, true),
    (9, 'Nintendo Switch Oled', 399.99, true),
    (10, 'The Elder Scrolls V: Skyrim', 15.99, true);


Drop table if exists carrito_de_compras;
Create table `carrito_de_compras`(
	codigo_carrito int (10),
    estado varchar (15),
    id_articulo int (10),
    id_usuario int (10),
    Primary key (codigo_carrito),
    Foreign key (id_articulo) references articulo (id_articulo),
    Foreign key (id_usuario) references usuario (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into carrito_de_compras values
	(1, 'Vacío', 3, 1),
    (2, 'Vacío', 2, 2),
    (3, 'Comprado', 4, 1),
    (4, 'En espera', 2, 3),
    (5, 'En espera', 2, 5);


Drop table if exists contiene;
Create table `contiene`(
	id_articulo int (10),
    codigo_carrito int (10),
    Primary key(id_articulo, codigo_carrito),
    Foreign key (id_articulo) references articulo (id_articulo),
    Foreign key (codigo_carrito) references carrito_de_compras (codigo_carrito)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into contiene values
	(1, 2),
    (2, 3),
    (3, 4),
    (4, 5),
    (5, 1);


Drop table if exists pedido;
Create table `pedido`(
	id_pedido int (10),
    pago_total double (7, 2) not null,
    direccion varchar (30) not null,
    fecha_compra date,
    id_usuario int (10),
    codigo_carrito int (10),
    Primary key (id_pedido),
    Foreign key (id_usuario) references usuario(id_usuario),
    Foreign key (codigo_carrito) references carrito_de_compras(codigo_carrito),
    check (pago_total > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into pedido values 
	(1, 299.99, 'Paseo Independencia 8', '2024-04-22', 1, 1),
    (2, 159.97, 'Avenida Madrid 125', '2024-02-12', 2, 1),
    (3, 39.99, 'Avenida Madrid 125', '2024-07-05', 2, 4),
    (4, 15.98, 'Paseo Independencia 8', '2024-07-30', 1, 4),
    (5, 9.99, 'Calle Domingo Ram 17', '2024-05-28', 5, 2);


Drop table if exists consola;
Create table `consola`(
	id_articulo int (10),
    fabricante varchar (15),
    tipo varchar (10),
    primary key (id_articulo),
    Foreign key (id_articulo) references articulo (id_articulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into consola values
	(3, 'Sony', 'Sobremesa'),
    (6, 'Sony', 'Sobremesa'),
    (7, 'Valve', 'Sobremesa'),
    (8, 'Microsoft', 'Sobremesa'),
    (9, 'Nintendo', 'Portatil');


Drop table if exists plataforma;
Create table `plataforma`(
	id_plataforma int (10),
    nombre varchar (15) not null unique,
    Primary key (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into plataforma values
	(1, 'Ps4'),
    (2, 'PC'),
    (3, 'Switch'),
    (4, 'Ps5'),
    (5, 'Xbox X');


Drop table if exists genero;
Create table `genero`(
	id_genero int (10),
    nombre varchar (40) not null unique,
    primary key (id_genero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into genero values
	(1, 'RPG'),
    (2, 'Acción'),
    (3, 'Estrategia'),
    (4, 'Aventura'),
    (5, 'Aventura gráfica');


Drop table if exists juego;
Create table `juego`(
	id_articulo int (10),
    desarrollador varchar (15),
    id_genero int (10),
    id_plataforma int (10),
    primary key (id_articulo),
    foreign key (id_articulo) references articulo(id_articulo),
    foreign key (id_genero) references genero (id_genero),
    foreign key (id_plataforma) references plataforma (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into juego values
	(1, '2K', 2, 2),
    (2, 'Atlus', 1, 2),
    (4, 'CD Project Red', 1, 4),
    (5, 'FromSoftware', 4, 5),
    (10, 'Bethesda', 1, 3);


Drop table if exists pertenece;
Create table `pertenece` (
	id_plataforma int (10),
    id_articulo int (10),
    primary key (id_plataforma, id_articulo),
    foreign key (id_plataforma) references plataforma (id_plataforma),
    foreign key (id_articulo) references juego (id_articulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into pertenece values
	(1, 10),
    (2, 2),
    (3, 1),
    (4, 5),
    (5, 4);

 -- Se crean diferentes índices para realizar busquedas de manera más rápida y eficiente
Create index usuario_index on usuario (direccion, nombre);
Create index articulo_index on articulo (precio, disponibilidad);
Create index pedido_index on pedido (pago_total, direccion);
Create index genero_index on genero (nombre);