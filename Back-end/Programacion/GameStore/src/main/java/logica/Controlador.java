package logica;

import java.util.List;
import persistencia.ControladorPersistencia;

public class Controlador {
    ControladorPersistencia controlPersistencia = new ControladorPersistencia();
    
    public void crearUsuario(Usuario usuario) {
        controlPersistencia.crearUsuario(usuario);
    }
    
    public boolean buscarUsuario(Usuario usuario) {
        return controlPersistencia.buscarUsuario(usuario);
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
}