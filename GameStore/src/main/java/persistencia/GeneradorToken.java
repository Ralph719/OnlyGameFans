package persistencia;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Base64;

import javax.crypto.SecretKey;

public class GeneradorToken {

    public String generarToken(String userEmail) {
        // Generar una clave segura para HS256
        SecretKey claveSegura = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        
        // Conversión de la clave a una cadena
        String claveSecreta = Base64.getEncoder().encodeToString(claveSegura.getEncoded());
        
        // Generación del token JWT con la clave
        return Jwts.builder()
                // El usuario del token es el correo electrónico del usuario
                .setSubject(userEmail)
                .signWith(SignatureAlgorithm.HS256, claveSecreta)
                .compact();
    }
}