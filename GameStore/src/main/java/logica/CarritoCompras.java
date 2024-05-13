package logica;

import java.util.ArrayList;
import java.util.List;

public class CarritoCompras {
    private int codigoCarrito;
    private String estado;
    private int idUsuario;
    private List<Articulo> listaArticulos;
    
    public CarritoCompras() {
    }

    // CONSTRUCTOR
    public CarritoCompras(int codigoCarrito, String estado, 
                          int idUsuario, List<Articulo> listaArticulos) {
        this.codigoCarrito = codigoCarrito;
        this.estado = estado;
        this.idUsuario = idUsuario;
        this.listaArticulos = listaArticulos;
        listaArticulos = new ArrayList<>();
    }

    // SETTERS
    public void setCodigoCarrito(int codigoCarrito) {
        this.codigoCarrito = codigoCarrito;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    // GETTERS
    public int getCodigoCarrito() {
        return codigoCarrito;
    }

    public String getEstado() {
        return estado;
    }

    public int getIdUsuario() {
        return idUsuario;
    }
}