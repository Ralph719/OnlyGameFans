package servlets;

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
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String userEmail = request.getParameter("userEmail");
        String direccion = request.getParameter("direccion");
        String pais = request.getParameter("pais");
        String cpostal = request.getParameter("cpostal");
        String provincia = request.getParameter("provincia");
        String email = request.getParameter("email");

        if (userEmail == null || direccion == null || pais == null || cpostal == null || provincia == null || email == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Faltan parámetros necesarios.");
            return;
        }

        direccion = direccion.trim();
        pais = pais.trim();
        cpostal = cpostal.trim();
        provincia = provincia.trim();
        email = email.trim();
        
        String direccionCompleta = direccion + ", " + cpostal + ", " 
                                 + provincia + ", " + pais;
        
        System.out.println(direccionCompleta);
        
        try {
            int idUsuario = controlador.encontrarIdUsuario(userEmail);
            int codigoCarrito = controlador.encontrarCarrito(idUsuario);
            double pagoTotal = controlador.calcularTotal(codigoCarrito);
            String nombreCompleto = controlador.obtenerNombreCompleto(userEmail);
            LocalDate fechaCompra = LocalDate.now();
            List<Articulo> articulos = controlador.buscarArticulosEnCarrito(codigoCarrito);

            controlador.crearPedido(pagoTotal, direccionCompleta, fechaCompra,
                    idUsuario, codigoCarrito);
            
            int idPedido = controlador.obtenerIdPedido(codigoCarrito);
            
            correos.enviarEmail(email, nombreCompleto, idPedido, 
                                direccionCompleta, articulos, 
                                fechaCompra, pagoTotal);

            response.sendRedirect("articulos.jsp");
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