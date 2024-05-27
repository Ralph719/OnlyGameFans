// Almacena el token en el almacenamiento local del navegador
localStorage.setItem('token', token);

// Envía el token con cada solicitud al servidor
fetch('http://localhost:8080/GameStore/SvRegistrarUsuario', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
.then(response => {
    console.log(token);
})
.catch(error => {
    console.error('Error:', error);
});