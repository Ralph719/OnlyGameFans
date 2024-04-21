package persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import logica.Usuario;

public class ControladorPersistencia {
    Connection conexion = null;
    Statement stmt = null;

    // Datos para la conexión a la BBDD
    String url = "jdbc:mysql://localhost/tienda_videojuegos";
    String user = "root";
    String psw = "terry719";
    
    // Operación INSERT USER
    public void crearUsuario(Usuario usuario) throws ClassNotFoundException {
        // Obtenemos los datos del usuario
        String nombreCompleto = usuario.getNombre();
        String username = usuario.getUsername();
        String direccion = usuario.getDireccion();
        String email = usuario.getEmail();
        String password = usuario.getPassword();
        
        int fila = -1;
        
        // Operación
        String insercion = "INSERT INTO Usuario (nombre_completo, usuario, direccion, email, contraseña) "
                            + "VALUES ('" + nombreCompleto + "', '" + username + "', '" 
                            + direccion + "', '" + email + "', '" + password + "')";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            conexion = DriverManager.getConnection(url, user, psw);
            stmt = conexion.createStatement();
            
            // Inserción de los datos
            fila = stmt.executeUpdate(insercion);
            System.out.println("Usuario registrado con éxito.");
            
            
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            cerrarRecursos();
        }
    }
    
    // Operación SELECT
    public boolean buscarUsuario(Usuario usuario) throws ClassNotFoundException {
        String userEmail = usuario.getUsername();
        String password = usuario.getPassword();
        
        int fila = -1;
        
        String consulta = "SELECT usuario, email, contraseña FROM Usuario " 
                        + "WHERE ('" + userEmail + "' = usuario OR '" 
                        + userEmail + "' = email) AND contraseña = '" + password + "'";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            conexion = DriverManager.getConnection(url, user, psw);
            stmt = conexion.createStatement();
            
            ResultSet rs = stmt.executeQuery(consulta);
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
            
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        
        return false;
    }
    
    public boolean verificarUsuario(String username) throws ClassNotFoundException {
        int fila = -1;
        
        String consulta = "SELECT usuario FROM Usuario";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            conexion = DriverManager.getConnection(url, user, psw);
            stmt = conexion.createStatement();

            ResultSet rs = stmt.executeQuery(consulta);
            while (rs.next()) {
                if(rs.getString("usuario").equals(username)) {
                    System.out.println("El nombre de usuario ya existe.");
                    return true;
                }
            }
            
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false; // Devuelve false si no encuentra otro nombre de usuario igual
    }
    
    public boolean verificarEmail(String email) throws ClassNotFoundException {
        int fila = -1;
        
        String consulta = "SELECT email FROM Usuario";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            conexion = DriverManager.getConnection(url, user, psw);
            stmt = conexion.createStatement();

            ResultSet rs = stmt.executeQuery(consulta);
            while (rs.next()) {
                if(rs.getString("email").equals(email)) {
                    System.out.println("El correo electrónico ya está registrado.");
                    return true;
                }
            }
            
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false;
    }
    
    public boolean verificarPassword(String userEmail, String password) throws ClassNotFoundException {
        int fila = -1;
        
        String consulta = "SELECT contraseña FROM Usuario " 
                        + "WHERE usuario = '" + userEmail + "' OR email = '" + userEmail + "'";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            conexion = DriverManager.getConnection(url, user, psw);
            stmt = conexion.createStatement();
            
            ResultSet rs = stmt.executeQuery(consulta);
            while (rs.next()) {
                if(rs.getString("contraseña").equals(password)) {
                    System.out.println("Contraseña correcta. Acceso concedido.");
                    return true;
                }
            }
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error: " + e);
        } finally {
            cerrarRecursos();
        }
        return false;
    }
    
    private void cerrarRecursos() {
        try {
            if (stmt != null) {
                stmt.close();
            }
            if (conexion != null) {
                conexion.close();
            }
        } catch (SQLException ex) {
            System.out.println("Error al cerrar recursos: " + ex.getMessage());
        }
    }
}