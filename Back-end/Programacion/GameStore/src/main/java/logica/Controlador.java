package logica;

import java.util.List;
import persistencia.ControladorPersistencia;

public class Controlador {
    ControladorPersistencia controlPersistencia = new ControladorPersistencia();
    
    public void crearUsuario(Usuario usuario) {
        controlPersistencia.crearUsuario(usuario);
    }
    
    public boolean buscarUsuario(String userEmail) {
        return controlPersistencia.buscarUsuario(userEmail);
    }
    
    public boolean verificarUsuario(String username) {
        return controlPersistencia.verificarUsuario(username);
    }
    
    public boolean verificarEmail(String email) throws ClassNotFoundException {
        return controlPersistencia.verificarEmail(email);
    }
    
    public boolean verificarPassword(String userEmail, String password) {
        return controlPersistencia.verificarPassword(userEmail, password);
    }
    
    public List<Videojuego> obtenerVideojuegos() {
        return controlPersistencia.obtenerVideojuegos();
    }
    
    public List<Consola> obtenerConsolas() {
        return controlPersistencia.obtenerConsolas();
    }
    
    public void agregarArticulo(int carrito, int articulo) {
        controlPersistencia.agregarArticulo(carrito, articulo);
    }
    
    public void eliminarArticulo(int carrito, int articulo) {
        controlPersistencia.eliminarArticulo(carrito, articulo);
    }
    
    public void crearCarrito(int idUsuario) {
        controlPersistencia.crearCarrito(idUsuario);
    }
    
    public int encontrarIdUsuario(String userEmail) {
        return controlPersistencia.encontrarIdUsuario(userEmail);
    }
    
    public int encontrarCarrito(int idUsuario) {
        return controlPersistencia.encontrarCarrito(idUsuario);
    }
    
    public List<Articulo> buscarArticulosEnCarrito(int codigoCarrito) {
        return controlPersistencia.buscarArticulosEnCarrito(codigoCarrito);
    }
    
    public void cerrarRecursos() {
        controlPersistencia.cerrarRecursos();
    }
}