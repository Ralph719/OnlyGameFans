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
    email varchar (30) not null,
    primary key (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists articulo;
Create table `articulo`(
	id_articulo int (10),
    nombre varchar (25) not null,
    precio double (6, 2) not null,
    disponibilidad boolean not null,
    primary key (id_articulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


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


Drop table if exists contiene;
Create table `contiene`(
	id_articulo int (10),
    codigo_carrito int (10),
    Primary key(id_articulo, codigo_carrito),
    Foreign key (id_articulo) references articulo (id_articulo),
    Foreign key (codigo_carrito) references carrito_de_compras (codigo_carrito)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


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
    Foreign key (codigo_carrito) references carrito_de_compras(codigo_carrito)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists consola;
Create table `consola`(
	id_articulo int (10),
    fabricante varchar (15),
    tipo varchar (10),
    primary key (id_articulo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists plataforma;
Create table `plataforma`(
	id_plataforma int (10),
    nombre varchar (15) not null,
    Primary key (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists genero;
Create table `genero`(
	id_genero int (10),
    nombre varchar (15) not null,
    primary key (id_genero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists juego;
Create table `juego`(
	id_juego int (10),
    desarrollador varchar (15),
    id_genero int (10),
    id_plataforma int (10),
    primary key (id_juego),
    foreign key (id_genero) references genero (id_genero),
    foreign key (id_plataforma) references plataforma (id_plataforma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Drop table if exists pertenece;
Create table `pertenece` (
	id_plataforma int (10),
    id_juego int (10),
    primary key (id_plataforma, id_juego),
    foreign key (id_plataforma) references plataforma (id_plataforma),
    foreign key (id_juego) references juego (id_juego)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

 -- Se crean diferentes índices para realizar busquedas de manera más rápida y eficiente
Create index usuario_index on usuario (email, nombre);
Create index articulo_index on articulo (precio, disponibilidad);
Create index pedido_index on pedido (fecha_compra);
Create index genero_index on genero (nombre);