package persistencia;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Encriptador {
    
    public String hashPassword(String password) {
        try {
            // Uso del algoritmo de hash 'SHA-256'
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            // Cálculo del hash de la contraseña
            byte[] hash = md.digest(password.getBytes());
            
            // Aquí se almacenará la representación hexadecimal del hash
            StringBuilder hexString = new StringBuilder();
            
            for(byte b : hash) {
                // Se convierte cada byte en su representación hexadecimal
                String hex = Integer.toHexString(0xff & b);
                if(hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
            
        } catch (NoSuchAlgorithmException e) {
            System.out.println("Error al intentar encriptar el password. Error: " + e);
            return null;
        }
    }
    
    /*public static void main(String[] args) {
        String usu1 = "pedro";
        String usu2 = "sara";
        String usu3 = "alex";
        String usu4 = "juan";
        String usu5 = "cristina";
        
        System.out.println(hashPassword(usu1));
        System.out.println(hashPassword(usu2));
        System.out.println(hashPassword(usu3));
        System.out.println(hashPassword(usu4));
        System.out.println(hashPassword(usu5));
    }*/
}