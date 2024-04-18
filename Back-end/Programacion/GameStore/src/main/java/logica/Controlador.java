package logica;

import java.util.List;
import persistencia.ControladorPersistencia;

public class Controlador {
    ControladorPersistencia controlPersistencia = new ControladorPersistencia();
    
    public void crearUsuario(Usuario usuario) throws ClassNotFoundException {
        try {
            controlPersistencia.crearUsuario(usuario);
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e);
        }
    }
    
    public boolean buscarUsuario(Usuario usuario) throws ClassNotFoundException {
        try {
            return controlPersistencia.buscarUsuario(usuario);
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e);
        }
        return false;
    }
    
    /*public List<Usuario> traerUsuarios() {
        return controlPersistencia.traerUsuarios();
    }*/
}