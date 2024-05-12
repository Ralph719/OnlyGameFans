package com.mycompany.web.listener;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import com.mysql.cj.jdbc.AbandonedConnectionCleanupThread;

public class ContextListener implements ServletContextListener {

    /*@Override
    public void contextInitialized(ServletContextEvent sce) {
        // Este método se llama cuando se inicializa el contexto de la aplicación
        // Aquí puedes realizar inicializaciones si es necesario
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        // Este método se llama cuando se destruye el contexto de la aplicación
        // Aquí puedes realizar limpieza de recursos y detener el hilo de limpieza de conexiones abandonadas
        try {
            AbandonedConnectionCleanupThread.shutdown();
        } catch (InterruptedException e) {
            // Manejo de excepciones si hay algún problema al detener el hilo
            e.printStackTrace();
        }
    }*/
}