package servlets;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.util.List;
import logica.Articulo;
import logica.Controlador;
import persistencia.EmisorDeCorreos;

@WebServlet(name = "SvPedidos", urlPatterns = {"/SvPedidos"})
public class SvPedidos extends HttpServlet {
    Controlador controlador = new Controlador();
    EmisorDeCorreos correos = new EmisorDeCorreos();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String userEmail = request.getParameter("userEmail");
        
        try {
            // Obtención de los datos
            int idUsuario = controlador.encontrarIdUsuario(userEmail);
            int carritoComprado = controlador.encontrarCarritoComprado(idUsuario);
            double pagoTotal = controlador.calcularTotal(carritoComprado);
            String nombreCompleto = controlador.obtenerNombreCompleto(userEmail);
            int idPedido = controlador.obtenerIdPedido(carritoComprado);
            // Lista de los artículos del carrito comprado
            List<Articulo> articulos = controlador.buscarArticulosEnCarrito(carritoComprado);

            // Creación de los objetos JSON con los datos que se enviarán al JS
            JsonObject jsonResponse = new JsonObject();
            jsonResponse.addProperty("idPedido", idPedido);
            jsonResponse.addProperty("nombreUsuario", nombreCompleto);
            jsonResponse.addProperty("pagoTotal", pagoTotal);

            JsonArray jsonArticulos = new JsonArray();
            for (Articulo articulo : articulos) {
                JsonObject jsonArticulo = new JsonObject();
                jsonArticulo.addProperty("nombre", articulo.getNombre());
                jsonArticulo.addProperty("cantidad", articulo.getCantidad());
                jsonArticulo.addProperty("precio", articulo.getPrecio());
                jsonArticulos.add(jsonArticulo);
            }
            
            jsonResponse.add("articulos", jsonArticulos);

            // Configuración de la respuesta
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonResponse.toString());
        } catch (Exception e) {
            System.out.println("Error al cargar el resumen de compra: " + e.getMessage());
        }
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Obtención de los datos del envío
        String userEmail = request.getParameter("userEmail");
        String direccion = request.getParameter("direccion");
        String pais = request.getParameter("pais");
        String cpostal = request.getParameter("cpostal");
        String provincia = request.getParameter("provincia");
        String email = request.getParameter("email");

        // Verificación de campos vacíos
        if (userEmail == null || direccion == null || pais == null 
            || cpostal == null || provincia == null || email == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Faltan parámetros necesarios.");
            return;
        }

        direccion = direccion.trim();
        pais = pais.trim();
        cpostal = cpostal.trim();
        provincia = provincia.trim();
        email = email.trim();
        
        // Dirección que se almacena finalmente en la BBDD
        String direccionCompleta = direccion + ", " + cpostal + ", " 
                                 + provincia + ", " + pais;
        
        System.out.println(direccionCompleta);
        
        try {
            int idUsuario = controlador.encontrarIdUsuario(userEmail);
            int codigoCarrito = controlador.encontrarCarrito(idUsuario);
            double pagoTotal = controlador.calcularTotal(codigoCarrito);
            String nombreCompleto = controlador.obtenerNombreCompleto(userEmail);
            LocalDate fechaCompra = LocalDate.now();
            // Lista de los artículos del carrito a comprar
            List<Articulo> articulos = controlador.buscarArticulosEnCarrito(codigoCarrito);

            // Creación del pedido
            controlador.crearPedido(pagoTotal, direccionCompleta, 
                                    fechaCompra,idUsuario, codigoCarrito);
            
            int idPedido = controlador.obtenerIdPedido(codigoCarrito);
            
            // Envío del correo con los datos correspondientes
            correos.enviarEmail(email, nombreCompleto, idPedido, 
                                direccionCompleta, articulos, 
                                fechaCompra, pagoTotal);
        } catch(Exception e) {
            System.out.println("Error al procesar el pago: " + e.getMessage());
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al procesar el pago.");
        }
    }
    
    @Override
    public String getServletInfo() {
        return "Short description";
    }
}