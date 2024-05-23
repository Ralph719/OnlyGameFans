package servlets;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import logica.Controlador;
import java.time.LocalDate;

@WebServlet(name = "SvPedidos", urlPatterns = {"/SvPedidos"})
public class SvPedidos extends HttpServlet {
    Controlador controlador = new Controlador();
    
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
        String direccion = request.getParameter("direccion").trim();
        String pais = request.getParameter("pais").trim();
        String cpostal = request.getParameter("cp").trim();
        String provincia = request.getParameter("provincia").trim();
        String email = request.getParameter("email").trim();
        
        String direccionCompleta = direccion + ", " + cpostal + ", " 
                                 + provincia + ", " + pais;
        
        int idUsuario = controlador.encontrarIdUsuario(userEmail);
        int codigoCarrito = controlador.encontrarCarrito(idUsuario);
        double pagoTotal = controlador.calcularTotal(codigoCarrito);
        LocalDate fechaCompra = LocalDate.now();
        
        controlador.crearPedido(pagoTotal, direccionCompleta, fechaCompra, 
                                idUsuario, codigoCarrito);
        
        response.sendRedirect("articulos.jsp");
    }
    
    @Override
    public String getServletInfo() {
        return "Short description";
    }
}