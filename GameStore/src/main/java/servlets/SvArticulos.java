package servlets;

import com.google.gson.Gson;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import logica.Consola;
import logica.Controlador;
import logica.Videojuego;

@WebServlet(name = "SvArticulos", urlPatterns = {"/SvArticulos"})
public class SvArticulos extends HttpServlet {
    Controlador controlador = new Controlador();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Obtener listas de videojuegos y consolas
        List<Videojuego> listaVideojuegos = controlador.obtenerVideojuegos();
        List<Consola> listaConsolas = controlador.obtenerConsolas();

        // Almacenamos ambas listas en un hashmap
        Map<String, Object> data = new HashMap<>();
        data.put("videojuegos", listaVideojuegos);
        data.put("consolas", listaConsolas);

        // Luego la convertimos a formato JSON
        Gson gson = new Gson();
        String json = gson.toJson(data);

        // Respuesta JSON al cliente
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try {
            // Usuario obtenido del inicio de sesión
            String userEmail = request.getParameter("userEmail");
            
            String idProducto = request.getParameter("idProducto");

            int idArticulo = Integer.parseInt(idProducto);
            
            if(userEmail != null) {
                System.out.println("Usuario obtenido: " + userEmail);
            }
            
            if(idArticulo != 0) {
                System.out.println("Artículo Nº" + idArticulo + " obtenido");
            }

            if (controlador.buscarUsuario(userEmail)) {
                int idUsuario = controlador.encontrarIdUsuario(userEmail);

                // Crea un nuevo carrito para el usuario si no tiene uno
                controlador.crearCarrito(idUsuario);

                // Buscar el carrito asociado al usuario
                int codigoCarrito = controlador.encontrarCarrito(idUsuario);

                // Se agrega el artículo al carrito
                controlador.agregarArticulo(codigoCarrito, idArticulo);

                System.out.println("Operación realizada con éxito.");
            }
            
            response.sendRedirect("articulos.jsp");
            
        } catch(NumberFormatException e) {
            System.out.println("Valor no encontrado para el idArticulo: " + e.getMessage());
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }
}