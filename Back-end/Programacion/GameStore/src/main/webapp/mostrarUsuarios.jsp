<%-- 
    Document   : mostrarUsuarios
    Created on : 12 abr. 2024, 20:44:25
    Author     : steph
--%>

<%@page import="java.util.List" %>
<%@page import="logica.Usuario" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Mostrar Usuarios</title>
    </head>
    <body>
        <h1>Lista de Usuarios Registrados</h1>
        <%
            List<Usuario> listaUsuarios = (List)request.getSession().getAttribute("listaUsuarios");
            
            int contador = 1;
            for(Usuario usuario : listaUsuarios) {
        %>
                <p><b>Usuario nº<%=contador%></b></p>
                <p>DNI: <%=usuario.getDni()%></p>
                <p>Nombre: <%=usuario.getNombre()%></p>
                <p>Apellido: <%=usuario.getApellido()%></p>
                <p>Telefono: <%=usuario.getTelefono()%></p>
                <p>------------------------------------</p>
                <% contador++;%>
        <% } %>
    </body>
</html>
