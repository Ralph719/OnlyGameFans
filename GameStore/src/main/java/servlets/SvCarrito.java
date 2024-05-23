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
        
        String accion = request.getParameter("action");
        if(accion == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Acción no encontrada.");
            return;
        }
        
        try {
            switch (accion) {
                case "eliminarArticulo":
                    eliminarArticulo(request, response);
                    break;
                case "vaciarCarrito":
                    vaciarCarrito(request, response);
                    break;
                default:
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Acción desconocida.");
                    break;
            }
        } catch (ServletException | IOException e) {
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error del servidor: " + e.getMessage());
        }
    }
    
    
    protected void eliminarArticulo(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String userEmail = request.getParameter("userEmail");
            System.out.println("Usuario obtenido: " + userEmail);

            String articulo = request.getParameter("idArticulo");
            int idArticulo = Integer.parseInt(articulo);
            System.out.println("Eliminando artículo Nº" + idArticulo);

            int idUsuario = controlador.encontrarIdUsuario(userEmail);

            int codigoCarrito = controlador.encontrarCarrito(idUsuario);

            System.out.println("IdUsuario: " + idUsuario);
            System.out.println("Carrito Nº" + codigoCarrito);

            controlador.eliminarArticulo(codigoCarrito, idArticulo);
            controlador.cambiarEstadoCarrito(codigoCarrito);

        } catch (NullPointerException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    protected void vaciarCarrito(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try {
            String userEmail = request.getParameter("userEmail");
            int idUsuario = controlador.encontrarIdUsuario(userEmail);
            int codigoCarrito = controlador.encontrarCarrito(idUsuario);

            controlador.vaciarCarrito(codigoCarrito);
            controlador.cambiarEstadoCarrito(codigoCarrito);
            
        } catch (NullPointerException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }

}