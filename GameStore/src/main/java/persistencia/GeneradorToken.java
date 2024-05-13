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
        
        // Convertir la clave segura a una cadena
        String claveSecreta = Base64.getEncoder().encodeToString(claveSegura.getEncoded());
        
        // Generar el token JWT con la clave segura
        return Jwts.builder()
                // El usuario del token es el correo electrónico del usuario
                .setSubject(userEmail)
                .signWith(SignatureAlgorithm.HS256, claveSecreta)
                .compact();
    }
}