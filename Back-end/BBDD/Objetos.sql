SET GLOBAL log_bin_trust_function_creators = 1;

-- FUNCIÓN 1: Compras que ha hecho un usuario en los N días anteriores
Drop function if exists mostrar_compras;

Delimiter $$
create function mostrar_compras (idCliente int, numDias int)
returns int (3)
begin
	-- Establezco 0 como valor por defecto
	declare cantidad int default 0;
    -- Solo se contarán las columnas, ya que estas representan cada compra
    Select count(*)
    into cantidad
    from usuario
    -- Solo se considera el pedido que tenga el mismo id de usuario indicado
    join pedido on usuario.id_usuario=pedido.id_usuario
    where usuario.id_usuario = idCliente
    -- Establezco el intervalo de tiempo
    AND pedido.fecha_compra >= DATE_SUB(CURDATE(), INTERVAL numDias DAY)
    AND pedido.fecha_compra <= CURDATE();
return cantidad;
end$$
Delimiter;

SELECT tienda_videojuegos.mostrar_compras(1, 10) as 'cantidad_compras';


-- PROCEDIMIENTO 1: Insertar un nuevo pedido
Drop procedure if exists Procedimiento_insert;

DELIMITER $$
create procedure Procedimiento_insert (pago_total double (7, 2), 
									   direccion varchar (30),
                                       fecha_compra date,
                                       id_usuario int (10),
                                       codigo_carrito int (10))
BEGIN
	INSERT INTO Pedido (pago_total, direccion, fecha_compra, id_usuario, codigo_carrito) values
				(pago_total, direccion, fecha_compra, id_usuario, codigo_carrito);
END;

CALL tienda_videojuegos.Procedimiento_insert(787.98, 'Asin y Palacios 18', '2024-04-25', 3, 3);


-- PROCEDIMIENTO 2: Encriptar una contraseña
Drop procedure if exists encriptar_new_password;

DELIMITER $$
CREATE PROCEDURE encriptar_new_password(nuevoNombre varchar(40), nuevoUsuario varchar(20),
										nuevaDireccion varchar(25), nuevoEmail varchar(30),
                                        nuevaContraseña varchar(64))
BEGIN
	-- Inserto los nuevos valores con la contraseña encriptada
	INSERT INTO usuario (nombre_completo, usuario, direccion, email, contraseña) values
		(nuevoNombre, nuevoUsuario, nuevaDireccion, nuevoEmail, HEX(AES_ENCRYPT(nuevaContraseña, @clave)));
    -- Muestro el resultado de la inserción
    SELECT * FROM Usuario
    WHERE usuario = nuevoUsuario;
END;

CALL tienda_videojuegos.encriptar_new_password('Niky Ciolca', 'nikyMC', 'Calle del Coso 5', 'nikyc@gmail.com', 'niky');

-- PROCEDIMIENTO 3: Desencriptar una contraseña
Drop procedure if exists desencriptar_password;

DELIMITER $$
CREATE PROCEDURE desencriptar_password(idUsuario int)
BEGIN
	-- Primero convierto la contraseña encriptada a su representación binaria
	UPDATE Usuario
	-- Luego de eso ya puedo desencriptarla
    SET contraseña = AES_DECRYPT(UNHEX(contraseña), @clave)
    WHERE id_usuario = idUsuario;
    -- Muestro el resultado de la operación
    SELECT *
    FROM Usuario
    WHERE id_usuario = idUsuario;
END;

CALL tienda_videojuegos.desencriptar_password(6);


-- PROCEDIMIENTO 4: Actualizar la contraseña de un usuario
Drop procedure if exists encriptar_password;

DELIMITER $$
CREATE PROCEDURE encriptar_password(idUsuario int)
BEGIN
	UPDATE Usuario
    -- Encripto la contraseña y la convierto a una cadena hexadecimal para poder almacenarla en la tabla
    SET contraseña = HEX(AES_ENCRYPT(contraseña, @clave))
    WHERE id_usuario = idUsuario;
    -- Muestro el resultado de la operación
    SELECT *
    FROM Usuario
    WHERE id_usuario = idUsuario;
END;

CALL tienda_videojuegos.encriptar_password(6);


-- PROCEDIMIENTO 5: Dar de baja a un producto
Drop procedure if exists baja_producto;

Delimiter $$
Create procedure baja_producto(id_articulo int(10))

BEGIN
	delete from articulo
	where articulo.id_articulo=id_articulo;
	delete from juego
            where juego.id_articulo=id_articulo;
END;

CALL tienda_videojuegos.baja_producto(11);