package servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;
import logica.Controlador;
import logica.Articulo;

@WebServlet(name = "SvCarrito", urlPatterns = {"/SvCarrito"})
public class SvCarrito extends HttpServlet {
    Controlador controlador = new Controlador();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String userEmail = request.getParameter("userEmail");

        if (userEmail != null) {
            System.out.println("Usuario obtenido: " + userEmail);
        }

        if (controlador.buscarUsuario(userEmail)) {
            int idUsuario = controlador.encontrarIdUsuario(userEmail);

            controlador.crearCarrito(idUsuario);

            int codigoCarrito = controlador.encontrarCarrito(idUsuario);

            List<Articulo> articulosEnCarrito = controlador.buscarArticulosEnCarrito(codigoCarrito);

            // Convertimos la lista a un formato JSON y lo enviamos al js
            Gson gson = new Gson();
            String jsonArticulos = gson.toJson(articulosEnCarrito);

            response.setContentType("application/json");

            PrintWriter out = response.getWriter();
            out.print(jsonArticulos);
            out.flush();
        }
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String userEmail = request.getParameter("userEmail");
        
        String articulo = request.getParameter("idArticulo");
        int idArticulo = Integer.parseInt(articulo);

        if (userEmail != null) {
            System.out.println("Usuario obtenido: " + userEmail);
        }
        
        System.out.println("Eliminando artículo Nº" + idArticulo);
        
        if (controlador.buscarUsuario(userEmail) && idArticulo != 0) {
            int idUsuario = controlador.encontrarIdUsuario(userEmail);

            int codigoCarrito = controlador.encontrarCarrito(idUsuario);

            controlador.eliminarArticulo(codigoCarrito, idArticulo);
        }
        response.sendRedirect("carrito.jsp");
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }

}