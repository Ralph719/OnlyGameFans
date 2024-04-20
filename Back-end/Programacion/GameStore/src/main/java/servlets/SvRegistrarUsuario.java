package servlets;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import logica.Usuario;
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
    Encriptador encriptar = new Encriptador();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String userEmail = request.getParameter("userEmail").trim();
        String password = request.getParameter("password").trim();
        
        Usuario usuario = new Usuario();
        
        usuario.setUsername(userEmail);
        
        String hashedPassword = encriptar.hashPassword(password);
        usuario.setPassword(hashedPassword);
        
        try {
            if(controlador.buscarUsuario(usuario)) {
                System.out.println("Inicio de sesión exitoso.");
                response.sendRedirect("../../../Front-end/CarritoDeCompras/index.html");
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Error: " + e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String nombreCompleto = request.getParameter("nombreCompleto").trim();
        String username = request.getParameter("username").trim();
        String direccion = request.getParameter("direccion").trim();
        String email = request.getParameter("email").trim();
        String password = request.getParameter("password").trim();
        String password2 = request.getParameter("password2").trim();

        boolean campoVacio = nombreCompleto.isEmpty() || username.isEmpty() || direccion.isEmpty()
                || email.isEmpty() || password.isEmpty() || password2.isEmpty();

        boolean passwordNotEquals = !password.equals(password2);

        boolean usernameRepetido = false;
        boolean emailRepetido = false;

        if (!campoVacio && !passwordNotEquals) {
            try {
                if (controlador.verificarUsuario(username)) {
                    usernameRepetido = true;
                }
                
                // Esto funciona al revés ------------------------------------------------

                if (controlador.verificarEmail(email)) {
                    emailRepetido = true;
                }

                if (!usernameRepetido && !emailRepetido) {
                    Usuario usuario = new Usuario();
                    usuario.setNombre(nombreCompleto);
                    usuario.setUsername(username);
                    usuario.setDireccion(direccion);
                    usuario.setEmail(email);

                    String hashedPassword = encriptar.hashPassword(password);
                    usuario.setPassword(hashedPassword);

                    controlador.crearUsuario(usuario);
                    response.sendRedirect("inicioSesion.jsp");

                    return; // Salir del método después de la redirección
                }
            } catch (ClassNotFoundException e) {
                System.out.println("Error: " + e);
            }
        }

        // Configurar atributos y reenviar al JSP
        request.setAttribute("campoVacio", campoVacio);
        request.setAttribute("passwordNotEquals", passwordNotEquals);
        request.setAttribute("usernameRepetido", usernameRepetido);
        request.setAttribute("emailRepetido", emailRepetido);
        request.setAttribute("params", request.getParameterMap());

        RequestDispatcher dispatcher = request.getRequestDispatcher("registrocuenta.jsp");
        dispatcher.forward(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
