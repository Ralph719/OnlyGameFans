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
        // Configurar las propiedades
        Properties ppt = new Properties();
        ppt.put("mail.smtp.host", host);
        ppt.put("mail.smtp.auth", "true");
        ppt.put("mail.smtp.port", port);
        ppt.put("mail.smtp.starttls.enable", "true");
        
        StringBuilder articulosComprados = new StringBuilder();
        
        // Muestra los detalles de cada artículo comprado
        int contador = 1;
        for(Articulo articulo : listaArticulos) {
            String comprado = "\n\n" + contador + ". Artículo: " + articulo.getNombre() 
                            + "\n- Cantidad: " + articulo.getCantidad()
                            + "\n- Precio unitario: " + articulo.getPrecio() + "€"
                            + "\n- Subtotal: " + articulo.getCantidad()*articulo.getPrecio() + "€";
            articulosComprados.append(comprado);
            contador++;
        }
        
        // Asunto del correo
        String asunto = "Confirmación de tu pedido en OnlyGameFans.";
        
        // Cuerpo del correo donde se mostrará toda la información del pedido
        String cuerpo = "Hola " + nombre + ", \n" + "¡Gracias por tu compra en OnlyGameFans!" 
               + "\n\nNos complace informarte que hemos recibido tu pedido. " 
               + "A continuación, encontrarás los detalles de tu compra: " 
               + "\nNúmero de Pedido: " + idPedido
               + "\nFecha del Pedido: " + fecha.toString() 
               + "\n\nArtículos comprados: " + articulosComprados 
               + "\n\nTotal del Pedido: " + pagoTotal + "€" 
               + "\nDirección del envío: " + direccionEnvio
               + "\n\nEsperamos que disfrutes de tu compra." 
               + "\nSi tienes alguna pregunta o necesitas asistencia adicional, " 
               + "no dudes en contactarnos respondiendo a este correo o llamando " 
               + "a nuestro servicio de atención al cliente al 615 20 71 99." 
               + "\nGracias por comprar con nosotros.\n\nAtentamente,\n\nOnlyGameFans" 
               + "\nonlygamefans216@gmail.com" + "\n+34 615 20 71 99";
        
        try {
            // Crear sesión
            Session session = Session.getInstance(ppt, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(emisor, psw);
                }
            });

            // Crear mensaje
            Message mensaje = new MimeMessage(session);
            mensaje.setFrom(new InternetAddress(emisor));
            mensaje.setRecipient(Message.RecipientType.TO, new InternetAddress(destinatario));
            mensaje.setSubject(asunto);
            mensaje.setText(cuerpo);

            // Enviar el mensaje
            Transport.send(mensaje);
            System.out.println("Correo enviado exitosamente.");
        } catch(AuthenticationFailedException | SendFailedException e) {
            System.out.println("Error al intentar enviar el correo: " + e.getMessage());
        }
    }
}
