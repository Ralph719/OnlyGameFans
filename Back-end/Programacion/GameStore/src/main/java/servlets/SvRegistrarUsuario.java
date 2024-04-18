package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import logica.Usuario;
import java.util.List;
import java.util.ArrayList;
import logica.Controlador;
import persistencia.Encriptador;
/*import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;*/

/**
 *
 * @author steph
 */
@WebServlet(name = "SvRegistrarUsuario", urlPatterns = {"/SvRegistrarUsuario"})
public class SvRegistrarUsuario extends HttpServlet {
    Controlador controlador = new Controlador();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String userEmail = request.getParameter("userEmail");
        String password = request.getParameter("password");
        
        Usuario usuario = new Usuario();
        
        if(userEmail.contains("@")) {
            usuario.setEmail(userEmail);
        } else {
            usuario.setUsername(userEmail);
        }
        
        Encriptador encriptar = new Encriptador();
        String hashedPassword = encriptar.hashPassword(password);
        usuario.setPassword(hashedPassword);
        
        try {
            if(controlador.buscarUsuario(usuario)) {
                System.out.println("Inicio de sesión exitoso.");
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e);
        }
        
        /*List<Usuario> listaUsuarios = new ArrayList<>();
        listaUsuarios = controlador.traerUsuarios();
        
        HttpSession miSesion = request.getSession();
        miSesion.setAttribute("listaUsuarios", listaUsuarios);
        
        response.sendRedirect("mostrarUsuarios.jsp");*/
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String nombreCompleto = request.getParameter("nombreCompleto");
        String username = request.getParameter("username");
        int edad = Integer.parseInt(request.getParameter("edad"));
        String direccion = request.getParameter("direccion");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        Usuario usuario = new Usuario();
        usuario.setNombre(nombreCompleto);
        usuario.setUsername(username);
        usuario.setEdad(edad);
        usuario.setDireccion(direccion);
        usuario.setEmail(email);
        
        Encriptador encriptar = new Encriptador();
        String hashedPassword = encriptar.hashPassword(password);
        usuario.setPassword(hashedPassword);
        
        try {
            controlador.crearUsuario(usuario);
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e);
        }
        
        response.sendRedirect("inicioSesion.jsp");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
