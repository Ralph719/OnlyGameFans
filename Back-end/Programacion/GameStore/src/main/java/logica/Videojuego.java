package logica;

public class Videojuego extends Articulo {
    private String desarrollador;
    private String genero;
    private String plataforma;

    // CONSTRUCTOR
    public Videojuego(int idArticulo, String categoria, String nombre, double precio, 
                      String genero, String desarrollador, 
                      String plataforma, boolean disponibilidad) {
        super(idArticulo, categoria, nombre, precio, disponibilidad);
        this.desarrollador = desarrollador;
        this.genero = genero;
        this.plataforma = plataforma;
    }

    // SETTERS
    public void setDesarrollador(String desarrollador) {
        this.desarrollador = desarrollador;
    }

    public void setGenero(String idGenero) {
        this.genero = idGenero;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
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
    public String getDesarrollador() {
        return desarrollador;
    }

    public String getGenero() {
        return genero;
    }

    public String getPlataforma() {
        return plataforma;
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