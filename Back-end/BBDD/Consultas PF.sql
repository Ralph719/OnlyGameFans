 -- Consulta donde sacaremos todas las consolas cuyo precio sea mayor al videojuego con el precio mas alto haciendo uso de una subconsulta y la función max()
 
Select *
from consola
join articulo on consola.id_articulo=articulo.id_articulo
where articulo.precio > 
	(Select max(articulo.precio)
    from juego
    join articulo on articulo.id_articulo=juego.id_articulo);


 -- Consulta que haremos uso de la función min() para sacar la consola mas barata de cada fabricante que disponemos

Select min(articulo.precio), consola.fabricante
From articulo
Join consola on articulo.id_articulo = consola.id_articulo
group by consola.fabricante;


 -- En esta sentencia, haciendo uso de right join uniremos los datos de la tabla usuario y pedido para obtener toda 
 -- la información tanto de los pedidos como de quienes los han realizado
 
Select*
From usuario right join pedido on usuario.id_usuario=pedido.id_usuario;

 -- Sentencia la cual nos dará los pedidos realizados durante esta semana, los realizados la semana pasada y la semana que viene
 
Select*
From pedido
where pedido.fecha_compra >= date_sub(curdate(), interval weekday(curdate()) + 7 day)
And pedido.fecha_compra < date_add(curdate(), interval 14 - weekday(curdate()) day);


 -- Agrupando los pedidos respecto al usuario, seleccionamos solo los que su cobro es mayor a 50 euros con el uso del having
 
Select count(pedido.id_pedido) as cantidad_pedidos, pedido.id_usuario
From pedido
group by pedido.id_usuario
having avg(pedido.pago_total) >= 50;