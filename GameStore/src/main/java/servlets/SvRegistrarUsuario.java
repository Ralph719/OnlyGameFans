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
import persistencia.GeneradorToken;

/**
 *
 * @author steph
 */
@WebServlet(name = "SvRegistrarUsuario", urlPatterns = {"/SvRegistrarUsuario"})
public class SvRegistrarUsuario extends HttpServlet {
    Controlador controlador = new Controlador();
    Encriptador encriptar = new Encriptador();
    GeneradorToken generador = new GeneradorToken();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String userEmail = request.getParameter("userEmail").trim();
        String password = request.getParameter("password").trim();

        String hashedPassword = encriptar.hashPassword(password);

        boolean campoVacio = userEmail.isEmpty() || password.isEmpty();

        boolean userEmailNotExist = false;
        boolean passwordWrong = false;

        if (!campoVacio) {
            try {
                if (!controlador.verificarUsuario(userEmail) && !controlador.verificarEmail(userEmail)) {
                    userEmailNotExist = true;
                } else {
                    if (!controlador.verificarPassword(userEmail, hashedPassword)) {
                        passwordWrong = true;
                    }
                }
            } catch (ClassNotFoundException e) {
                System.out.println("Error al cargar alguna clase: " + e);
            }
            if (!userEmailNotExist && !passwordWrong) {
                // Si los datos ingresados son correctos, redirigir al usuario a la página principal
                response.sendRedirect("articulos.jsp");
                return;
            }
        }

        // Configurar atributos y reenviar al JSP
        request.setAttribute("campoVacio", campoVacio);
        request.setAttribute("userEmailNotExist", userEmailNotExist);
        request.setAttribute("passwordWrong", passwordWrong);
        request.setAttribute("params", request.getParameterMap());

        RequestDispatcher dispatcher = request.getRequestDispatcher("inicioSesion.jsp");
        dispatcher.forward(request, response);
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
            if (controlador.verificarUsuario(username)) {
                usernameRepetido = true;
            }

            try {
                if (controlador.verificarEmail(email)) {
                    emailRepetido = true;
                }
            } catch (ClassNotFoundException e) {
                System.out.println("Error al cargar alguna clase: " + e);
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
        }

        // Configurar atributos y reenviar al registro
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
