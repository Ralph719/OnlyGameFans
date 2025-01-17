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
    direccion varchar(35) not null,
    email varchar (30) not null unique,
    contraseña varchar (64) not null,
    primary key (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


Insert into usuario (nombre_completo, usuario, direccion, email, contraseña) values
	('Pedro Milian', 'pedroM25', 'Paseo Independencia 8', 'pedrom@gmail.com', 'ee5cd7d5d96c8874117891b2c92a036f96918e66c102bc698ae77542c186f981'),
    ('Sara Sanchez', 'saraS18', 'Avenida Madrid 125', 'saras@gmail.com', '3a6d64c24cf80b69ccda37650406467e8266667b50cfd0b984beb3651b129ed7'),
    ('Alex García', 'alexG21', 'Calle Delicas 25', 'alexg@gmail.com', '4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0'),
    ('Juan Blesa', 'juanB35', 'Conde Aranda 2', 'juanb@gmail.com', 'ed08c290d7e22f7bb324b15cbadce35b0b348564fd2d5f95752388d86d71bcca'),
    ('Cristina Pérez', 'cristinaP22', 'Calle Domingo Ram 17', 'cristinap@gmail.com', '15acfdc75fdb88851487238cd8442c5ecc8e0c31868ce9f52a4e2361ba899f2f');


Drop table if exists articulo;
Create table `articulo`(
	id_articulo int (10) auto_increment,
    nombre varchar (50) not null,
    precio double (6, 2) not null,
    cantidad tinyint(3) not null,
    disponibilidad boolean not null,
    primary key (id_articulo),
    check (precio > 0),
    check (cantidad >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into articulo (nombre, precio, cantidad, disponibilidad) values
	('The Witcher 3', 39.99, 30, true),
    ('Returnal', 59.99, 30, true),
    ('Elden Ring', 59.99, 45, true),
    ('Assassins Creed Valhalla', 49.99, 35, true),
    ('Crash Bandicoot 4', 49.99, 38, true),
    ('Super Mario Wonder', 59.99, 50, true),
    ('Overcooked 2', 39.99, 45, true),
    ('Persona 5', 49.99, 50, true),
    ('Spiderman 2', 59.99, 50, true),
    ('Mortal Kombat 1', 39.99, 45, true),
    ('Ark Ascended', 44.99, 45, true),
    ('Splatoon 3', 49.99, 40, true),
    ('It Takes Two', 29.99, 40, true),
    ('Final Fantasy XV', 19.99, 45, true),
    ('Ride 5', 44.99, 40, true),
    ('Gran Turismo 7', 54.99, 47, true),
    ('Final Fantasy VII Rebirth', 79.99, 50, true),
    ('Rise Of The Ronin', 59.99, 45, true),
    ('Hogwarts Legacy', 59.99, 50, true),
    ('Unravel Two', 39.99, 40, true),
    ('Mario Kart Deluxe 8', 49.99, 80, true),
    ('The Crew Motorfest', 35.99, 30, true),
    ('Cyberpunk 2077', 49.99, 77, true),
    ('Pokemon Purpura', 49.99, 50, true),
    ('Pokemon Escarlata', 49.99, 40, true),
    ('Far Cry 6', 49.99, 60, true),
    ('Super Mario 3D Worlds + Bowsers Fury', 49.99, 50, true),
    ('Borderlands 3', 49.99, 90, true),
    ('The Leyend Of Zelda: Tears Of The Kingdom', 49.99, 50, true),
    ('Super Mario Odyssey', 49.99, 60, true),
    ('Mario Strikers Battle League Football', 49.99, 50, true),
    ('Wonderlands Next Level Edition', 69.99, 60, true),
    ('New Tales From The Borderlands', 39.99, 50, true),
    ('God Of War: Ragnarok', 49.99, 50, true),
    ('Cuphead', 39.99, 50, true),
    ('Final Fantasy XVI', 69.99, 60, true),
    ('Kirby Y La Tierra Olvidada', 49.99, 70, true),
    ('Gang Beasts', 24.99, 40, true),
    ('Animal Crossing: New Horizons', 49.99, 50, true),
    ('Resident Evil 4 Remake', 49.99, 80, true),
    ('PlayStation 5', 499.99, 55, true),
    ('Nintendo Switch Oled', 399.99, 80, true),
    ('Xbox Series X', 459.99, 50, true),
    ('Asus Rog Ally', 559.99, 55, true),
    ('PlayStation 4 Slim', 229.99, 44, true),
    ('Xbox One', 149.99, 40, true),
    ('SteamDeck', 519.99, 50, true);


Drop table if exists carrito_de_compras;
Create table `carrito_de_compras`(
	codigo_carrito int (10) auto_increment,
    estado varchar (15),
    id_usuario int (10),
    Primary key (codigo_carrito),
    Foreign key (id_usuario) references usuario (id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into carrito_de_compras (estado, id_usuario) values
	('Comprado', 1),
    ('Vacío', 2),
    ('Comprado', 3),
    ('Comprado', 4),
    ('En espera', 5),
    ('Comprado', 1);


Drop table if exists contiene;
Create table `contiene`(
    codigo_carrito int (10),
	id_articulo int (10),
    cantidad tinyint (3),
    Primary key(id_articulo, codigo_carrito),
    Foreign key (id_articulo) references articulo (id_articulo) ON DELETE CASCADE,
    Foreign key (codigo_carrito) references carrito_de_compras (codigo_carrito) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into contiene values
	(1, 2, 1),
    (1, 3, 1),
    (1, 30, 1),
    (1, 24, 1),
    (3, 4, 1),
    (4, 5, 1),
    (5, 1, 1);


Drop table if exists pedido;
Create table `pedido`(
	id_pedido int (10) auto_increment,
    pago_total double (7, 2) not null,
    direccion varchar (70) not null,
    fecha_compra date,
    id_usuario int (10),
    codigo_carrito int (10),
    Primary key (id_pedido),
    Foreign key (id_usuario) references usuario(id_usuario) ON DELETE CASCADE,
    Foreign key (codigo_carrito) references carrito_de_compras(codigo_carrito) ON DELETE CASCADE,
    check (pago_total > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

Insert into pedido (pago_total, direccion, fecha_compra, id_usuario, codigo_carrito) values 
	(299.99, 'Paseo Independencia 8', '2024-04-15', 1, 1),
    (39.99, 'Avenida Madrid 125', '2024-04-25', 3, 3),
    (69.98, 'Paseo Independencia 8', '2024-07-30', 4, 4),
    (250.00, 'Paseo Independencia 8', '2024-04-30', 1, 6);


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
    (7, 'Team 17', 6, 3),
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
    (23, 'CD Projeckt Red', 8, 4),
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


-- TRIGGER: Cambia el estado de un carrito a 'Comprado' cuando se registra un nuevo pedido con el mismo 'codigo_carrito'
DROP TRIGGER IF EXISTS estado_carrito_comprado;

DELIMITER $$
CREATE TRIGGER estado_carrito_comprado AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
	UPDATE carrito_de_compras
    SET estado = 'Comprado'
    WHERE carrito_de_compras.codigo_carrito = NEW.codigo_carrito
    AND carrito_de_compras.estado = 'En espera'
    AND carrito_de_compras.id_usuario = NEW.id_usuario;
END$$
DELIMITER ;


-- TRIGGER: Cambia el estado de un carrito de 'Vacío' a 'En espera' cuando se agrega un nuevo artículo a este
DROP TRIGGER IF EXISTS estado_carrito_espera;

DELIMITER $$
CREATE TRIGGER estado_carrito_espera AFTER INSERT ON contiene
FOR EACH ROW
BEGIN
	IF EXISTS (
		SELECT 1
		FROM carrito_de_compras
		WHERE codigo_carrito = NEW.codigo_carrito
	) THEN
		UPDATE carrito_de_compras
		SET estado = 'En espera'
		WHERE codigo_carrito = NEW.codigo_carrito
		AND estado = 'Vacío';
	END IF;
END$$
DELIMITER ;


-- TRIGGER: Reduce la cantidad de un artículo después de realizar un pedido
DROP TRIGGER IF EXISTS reducir_cantidad_articulo;

DELIMITER $$
CREATE TRIGGER reducir_cantidad_articulo
AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE nuevoId INT;
    DECLARE nuevaCantidad INT;

    -- Cursor para recorrer los artículos del carrito de compras
    DECLARE cursor_articulos CURSOR FOR
        SELECT c.id_articulo, c.cantidad
        FROM contiene c
        WHERE c.codigo_carrito = NEW.codigo_carrito;

    -- Handler para finalizar el cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Abrir el cursor
    OPEN cursor_articulos;

    -- Loop para leer cada artículo del cursor
    read_loop: LOOP
        FETCH cursor_articulos INTO nuevoId, nuevaCantidad;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Actualizamos la cantidad del artículo
        UPDATE articulo
        SET cantidad = cantidad - nuevaCantidad
        WHERE id_articulo = nuevoId;

    END LOOP;

    CLOSE cursor_articulos;
END$$

DELIMITER ;


-- TRIGGER: Aumenta la cantidad de un artículo cuando este llegue a cero. (Restock)
DELIMITER $$
CREATE TRIGGER aumentar_cantidad_articulo
AFTER UPDATE ON articulo
FOR EACH ROW
BEGIN
    IF NEW.cantidad <= 0 THEN
        UPDATE articulo
        SET cantidad = cantidad + 50
        WHERE id_articulo = NEW.id_articulo;
    END IF;
END$$

DELIMITER ;


-- PROCEDIMIENTO: Agregar un nuevo juego
DROP PROCEDURE IF EXISTS agregar_juego;

DELIMITER $$
CREATE PROCEDURE agregar_juego(IN nombre varchar (50),IN precio double (6, 2), 
									   IN cantidad tinyint(3), IN desarrollador varchar (25), 
                                       IN id_genero int (10), IN id_plataforma int (10))
BEGIN
	DECLARE ultimo_id INT;
    DECLARE genero_count INT;
    DECLARE plataforma_count INT;

	-- Inserción del nuevo artículo
	INSERT INTO articulo (nombre, precio, cantidad, disponibilidad) VALUES 
		(nombre, precio, cantidad, true);
	
    -- Obtenemos el ID del último artículo insertado
    SELECT LAST_INSERT_ID() INTO ultimo_id;
    
    -- Verificación de que el 'id_genero' e 'id_plataforma' existan
    SELECT COUNT(*) INTO genero_count FROM genero WHERE id_genero = id_genero;
    SELECT COUNT(*) INTO plataforma_count FROM plataforma WHERE id_plataforma = id_plataforma;
    
    IF genero_count = 0 OR plataforma_count = 0 THEN
		ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Los IDs de género o plataforma proporcionados no existen';
	ELSE
        -- Inserción del nuevo juego
        INSERT INTO juego (id_articulo, desarrollador, id_genero, id_plataforma) VALUES 
			(ultimo_id, desarrollador, id_genero, id_plataforma);
	END IF;
END$$
DELIMITER ;


-- PROCEDIMIENTO: Agregar una nueva consola
DROP PROCEDURE IF EXISTS agregar_consola;

DELIMITER $$
CREATE PROCEDURE agregar_consola(IN nombre varchar (50),IN precio double (6, 2), 
									   IN cantidad tinyint(3), IN fabricante varchar (20),
                                       IN tipo varchar(10))
BEGIN
	DECLARE ultimo_id INT;
    
    -- Inserción del nuevo artículo
	INSERT INTO articulo (nombre, precio, cantidad, disponibilidad) VALUES 
		(nombre, precio, cantidad, true);
        
	SELECT LAST_INSERT_ID() INTO ultimo_id;
    
    -- Inserción de la nueva consola
    INSERT INTO consola VALUES
		(ultimo_id, fabricante, tipo);
END$$
DELIMITER ;


-- VISTA: Ver artículos de un carrito que pertenece a un usuario
DROP VIEW IF EXISTS articulos_en_carrito;

CREATE VIEW articulos_en_carrito AS
SELECT u.nombre_completo, c.codigo_carrito, c.id_articulo, a.nombre 
FROM contiene c 
INNER JOIN articulo a ON c.id_articulo = a.id_articulo
INNER JOIN carrito_de_compras cc ON cc.codigo_carrito = c.codigo_carrito
INNER JOIN usuario u ON u.id_usuario = cc.id_usuario;


-- VISTA: Muestra los detalles completos de los videojuegos
CREATE VIEW detalles_juego AS
SELECT a.id_articulo, a.nombre, a.precio, g.nombre AS 'genero', j.desarrollador, p.nombre AS 'plataforma',
	CASE
		WHEN a.disponibilidad = 1 THEN 'Sí'
		WHEN a.disponibilidad = 0 THEN 'No'
		ELSE 'NA'
	END AS disponibilidad
FROM articulo a
INNER JOIN juego j ON j.id_articulo = a.id_articulo
INNER JOIN genero g ON g.id_genero = j.id_genero
INNER JOIN plataforma p ON p.id_plataforma = j.id_plataforma;


-- VISTA: Muestra los detalles completos de las consolas
DROP VIEW IF EXISTS detalles_consola;

DELIMITER $$
CREATE VIEW detalles_consola AS
SELECT a.id_articulo, a.nombre, a.precio, c.fabricante, c.tipo,
	CASE
		WHEN a.disponibilidad = 1 THEN 'Sí'
		WHEN a.disponibilidad = 0 THEN 'No'
		ELSE 'NA'
	END AS disponibilidad
FROM articulo a
INNER JOIN consola c ON c.id_articulo = a.id_articulo;