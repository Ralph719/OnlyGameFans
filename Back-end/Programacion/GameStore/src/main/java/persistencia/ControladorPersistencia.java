package persistencia;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import logica.Usuario;

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
        String insercion = "INSERT INTO Usuario (nombre_completo, usuario, direccion, email, contraseña) "
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
    public boolean buscarUsuario(Usuario usuario) {
        String userEmail = usuario.getUsername();
        String password = usuario.getPassword();
        
        int fila = -1;
        
        String consulta = "SELECT usuario, email, contraseña FROM Usuario " 
                        + "WHERE (usuario = ? OR email = ?) AND contraseña = ?";
        
        try {
            connection = dataSource.getConnection();
            ps = connection.prepareStatement(consulta);
            
            ps.setString(1, userEmail);
            ps.setString(2, userEmail);
            ps.setString(3, password);
            
            rs = ps.executeQuery();
            while (rs.next()) {
                if(rs.getString("email") == null && rs.getString("usuario") == null) {
                    System.out.println("Nombre de usuario o email incorrecto.");
                    return false;
                } else {
                    if (rs.getString("contraseña") == null) {
                        System.out.println("Contraseña incorrecta.");
                        return false;
                    } else {
                        return true;
                    }
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
        int fila = -1;
        
        String consulta = "SELECT usuario FROM Usuario";
        
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
        int fila = -1;
        
        String consulta = "SELECT email FROM Usuario";
        
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
        int fila = -1;
        
        String consulta = "SELECT contraseña FROM Usuario " 
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
    
    private void cerrarRecursos() {
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