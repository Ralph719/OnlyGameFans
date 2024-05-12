package logica;

public class Consola extends Articulo{
    private String fabricante;
    private String tipo;

    // CONSTRUCTOR
    public Consola(int idArticulo, String categoria, String nombre, double precio, 
                   String fabricante, String tipo, boolean disponibilidad) {
        super(idArticulo, categoria, nombre, precio, disponibilidad);
        this.fabricante = fabricante;
        this.tipo = tipo;
    }

    // SETTERS
    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    @Override
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    @Override
    public void setDisponibilidad(boolean disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    @Override
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    
    // GETTERS
    public String getFabricante() {
        return fabricante;
    }

    public String getTipo() {
        return tipo;
    }

    @Override
    public int getIdArticulo() {
        return idArticulo;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public double getPrecio() {
        return precio;
    }

    @Override
    public boolean getDisponibilidad() {
        return disponibilidad;
    }
    
    @Override
    public String getCategoria() {
        return categoria;
    }
}