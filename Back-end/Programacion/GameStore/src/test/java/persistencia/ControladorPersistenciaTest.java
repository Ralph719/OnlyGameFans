package persistencia;

import logica.Usuario;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ControladorPersistenciaTest {
    
    @Test
    public void testCrearUsuario() throws Exception {
        DataSource dataSource = mock(DataSource.class);
        Connection connection = mock(Connection.class);
        PreparedStatement ps = mock(PreparedStatement.class);
        
        // Configuración del mock de DataSource
        when(dataSource.getConnection()).thenReturn(connection);
        when(connection.prepareStatement(anyString())).thenReturn(ps);

        // Creamos una instancia de ControladorPersistencia con el DataSource
        ControladorPersistencia controlador = new ControladorPersistencia(dataSource);

        // Datos de prueba
        Usuario usuario = new Usuario(1, "Nombre", "username",
                    "Dirección", "email@ejemplo.com", "password");

        // Ejecución del método a probar
        controlador.crearUsuario(usuario);

        // Verificación de que se llamó getConnection y executeUpdate correctamente
        verify(dataSource, times(1)).getConnection();
        // Verificación de que se preparó la consulta adecuada
        verify(connection, times(1))
                .prepareStatement("INSERT INTO Usuario (nombre_completo, usuario" 
                        + ", direccion, email, contraseña) VALUES (?, ?, ?, ?, ?)");
        // Verificación de que se llamó executeUpdate en el PreparedStatement
        verify(ps, times(1)).executeUpdate();
    }
    
    @Test
    public void testBuscarUsuario() throws SQLException {
        DataSource dataSource = mock(DataSource.class);
        Connection connection = mock(Connection.class);
        PreparedStatement ps = mock(PreparedStatement.class);
        ResultSet rs = mock(ResultSet.class);
        
        // Configuración del mock de DataSource
        when(dataSource.getConnection()).thenReturn(connection);
        when(connection.prepareStatement(anyString())).thenReturn(ps);
        when(ps.executeQuery()).thenReturn(rs);
        
        // Simulamos que hay un resultado en la consulta
        when(rs.next()).thenReturn(true);
        when(rs.getString("usuario")).thenReturn("testuser");
        when(rs.getString("email")).thenReturn(null);
        when(rs.getString("contraseña")).thenReturn("testpassword");

        // Creamos una instancia de ControladorPersistencia
        ControladorPersistencia controlador = new ControladorPersistencia(dataSource);

        // Datos de prueba
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");
        usuario.setPassword("testpassword");

        // Ejecución del método
        boolean resultado = controlador.buscarUsuario(usuario);

        // Verificación del resultado
        assertTrue(resultado); // Debería devolver 'true' ya que encontró el usuario
    }
}