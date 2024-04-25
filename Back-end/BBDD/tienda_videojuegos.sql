 -- Creación de la base de datos
Drop database if exists `tienda_videojuegos`;
Create database `tienda_videojuegos` CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Use tienda_videojuegos;

 -- Se empieza a crear las tablas, antes de crear cada una de ellas se eliminará si ya existe
Drop table if exists usuario;
Create table `usuario` (
	id_usuario int auto_increment,
    nombre_completo varchar (40) not null,
    usuario varchar (20) not null unique,
    direccion varchar(25) not null,
    email varchar (30) not null unique,
    contraseña varchar (64) not null,
    primary key (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Insert into usuario (nombre_completo, usuario, direccion, email, contraseña) values
	('Pedro Milian', 'pedroM25', 'Paseo Independencia 8', 'pedrop@gmail.com', 'ee5cd7d5d96c8874117891b2c92a036f96918e66c102bc698ae77542c186f981'),
    ('Sara Sanchez', 'saraS18', 'Avenida Madrid 125', 'saras@gmail.com', '3a6d64c24cf80b69ccda37650406467e8266667b50cfd0b984beb3651b129ed7'),
    ('Alex García', 'alexG21', 'Calle Delicas 25', 'alexa@gmail.com', '4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0'),
    ('Juan Blesa', 'juanB35', 'Conde Aranda 2', 'juanj@gmail.com', 'ed08c290d7e22f7bb324b15cbadce35b0b348564fd2d5f95752388d86d71bcca'),
    ('Cristina Pérez', 'cristinaP22', 'Calle Domingo Ram 17', 'cristinac@gmail.com', '15acfdc75fdb88851487238cd8442c5ecc8e0c31868ce9f52a4e2361ba899f2f');


Drop table if exists articulo;
Create table `articulo`(
	id_articulo int (10) auto_increment,
    nombre varchar (50) not null,
    precio double (6, 2) not null,
    cantidad int(4) not null,
    disponibilidad boolean not null,
    primary key (id_articulo),
    check (precio > 0),
    check (cantidad >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into articulo (nombre, precio, cantidad, disponibilidad) values
	('The Witcher 3', 39.99, 10, true),
    ('Returnal', 59.99, 20, true),
    ('Elden Ring', 59.99, 15, true),
    ('Assassins Creed Valhalla', 49.99, 25, true),
    ('Crash Bandicoot 4', 49.99, 18, true),
    ('Super Mario Wonder', 59.99, 50, true),
    ('Overcooked 2', 39.99, 35, true),
    ('Persona 5', 49.99, 0, false),
    ('Spiderman 2', 59.99, 5, true),
    ('Mortal Kombat 1', 39.99, 25, true),
    ('Ark Ascended', 44.99, 15, true),
    ('Splatoon 3', 49.99, 20, true),
    ('It Takes Two', 29.99, 20, true),
    ('Final Fantasy XV', 19.99, 15, true),
    ('Ride 5', 44.99, 20, true),
    ('Gran Turismo 7', 54.99, 27, true),
    ('Final Fantasy VII Rebirth', 79.99, 30, true),
    ('Rise Of The Ronin', 59.99, 35, true),
    ('Hogwarts Legacy', 59.99, 50, true),
    ('Unravel Two', 39.99, 20, true),
    ('Mario Kart Deluxe 8', 49.99, 80, true),
    ('The Crew Motorfest', 35.99, 30, true),
    ('Cyberpunk 2077', 49.99, 77, true),
    ('Pokemon Purpura', 49.99, 50, true),
    ('Pokemon Escarlata', 49.99, 40, true),
    ('Far Cry 6', 49.99, 60, true),
    ('Super Mario 3D Worlds + Bowsers Fury', 49.99, 50, true),
    ('Borderlands 3', 49.99, 90, true),
    ('The Leyend Of Zelda: Tears Of The Kingdom', 49.99, 40, true),
    ('Super Mario Odyssey', 49.99, 60, true),
    ('Mario Strikers Battle League Football', 49.99, 50, true),
    ('Wonderlands Next Level Edition', 69.99, 60, true),
    ('New Tales From The Borderlands', 39.99, 40, true),
    ('God Of War: Ragnarok', 49.99, 50, true),
    ('Cuphead', 39.99, 30, true),
    ('Final Fantasy XVI', 69.99, 60, true),
    ('Kirby Y La Tierra Olvidada', 49.99, 70, true),
    ('Gang Beasts', 24.99, 20, true),
    ('Animal Crossing: New Horizons', 49.99, 50, true),
    ('Resident Evil 4 Remake', 49.99, 80, true),
    ('PlayStation 5', 499.99, 55, true),
    ('Nintendo Switch Oled', 399.99, 80, true),
    ('Xbox Series X', 459.99, 40, true),
    ('Asus Rog Ally', 559.99, 35, true),
    ('PlayStation 4 Slim', 229.99, 24, true),
    ('Xbox One', 149.99, 10, true),
    ('SteamDeck', 519.99, 30, true);


Drop table if exists carrito_de_compras;
Create table `carrito_de_compras`(
	codigo_carrito int (10) auto_increment,
    estado varchar (15),
    id_articulo int (10),
    id_usuario int (10),
    Primary key (codigo_carrito),
    Foreign key (id_articulo) references articulo (id_articulo),
    Foreign key (id_usuario) references usuario (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into carrito_de_compras (estado, id_articulo, id_usuario) values
	('Vacío', 3, 1),
    ('Vacío', 2, 2),
    ('Comprado', 4, 1),
    ('En espera', 2, 3),
    ('En espera', 2, 5);


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
	id_pedido int (10) auto_increment,
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

Insert into pedido (pago_total, direccion, fecha_compra, id_usuario, codigo_carrito) values 
	(299.99, 'Paseo Independencia 8', '2024-04-15', 1, 1),
    (159.97, 'Avenida Madrid 125', '2024-04-10', 2, 1),
    (39.99, 'Avenida Madrid 125', '2024-04-25', 2, 4),
    (15.98, 'Paseo Independencia 8', '2024-07-30', 1, 4),
    (9.99, 'Calle Domingo Ram 17', '2024-05-28', 5, 2);


Drop table if exists consola;
Create table `consola`(
	id_articulo int (10),
    fabricante varchar (20),
    tipo varchar (10),
    primary key (id_articulo),
    Foreign key (id_articulo) references articulo (id_articulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into consola values
	(41, 'Sony', 'Sobremesa'),
    (42, 'Nintendo', 'Sobremesa'),
    (43, 'Microsoft', 'Sobremesa'),
    (44, 'Asus', 'Portatil'),
    (45, 'Sony', 'Sobremesa'),
    (46, 'Microsoft', 'Sobremesa'),
    (47, 'Valve Corporation', 'Portatil');


Drop table if exists plataforma;
Create table `plataforma`(
	id_plataforma int (10) auto_increment,
    nombre varchar (15) not null unique,
    Primary key (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into plataforma (nombre) values
	('PlayStation 5'),
    ('PlayStation 4'),
    ('Nintendo Switch'),
    ('Xbox Series X'),
    ('PC');


Drop table if exists genero;
Create table `genero`(
	id_genero int (10) auto_increment,
    nombre varchar (40) not null unique,
    primary key (id_genero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into genero (nombre) values
	('Fantasia'),
    ('Terror'),
    ('Rol'),
    ('Accion'),
    ('Aventuras'),
    ('Cocina'),
    ('Lucha'),
    ('Disparos'),
    ('RPG'),
    ('Carreras'),
    ('Deportes');


Drop table if exists juego;
Create table `juego`(
	id_articulo int (10),
    desarrollador varchar (25),
    id_genero int (10),
    id_plataforma int (10),
    primary key (id_articulo),
    foreign key (id_articulo) references articulo(id_articulo),
    foreign key (id_genero) references genero (id_genero),
    foreign key (id_plataforma) references plataforma (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into juego values
	(1, 'CD ProjeKt Red', 1, 2),
    (2, 'Housemarque', 2, 1),
    (3, 'Bandai Namco', 3, 1),
    (4, 'Ubisoft', 4, 1),
    (5, 'Activision', 5, 2),
    (6, 'Nintendo',5 , 3),
    (7, 'Team 17', 6, 2),
    (8, 'Atlus', 3, 1),
    (9, 'Insomniac', 4, 1),
    (10, 'NetherRealm', 7, 1),
    (11, 'Studio Wilcard', 4, 1),
    (12, 'Nintendo', 8, 3),
    (13, 'Hazelight Studios', 5, 3),
    (14, 'Square Enix', 9, 2),
    (15, 'Milestone', 10, 1),
    (16, 'Polyphony Digital', 10, 1),
    (17, 'Square Enix', 9, 1),
    (18, 'Team Ninja', 5, 1),
    (19, 'Avalanche Software', 4, 1),
    (20, 'Coldwood Interactive', 5, 3),
    (21, 'Nintendo', 10, 3),
    (22, 'Ubisoft Ivory Tower', 10, 1),
    (23, 'CD Projeckt Red', 8, 1),
    (24, 'Game Freak', 5, 3),
    (25, 'Game Freak', 5, 3),
    (26, 'Ubisoft', 4, 1),
    (27, 'Nintendo', 5, 3),
    (28, 'Gearbox Software', 8, 1),
    (29, 'Nintendo', 5, 3),
    (30, 'Nintendo', 5, 3),
    (31, 'Nintendo', 11, 3),
    (32, 'Gearbox Software', 8, 1),
    (33, 'Gearbox Software', 5, 1),
    (34, 'SIE', 5, 1),
    (35, 'Studio MDHR', 4, 3),
    (36, 'Square Enix', 9, 1),
    (37, 'HAL Laboratory', 5, 3),
    (38, 'Polyphony Digital', 7, 3),
    (39, 'Nintendo', 5, 3),
    (40, 'Capcom', 2, 1);


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
Create index usuario_index on usuario (direccion, nombre_completo);
Create index articulo_index on articulo (precio, disponibilidad);
Create index pedido_index on pedido (pago_total, direccion);
Create index genero_index on genero (nombre);