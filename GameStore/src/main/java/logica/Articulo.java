package logica;

public class Articulo {
    protected int idArticulo;
    protected String categoria;
    protected String nombre;
    protected double precio;
    protected int cantidad;
    protected boolean disponibilidad;
    
    public Articulo() {
    }

    // CONSTRUCTOR
    public Articulo(int idArticulo, String categoria, String nombre, 
                    double precio, boolean disponibilidad) {
        this.idArticulo = idArticulo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
    
    public Articulo(int idArticulo, String categoria, String nombre, 
                    double precio, int cantidad) {
        this.idArticulo = idArticulo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // SETTERS
    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public void setDisponibilidad(boolean disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    // GETTERS
    public int getIdArticulo() {
        return idArticulo;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public boolean getDisponibilidad() {
        return disponibilidad;
    }

    public String getCategoria() {
        return categoria;
    }
    
    public int getCantidad() {
        return cantidad;
    }
}