 -- Creación de la base de datos
Drop database if exists `tienda_videojuegos`;
Create database `tienda_videojuegos` CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Use tienda_videojuegos;

 -- Se empieza a crear las tablas, antes de crear cada una de ellas se eliminará si ya existe
Drop table if exists usuario;
Create table `usuario` (
	id_usuario int auto_increment,
    nombre_completo varchar (40) not null,
    usuario varchar (20),
    edad tinyint (3) default 18,
    direccion varchar(25) not null,
    email varchar (30) not null unique,
    contraseña varchar (64) not null,
    primary key (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into usuario (nombre_completo, usuario, edad, direccion, email, contraseña) values
	('Pedro Milian', 'pedroM25', 25, 'Paseo Independencia 8', 'pedrop@gmail.com', 'ee5cd7d5d96c8874117891b2c92a036f96918e66c102bc698ae77542c186f981'),
    ('Sara Sanchez', 'saraS18', 18, 'Avenida Madrid 125', 'saras@gmail.com', '3a6d64c24cf80b69ccda37650406467e8266667b50cfd0b984beb3651b129ed7'),
    ('Alex García', 'alexG21', 21, 'Calle Delicas 25', 'alexa@gmail.com', '4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0'),
    ('Juan Blesa', 'juanB35', 35, 'Conde Aranda 2', 'juanj@gmail.com', 'ed08c290d7e22f7bb324b15cbadce35b0b348564fd2d5f95752388d86d71bcca'),
    ('Cristina Pérez', 'cristinaP22', 22, 'Calle Domingo Ram 17', 'cristinac@gmail.com', '15acfdc75fdb88851487238cd8442c5ecc8e0c31868ce9f52a4e2361ba899f2f');


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
	('Bioshock Infinite', 25.99, 33, true),
    ('Persona 5', 39.99, 0, false),
    ('Ps4 Pro', 299.99, 25, true),
    ('The Witcher 3', 9.99, 9, true),
    ('Elden Ring', 59.99, 19, true),
    ('Ps5', 399.99, 200, true),
    ('Steam Deck', 349.99,150 , true),
    ('Xbox X', 329.99, 100, true),
    ('Nintendo Switch Oled', 399.99, 1500, true),
    ('The Elder Scrolls V: Skyrim', 15.99, 68, true);


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
	id_plataforma int (10) auto_increment,
    nombre varchar (15) not null unique,
    Primary key (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into plataforma (nombre) values
	('Ps4'),
    ('PC'),
    ('Switch'),
    ('Ps5'),
    ('Xbox X');


Drop table if exists genero;
Create table `genero`(
	id_genero int (10) auto_increment,
    nombre varchar (40) not null unique,
    primary key (id_genero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into genero (nombre) values
	('RPG'),
    ('Acción'),
    ('Estrategia'),
    ('Aventura'),
    ('Aventura gráfica');


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
Create index usuario_index on usuario (direccion, nombre_completo);
Create index articulo_index on articulo (precio, disponibilidad);
Create index pedido_index on pedido (pago_total, direccion);
Create index genero_index on genero (nombre);