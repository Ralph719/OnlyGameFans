function iniciarSesion() {
    let usuario = document.getElementById("user").value.trim(); // Obtener el valor del campo usuario
    let contraseña = document.getElementById("pwd").value.trim(); // Obtener el valor del campo contraseña
    
    if (usuario === "" || contraseña === "") {
        alert("¡Algún dato falta!");
    } else {
        alert("¡Has iniciado sesión con éxito!");
    }

}

function mostrarContraseña() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
