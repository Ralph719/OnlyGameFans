package logica;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUsuario;
    
    @Basic
    private String nombreCompleto;
    private String username;
    private String direccion;
    private String email;
    private String password;
    
    public Usuario() {
    }

    // CONSTRUCTOR
    public Usuario(int idUsuario, String Nombre, String Username, 
                    String Direccion, String Email, String Password) {
        this.idUsuario = idUsuario;
        this.nombreCompleto = Nombre;
        this.username = Username;
        this.direccion = Direccion;
        this.email = Email;
        this.password = Password;
    }

    // SETTERS
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    public void setNombre(String Nombre) {
        this.nombreCompleto = Nombre;
    }

    public void setUsername(String Username) {
        this.username = Username;
    }

    public void setDireccion(String Direccion) {
        this.direccion = Direccion;
    }

    public void setEmail(String Email) {
        this.email = Email;
    }
    
    public void setPassword(String Password) {
        this.password = Password;
    }

    // GETTERS
    public int getIdUsuario() {
        return idUsuario;
    }
    
    public String getNombre() {
        return nombreCompleto;
    }

    public String getUsername() {
        return username;
    }

    public String getDireccion() {
        return direccion;
    }

    public String getEmail() {
        return email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void registrarUsuario() {
    }
    
    public void iniciarSesion() {
    }
}