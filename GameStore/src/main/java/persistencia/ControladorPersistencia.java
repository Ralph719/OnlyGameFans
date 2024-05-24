package persistencia;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import logica.Usuario;
import logica.Articulo;
import logica.Consola;
import logica.Videojuego;

public class ControladorPersistencia {
    private DataSource dataSource;
    private Connection connection;
    private PreparedStatement ps;
    private ResultSet rs;
    
    public ControladorPersistencia() {
        try {
            Context initContext = new InitialContext();
            Context envContext = (Context) initContext.lookup("java:/comp/env");
            dataSource = (DataSource) envContext.lookup("jdbc/GameStoreDB");
            System.out.println("Conexión completada");
        } catch (NamingException e) {
            System.out.println("Error al conectar con la BBDD: " + e);
        }
    }
    
    public ControladorPersistencia(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    // Operación INSERT USER
    public void crearUsuario(Usuario usuario) {
        // Obtenemos los datos del usuario
        String nombreCompleto = usuario.getNombre();
        String username = usuario.getUsername();
        String direccion = usuario.getDireccion();
        String email = usuario.getEmail();
        String password = usuario.getPassword();

        int fila = -1;

        // Operación
        String insercion = "INSERT INTO usuario (nombre_completo, usuario, direccion, email, contraseña) "
                + "VALUES (?, ?, ?, ?, ?)";

        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(insercion);

            // Establecemos los parámetros
            ps.setString(1, nombreCompleto);
            ps.setString(2, username);
            ps.setString(3, direccion);
            ps.setString(4, email);
            ps.setString(5, password);

            // Inserción de los datos
            fila = ps.executeUpdate();
            System.out.println("Usuario registrado con éxito.");

        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    // Operación SELECT
    public boolean buscarUsuario(String userEmail) {
        String consulta = "SELECT usuario, email FROM usuario " 
                        + "WHERE usuario = ? OR email = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            
            ps.setString(1, userEmail);
            ps.setString(2, userEmail);
            
            rs = ps.executeQuery();
            while (rs.next()) {
                if(rs.getString("email") == null && rs.getString("usuario") == null) {
                    System.out.println("El nombre de usuario o email no existe.");
                    return false;
                } else {
                    System.out.println("Usuario encontrado.");
                    return true;
                }
            }
            
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        
        return false;
    }
    
    public boolean verificarUsuario(String username) {
        
        String consulta = "SELECT usuario FROM usuario";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            rs = ps.executeQuery();
            while (rs.next()) {
                if(rs.getString("usuario").equals(username)) {
                    System.out.println("El nombre de usuario ya existe.");
                    return true;
                }
            }
            
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false; // Devuelve false si no encuentra otro nombre de usuario igual
    }
    
    public boolean verificarEmail(String email) {
        
        String consulta = "SELECT email FROM usuario";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            rs = ps.executeQuery();
            while (rs.next()) {
                if(rs.getString("email").equals(email)) {
                    System.out.println("El correo electrónico ya está registrado.");
                    return true;
                }
            }
            
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false;
    }
    
    public boolean verificarPassword(String userEmail, String password) {
        
        String consulta = "SELECT contraseña FROM usuario " 
                        + "WHERE usuario = ? OR email = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            
            ps.setString(1, userEmail);
            ps.setString(2, userEmail);
            
            rs = ps.executeQuery();
            while (rs.next()) {
                if(rs.getString("contraseña").equals(password)) {
                    System.out.println("Inicio de sesión exitoso.");
                    return true;
                }
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false;
    }
    
    
    // OBTENER INFORMACIÓN DE TODOS LOS VIDEOJUEGOS
    public List<Videojuego> obtenerVideojuegos() {
        List<Videojuego> listaVideojuegos = new ArrayList<>();
        Videojuego videojuego;

        String consulta = "SELECT a.id_articulo, a.nombre, a.precio, "
                + "g.nombre AS 'genero', j.desarrollador, p.nombre AS 'plataforma', "
                + "a.disponibilidad "
                + "FROM articulo a "
                + "INNER JOIN juego j ON j.id_articulo = a.id_articulo "
                + "INNER JOIN genero g ON g.id_genero = j.id_genero "
                + "INNER JOIN plataforma p ON p.id_plataforma = j.id_plataforma "
                + "ORDER BY id_articulo ASC";

        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            rs = ps.executeQuery();
            while (rs.next()) {
                boolean disponibilidad = rs.getInt("disponibilidad") == 1;
                videojuego = new Videojuego(rs.getInt("id_articulo"),
                        "Juegos",
                        rs.getString("nombre"),
                        rs.getDouble("precio"),
                        rs.getString("genero"),
                        rs.getString("desarrollador"),
                        rs.getString("plataforma"),
                        disponibilidad);

                listaVideojuegos.add(videojuego);
            }

        } catch (SQLException e) {
            System.out.println("Error al cargar los videojuegos: " + e);
        } finally {
            cerrarRecursos();
        }

        return listaVideojuegos;
    }
    
    
    // OBTENER INFORMACIÓN DE TODOS LAS CONSOLAS
    public List<Consola> obtenerConsolas() {
        List<Consola> listaConsolas = new ArrayList<>();
        Consola consola;

        String consulta = "SELECT a.id_articulo, a.nombre, a.precio, " 
                        + "c.fabricante, c.tipo, a.disponibilidad FROM articulo a " 
                        + "INNER JOIN consola c ON c.id_articulo = a.id_articulo";

        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            rs = ps.executeQuery();
            while (rs.next()) {
                boolean disponibilidad = rs.getInt("disponibilidad") == 1;
                consola = new Consola(rs.getInt("id_articulo"),
                        "Consolas",
                        rs.getString("nombre"),
                        rs.getDouble("precio"),
                        rs.getString("fabricante"),
                        rs.getString("tipo"),
                        disponibilidad);

                listaConsolas.add(consola);
            }

        } catch (SQLException e) {
            System.out.println("Error al cargar las consolas: " + e);
        } finally {
            cerrarRecursos();
        }

        return listaConsolas;
    }
    
    public int encontrarIdUsuario(String userEmail) {
        int idUsuario = 0;
        
        String consulta = "SELECT id_usuario FROM usuario "
                        + "WHERE usuario = ? OR email = ?";

        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            ps.setString(1, userEmail);
            ps.setString(2, userEmail);

            rs = ps.executeQuery();
            while (rs.next()) {
                idUsuario = rs.getInt("id_usuario");
            }
            
            return idUsuario;
            
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return idUsuario;
    }
    
    public String obtenerNombreCompleto(String userEmail) {
        String nombreCompleto = "";

        String consulta = "SELECT nombre_completo FROM usuario "
                        + "WHERE usuario = ? OR email = ?";

        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            ps.setString(1, userEmail);
            ps.setString(2, userEmail);

            rs = ps.executeQuery();
            if (rs.next()) {
                nombreCompleto = rs.getString("nombre_completo");
            }

        } catch (SQLException e) {
            System.out.println("Error al obtener el nombre: " + e);
        } finally {
            cerrarRecursos();
        }
        return nombreCompleto;
    }
    
    public void crearCarrito(int idUsuario) {
        int fila = -1;
        
        String consulta = "SELECT COUNT(*) AS num_carritos FROM " 
                        + "carrito_de_compras WHERE id_usuario = ?";
        
        String crear = "INSERT INTO carrito_de_compras (estado, id_usuario) " 
                     + "VALUES (?, ?)";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            
            ps.setInt(1, idUsuario);
            
            rs = ps.executeQuery();
            
            if(rs.next()) {
                int numCarritos = rs.getInt("num_carritos");
                if(numCarritos == 0) {
                    try (PreparedStatement psCrear = connection.prepareStatement(crear)) {
                        psCrear.setString(1, "Vacío");
                        psCrear.setInt(2, idUsuario);
                        
                        psCrear.executeUpdate();
                    }
                    System.out.println("Se ha creado un nuevo carrito para el usuario Nº" + idUsuario);
                } else {
                    System.out.println("El usuario Nº" + idUsuario + " ya tiene un carrito asignado.");
                }
            }
        } catch(SQLException e) {
            System.out.println("Error al crear el carrito: " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    
    public int encontrarCarrito(int idUsuario) {
        String consulta = "SELECT c.codigo_carrito FROM carrito_de_compras c " 
                        + "INNER JOIN usuario u ON u.id_usuario = c.id_usuario " 
                        + "WHERE c.id_usuario = ? AND c.estado != ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            ps.setInt(1, idUsuario);
            ps.setString(2, "Comprado");
            
            rs = ps.executeQuery();
            if(rs.next()) {
                int codigoCarrito = rs.getInt("codigo_carrito");
                System.out.println("Carrito encontrado para el usuario Nº" + idUsuario);
                return codigoCarrito;
            } else {
                System.out.println("Carrito no encontrado para el usuario Nº" + idUsuario);
            }
            
        } catch(SQLException e) {
            System.out.println("Error al buscar el carrito: " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
        return 0;
    }
    
    
    public List<Articulo> buscarArticulosEnCarrito(int codigoCarrito) {
        List<Articulo> articulosEnCarrito = new ArrayList<>();
        Articulo articulo;

        String videojuegos = "SELECT co.id_articulo, a.nombre, a.precio, co.cantidad " 
                           + "FROM contiene co INNER JOIN carrito_de_compras ca " 
                           + "ON ca.codigo_carrito = co.codigo_carrito " 
                           + "INNER JOIN usuario u ON u.id_usuario = ca.id_usuario " 
                           + "INNER JOIN articulo a ON a.id_articulo = co.id_articulo " 
                           + "INNER JOIN juego j ON j.id_articulo = a.id_articulo "
                           + "WHERE co.codigo_carrito = ?";
        
        String consolas = "SELECT co.id_articulo, a.nombre, a.precio, co.cantidad " 
                           + "FROM contiene co INNER JOIN carrito_de_compras ca " 
                           + "ON ca.codigo_carrito = co.codigo_carrito " 
                           + "INNER JOIN usuario u ON u.id_usuario = ca.id_usuario " 
                           + "INNER JOIN articulo a ON a.id_articulo = co.id_articulo " 
                           + "INNER JOIN consola c ON c.id_articulo = a.id_articulo "
                           + "WHERE co.codigo_carrito = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(videojuegos);
            
            ps.setInt(1, codigoCarrito);
            
            rs = ps.executeQuery();
            
            while(rs.next()) {
                articulo = new Articulo(
                        rs.getInt("id_articulo"),
                        "Juegos",
                        rs.getString("nombre"),
                        rs.getDouble("precio"),
                        rs.getInt("cantidad")
                );
                articulosEnCarrito.add(articulo);
            }
            
            ps = connection.prepareStatement(consolas);
            
            ps.setInt(1, codigoCarrito);
            
            rs = ps.executeQuery();
            
            while(rs.next()) {
                articulo = new Articulo(
                        rs.getInt("id_articulo"),
                        "Consolas",
                        rs.getString("nombre"),
                        rs.getDouble("precio"),
                        rs.getInt("cantidad")
                );
                articulosEnCarrito.add(articulo);
            }

            if (articulosEnCarrito.isEmpty()) {
                System.out.println("El carrito Nº: " + codigoCarrito + " está vacío.");
            }
            
        } catch(SQLException e) {
            System.out.println("Error al buscar los artículos en el carrito Nº " 
                                + codigoCarrito + ": " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
        
        return articulosEnCarrito;
    }
    
    
    public void agregarArticulo(int carrito, int articulo) {
        int fila = -1;
        
        String consulta = "SELECT cantidad FROM contiene " 
                        + "WHERE codigo_carrito = ? AND id_articulo = ?";
        
        String insercion = "INSERT INTO contiene VALUES (?, ?, ?)";
        
        String actualizar = "UPDATE contiene SET cantidad = ? " 
                          + "WHERE codigo_carrito = ? AND id_articulo = ?";
        
        int cantidad = 0;
        
        try {
            connection = dataSource.getConnection();
            
            ps = connection.prepareStatement(consulta);
            ps.setInt(1, carrito);
            ps.setInt(2, articulo);

            rs = ps.executeQuery();
            if(rs.next()) {
                cantidad = rs.getInt("cantidad");
                
                ps = connection.prepareStatement(actualizar);
                ps.setInt(1, (cantidad + 1));
                ps.setInt(2, carrito);
                ps.setInt(3, articulo);
                
                fila = ps.executeUpdate();
                
            } else {
                ps = connection.prepareStatement(insercion);
                ps.setInt(1, carrito);
                ps.setInt(2, articulo);
                ps.setInt(3, 1);

                fila = ps.executeUpdate();
            }
            
            
            System.out.println("Artículo Nº" + articulo + " agregado con éxito " 
                                + "al carrito Nº" + carrito);
            
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    public void eliminarArticulo(int carrito, int articulo) {        
        String consulta = "SELECT cantidad FROM contiene " 
                        + "WHERE codigo_carrito = ? AND id_articulo = ?";
        
        String eliminar = "DELETE FROM contiene WHERE codigo_carrito = ? " 
                        + "AND id_articulo = ?";
        
        String actualizar = "UPDATE contiene SET cantidad = cantidad - 1 " 
                          + "WHERE codigo_carrito = ? AND id_articulo = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);

            ps.setInt(1, carrito);
            ps.setInt(2, articulo);

            rs = ps.executeQuery();
            if(rs.next()) {
                if(rs.getInt("cantidad") == 1) {
                    ps = connection.prepareStatement(eliminar);
                    ps.setInt(1, carrito);
                    ps.setInt(2, articulo);
                    
                    ps.executeUpdate();
                    
                    System.out.println("Artículo Nº" + articulo 
                                       + " eliminado del carrito Nº" + carrito);
                } else if(rs.getInt("cantidad") > 1) {
                    ps = connection.prepareStatement(actualizar);
                    ps.setInt(1, carrito);
                    ps.setInt(2, articulo);
                    
                    ps.executeUpdate();
                    
                    System.out.println("Se ha reducido la cantidad del artículo Nº" 
                                       + articulo + " en el carrito Nº" + carrito);
                }
            }

        } catch (SQLException e) {
            System.out.println("Error al intentar eliminar el artículo Nº" 
                               + articulo + ": " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    public void cambiarEstadoCarrito(int carrito) {
        String consulta = "SELECT COUNT(*) AS total_registros " 
                        + "FROM contiene WHERE codigo_carrito = ?";
        
        String estadoVacio = "UPDATE carrito_de_compras SET estado = 'Vacío' " 
                           + "WHERE codigo_carrito = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            
            ps.setInt(1, carrito);
            
            rs = ps.executeQuery();
            
            if(rs.next()) {
                if (rs.getInt("total_registros") == 0) {
                    ps = connection.prepareStatement(estadoVacio);
                    ps.setInt(1, carrito);

                    ps.executeUpdate();
                    System.out.println("Ahora el carrito Nº" + carrito + " está vacío.");
                } else {
                    System.out.println("El carrito Nº" + carrito + " aún tiene artículos.");
                }
            }
            
        } catch(SQLException e) {
            System.out.println("Error al consultar el estado del carrito Nº" 
                               + carrito + ": " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    public void vaciarCarrito(int carrito) {
        int fila = -1;
        
        String eliminar = "DELETE FROM contiene WHERE codigo_carrito = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(eliminar);

            ps.setInt(1, carrito);

            // Eliminación del artículo
            fila = ps.executeUpdate();
            System.out.println("Se han eliminado todos los artículos del " 
                               + "carrito Nº" + carrito);

        } catch (SQLException e) {
            System.out.println("Error al vaciar el carrito Nº" + carrito 
                               + ": " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    public double calcularTotal(int carrito) {
        String consulta = "SELECT c.cantidad, a.precio FROM contiene c " 
                        + "INNER JOIN articulo a ON a.id_articulo = c.id_articulo " 
                        + "WHERE codigo_carrito = ?";
        
        double total = 0.0;
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            ps.setInt(1, carrito);
            
            rs = ps.executeQuery();
            
            while(rs.next()) {
                total += rs.getInt("cantidad") * rs.getDouble("precio");
            }
            
        } catch(SQLException e) {
            System.out.println("Error al calcular el total del carrito " 
                                + "Nº" + carrito + e.getMessage());
        } finally {
            cerrarRecursos();
        }
        
        return total;
    }
    
    public void crearPedido(double pagoTotal, String direccion, 
                            LocalDate fechaCompra, int usuario, int carrito) {
        String insercion = "INSERT INTO pedido (pago_total, direccion, " 
                         + "fecha_compra, id_usuario, codigo_carrito) VALUES " 
                         + "(?, ?, ?, ?, ?)";
        int fila = -1;
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(insercion);
            
            Date fechaSQL = Date.valueOf(fechaCompra);
            
            ps.setDouble(1, pagoTotal);
            ps.setString(2, direccion);
            ps.setDate(3, fechaSQL);
            ps.setInt(4, usuario);
            ps.setInt(5, carrito);
            
            fila = ps.executeUpdate();
            System.out.println("Pedido creado con éxito.");
            
        } catch(SQLException e) {
            System.out.println("Error al crear el pedido para el usuario " 
                               + "Nº" + usuario + ": " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    public int obtenerIdPedido(int carrito) {
        int idPedido = 0;
        
        String consulta = "SELECT id_pedido FROM pedido WHERE codigo_carrito = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            ps.setInt(1, carrito);
            
            rs = ps.executeQuery();
            if(rs.next()) {
                idPedido = rs.getInt("id_pedido");
            }
            
        } catch(SQLException e) {
            System.out.println("Error al buscar el idPedido: " + e.getMessage());
        }
        
        return idPedido;
    }
    
    public void cerrarRecursos() {
        try {
            if (rs != null) {
                rs.close();
            }
            if (ps != null) {
                ps.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException ex) {
            System.out.println("Error al cerrar los recursos: " + ex.getMessage());
        }
    }

}