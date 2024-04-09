-- Usuario con todos los privilegios, administrador
Drop user if exists 'admin';
Create user 'admin'
identified by 'adminUser';
Grant all privileges on tienda_juegos.* to 'admin';

-- Usuario con solamente el permiso de visiualización
Drop user if exists 'lector';
Create user 'lector'
identified by 'readerUser';
Grant select on tienda_juegos.* to 'lector';

-- Usuario que podrá ver y actualizar los registros
Drop user if exists 'extra';
Create user 'extra'
identified by 'updateUser';
Grant select, update on tienda_juegos.* to 'extra';