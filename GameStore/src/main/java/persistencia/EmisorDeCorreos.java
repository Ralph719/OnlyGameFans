package persistencia;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;
import java.time.LocalDate;
import java.util.List;
import logica.Articulo;

public class EmisorDeCorreos {
    private final String host;
    private final String port;
    private final String emisor;
    private final String psw;
    
    public EmisorDeCorreos() {
        host = "smtp.gmail.com";
        port = "587";
        emisor = "onlygamefans216@gmail.com";
        psw = "DFCFYCRKPPCJHSPP";
    }
    
    public void enviarEmail(String destinatario, String nombre, int idPedido, 
                            String direccionEnvio, List<Articulo> listaArticulos, 
                            LocalDate fecha, double pagoTotal) throws MessagingException{
        // Configuración de las propiedades
        Properties ppt = new Properties();
        ppt.put("mail.smtp.host", host);
        ppt.put("mail.smtp.auth", "true");
        ppt.put("mail.smtp.port", port);
        ppt.put("mail.smtp.starttls.enable", "true");
        ppt.put("mail.mime.charset", "UTF-8");
        
        StringBuilder articulosComprados = new StringBuilder();
        
        // Muestra los detalles de cada artículo comprado
        int contador = 1;
        for(Articulo articulo : listaArticulos) {
            String comprado = "<br><p>" + contador + ". Artículo: <strong>" 
                            + articulo.getNombre() + "</strong>"
                            + "<br>- Cantidad: " + articulo.getCantidad()
                            + "<br>- Precio unitario: " + articulo.getPrecio() + "€"
                            + "<br>- Subtotal: " + (articulo.getCantidad() * articulo.getPrecio()) + "€</p>";
            articulosComprados.append(comprado);
            contador++;
        }
        
        // Asunto del correo
        String asunto = "Confirmación de tu pedido en OnlyGameFans.";
        
        // Cuerpo del correo donde se mostrará toda la información del pedido
        String cuerpo = "<html>"
                + "<body>"
                + "<p>Hola <strong>" + nombre + "</strong>,</p>"
                + "<p>¡Gracias por tu compra en <strong>OnlyGameFans</strong>!</p>"
                + "<p>Nos complace informarte que hemos recibido tu pedido. " 
                + "A continuación, encontrarás los detalles de tu compra:</p>"
                + "<p><strong>Número de Pedido:</strong> " + idPedido + "</p>"
                + "<p><strong>Fecha del Pedido:</strong> " + fecha.toString() + "</p>"
                + "<p><strong>Artículos comprados:</strong> " + articulosComprados.toString() + "</p>"
                + "<p><strong>Total del Pedido:</strong> " + pagoTotal + "€</p>"
                + "<p><strong>Dirección del envío:</strong> " + direccionEnvio + "</p>"
                + "<p>Esperamos que disfrutes de tu compra.<br>" 
                + "Si tienes alguna pregunta o necesitas asistencia adicional, " 
                + "no dudes en contactarnos respondiendo a este correo o llamando " 
                + "a nuestro servicio de atención al cliente al <strong>615 20 71 99</strong>.</p>"
                + "<p>Gracias por comprar con nosotros.</p>"
                + "<p>Atentamente,</p>"
                + "<p><strong>OnlyGameFans</strong></p>"
                + "<p>onlygamefans216@gmail.com</p>"
                + "<p>+34 615 20 71 99</p>"
                + "</body>"
                + "</html>";
        
        try {
            // Creación de la sesión
            Session session = Session.getInstance(ppt, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(emisor, psw);
                }
            });

            // Creación del mensaje
            Message mensaje = new MimeMessage(session);
            mensaje.setFrom(new InternetAddress(emisor));
            mensaje.setRecipient(Message.RecipientType.TO, new InternetAddress(destinatario));
            mensaje.setSubject(asunto);
            mensaje.setContent(cuerpo, "text/html; charset=UTF-8");

            // Envio del mensaje
            Transport.send(mensaje);
            System.out.println("Correo enviado exitosamente.");
        } catch(AuthenticationFailedException | SendFailedException e) {
            System.out.println("Error al intentar enviar el correo: " + e.getMessage());
        }
    }
}
