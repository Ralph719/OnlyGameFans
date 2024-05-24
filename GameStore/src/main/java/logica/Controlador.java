package logica;

import java.time.LocalDate;
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
    
    public void vaciarCarrito(int carrito) {
        controlPersistencia.vaciarCarrito(carrito);
    }
    
    public void cambiarEstadoCarrito(int carrito) {
        controlPersistencia.cambiarEstadoCarrito(carrito);
    }
    
    public void crearCarrito(int idUsuario) {
        controlPersistencia.crearCarrito(idUsuario);
    }
    
    public int encontrarIdUsuario(String userEmail) {
        return controlPersistencia.encontrarIdUsuario(userEmail);
    }
    
    public String obtenerNombreCompleto(String userEmail) {
        return controlPersistencia.obtenerNombreCompleto(userEmail);
    }
    
    public int encontrarCarrito(int idUsuario) {
        return controlPersistencia.encontrarCarrito(idUsuario);
    }
    
    public List<Articulo> buscarArticulosEnCarrito(int codigoCarrito) {
        return controlPersistencia.buscarArticulosEnCarrito(codigoCarrito);
    }
    
    public double calcularTotal(int carrito) {
        return controlPersistencia.calcularTotal(carrito);
    }
    
    public void crearPedido(double pagoTotal, String direccion, 
                            LocalDate fechaCompra, int usuario, int carrito) {
        controlPersistencia.crearPedido(pagoTotal, direccion, fechaCompra, usuario, carrito);
    }
    
    public int obtenerIdPedido(int carrito) {
        return controlPersistencia.obtenerIdPedido(carrito);
    }
    
    public void cerrarRecursos() {
        controlPersistencia.cerrarRecursos();
    }
}