package persistencia;

import logica.Usuario;
import logica.Videojuego;
import logica.Consola;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import logica.Articulo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;

public class ControladorPersistenciaTest {
    ControladorPersistencia controlador;
    DataSource dataSource;
    Connection connection;
    PreparedStatement ps;
    ResultSet rs;
    
    @BeforeEach
    public void setUp() throws SQLException {
        // Inicialización de los objetos necesarios para cada prueba
        dataSource = mock(DataSource.class);
        connection = mock(Connection.class);
        ps = mock(PreparedStatement.class);
        rs = mock(ResultSet.class);

        // Configuración del mock de DataSource
        when(dataSource.getConnection()).thenReturn(connection);
        when(connection.prepareStatement(anyString())).thenReturn(ps);
        when(ps.executeQuery()).thenReturn(rs);


        // Creación de la instancia de ControladorPersistencia con el DataSource
        controlador = new ControladorPersistencia(dataSource);
    }
    
    @Test
    public void testCrearUsuario() throws Exception {
        // Creamos una instancia de ControladorPersistencia con el DataSource
        controlador = new ControladorPersistencia(dataSource);

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
        // Ejecución del método a probar
        boolean resultado = controlador.buscarUsuario("email@ejemplo.com");

        // Verificación de que se llamó getConnection y executeQuery correctamente
        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        verify(ps, atLeastOnce()).setString(anyInt(), eq("email@ejemplo.com"));
        verify(rs, atLeastOnce()).next();

        // Verificación del resultado
        assertFalse(resultado);
    }
    
    
    @Test
    public void testVerificarPassword() throws SQLException {
        // Caso de prueba para contraseña correcta
        when(rs.next()).thenReturn(true);
        when(rs.getString("contraseña")).thenReturn("contraseña_correcta");
        assertTrue(controlador.verificarPassword("usuario_o_email", "contraseña_correcta"));

        // Caso de prueba para contraseña incorrecta o usuario/email que no existe
        when(rs.next()).thenReturn(false);
        assertFalse(controlador.verificarPassword("usuario_o_email", "contraseña_incorrecta"));
    }
    
    
    @Test
    public void testObtenerVideojuegos() throws SQLException {
        // Simularemos dos filas de datos
        when(rs.next()).thenReturn(true, true, false);
        
        // Simulamos los datos de los videjuegos
        when(rs.getInt("id_articulo")).thenReturn(1, 2);
        when(rs.getString("nombre")).thenReturn("Juego1", "Juego2");
        when(rs.getDouble("precio")).thenReturn(50.0, 60.0);
        when(rs.getString("genero")).thenReturn("Acción", "Aventura");
        when(rs.getString("desarrollador")).thenReturn("Desarrollador1", "Desarrollador2");
        when(rs.getString("plataforma")).thenReturn("Plataforma1", "Plataforma2");
        when(rs.getInt("disponibilidad")).thenReturn(1, 0);

        // Método a probar
        List<Videojuego> listaVideojuegos = controlador.obtenerVideojuegos();

        // Verificación de que se llamó getConnection y executeQuery correctamente
        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        verify(ps, atLeastOnce()).executeQuery();

        // Verifica que se hayan devuelto dos videojuegos
        assertEquals(2, listaVideojuegos.size());

        // Verifica los detalles del primer videojuego
        Videojuego primerVideojuego = listaVideojuegos.get(0);
        assertEquals(1, primerVideojuego.getIdArticulo());
        assertEquals("Juego1", primerVideojuego.getNombre());
        assertEquals(50.0, primerVideojuego.getPrecio());
        assertEquals("Acción", primerVideojuego.getGenero());
        assertEquals("Desarrollador1", primerVideojuego.getDesarrollador());
        assertEquals("Plataforma1", primerVideojuego.getPlataforma());
        assertTrue(primerVideojuego.getDisponibilidad());

        // Verifica los detalles del segundo videojuego
        Videojuego segundoVideojuego = listaVideojuegos.get(1);
        assertEquals(2, segundoVideojuego.getIdArticulo());
        assertEquals("Juego2", segundoVideojuego.getNombre());
        assertEquals(60.0, segundoVideojuego.getPrecio());
        assertEquals("Aventura", segundoVideojuego.getGenero());
        assertEquals("Desarrollador2", segundoVideojuego.getDesarrollador());
        assertEquals("Plataforma2", segundoVideojuego.getPlataforma());
        assertFalse(segundoVideojuego.getDisponibilidad());
    }
    
    
    @Test
    public void testObtenerConsolas() throws SQLException {
        // Configuración del mock del ResultSet para devolver datos simulados
        when(rs.next()).thenReturn(true, true, false);
        
        when(rs.getInt("id_articulo")).thenReturn(1, 2);
        when(rs.getString("nombre")).thenReturn("Consola1", "Consola2");
        when(rs.getDouble("precio")).thenReturn(200.0, 300.0);
        when(rs.getString("fabricante")).thenReturn("Fabricante1", "Fabricante2");
        when(rs.getString("tipo")).thenReturn("Tipo1", "Tipo2");
        when(rs.getInt("disponibilidad")).thenReturn(1, 0);

        // Ejecución del método a probar
        List<Consola> listaConsolas = controlador.obtenerConsolas();

        // Verificación de que se llamó getConnection y executeQuery correctamente
        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        verify(ps, atLeastOnce()).executeQuery();

        // Verifica que se hayan devuelto dos consolas
        assertEquals(2, listaConsolas.size());

        // Verifica los detalles de la primera consola
        Consola primeraConsola = listaConsolas.get(0);
        assertEquals(1, primeraConsola.getIdArticulo());
        assertEquals("Consola1", primeraConsola.getNombre());
        assertEquals(200.0, primeraConsola.getPrecio());
        assertEquals("Fabricante1", primeraConsola.getFabricante());
        assertEquals("Tipo1", primeraConsola.getTipo());
        assertTrue(primeraConsola.getDisponibilidad());

        // Verifica los detalles de la segunda consola
        Consola segundaConsola = listaConsolas.get(1);
        assertEquals(2, segundaConsola.getIdArticulo());
        assertEquals("Consola2", segundaConsola.getNombre());
        assertEquals(300.0, segundaConsola.getPrecio());
        assertEquals("Fabricante2", segundaConsola.getFabricante());
        assertEquals("Tipo2", segundaConsola.getTipo());
        assertFalse(segundaConsola.getDisponibilidad());
    }
    
    
    @Test
    public void testEncontrarCarrito() throws SQLException {
        // Simulamos que se encuentra un carrito para el usuario
        when(rs.next()).thenReturn(true);
        when(rs.getInt("codigo_carrito")).thenReturn(123);

        // Ejecutamos el método a probar
        int codigoCarrito = controlador.encontrarCarrito(1);
        
        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        
        // Verificamos que se pasó el idUsuario y estado correctamente
        verify(ps, atLeastOnce()).setInt(1, 1);
        verify(ps, atLeastOnce()).setString(2, "Comprado");
        verify(ps, atLeastOnce()).executeQuery();

        // Verificamos que se devolvió el código de carrito esperado
        assertEquals(123, codigoCarrito);
    }
    
    
    @Test
    public void testAgregarArticulo() throws SQLException {
        // Ejecutamos el método a probar
        controlador.agregarArticulo(1, 1);

        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        
        // Verificamos que se pasó el código del carrito y el id del artículo correctamente
        verify(ps, atLeastOnce()).setInt(1, 1);
        verify(ps, atLeastOnce()).setInt(2, 1);
        verify(ps, atLeastOnce()).executeUpdate();
    }
    
    
    @Test
    public void testBuscarArticulosEnCarrito() throws SQLException {
        // Simulamos que hay un artículo y luego no hay más 
        when(rs.next()).thenReturn(true).thenReturn(false);
        
        // Simulamos los datos del artículo
        when(rs.getInt("id_articulo")).thenReturn(1);
        when(rs.getString("nombre")).thenReturn("Artículo de Prueba");
        when(rs.getDouble("precio")).thenReturn(20.0);

        // Ejecutamos el método a probar
        List<Articulo> articulosEnCarrito = controlador.buscarArticulosEnCarrito(1);

        verify(dataSource, atLeastOnce()).getConnection();
        verify(connection, atLeastOnce()).prepareStatement(anyString());
        
        // Verificamos que se pasó el código de carrito correctamente
        verify(ps, atLeastOnce()).setInt(1, 1);
        verify(ps, atLeastOnce()).executeQuery();

        // Verificamos que se creó correctamente la lista de artículos y se agregó el artículo simulado
        assertFalse(articulosEnCarrito.isEmpty());
        assertEquals(1, articulosEnCarrito.size());
        
        Articulo articulo = articulosEnCarrito.get(0);
        assertEquals(1, articulo.getIdArticulo());
        assertEquals("Artículo de Prueba", articulo.getNombre());
        assertEquals(20.0, articulo.getPrecio());
    }
}