function guardarEnvio() {
    let direccion = document.getElementById("address").value.trim(); // Obtener el valor del campo direccion
    let pais = document.getElementById("country").value.trim(); // Obtener el valor del campo pais
    let email = document.getElementById("email").value.trim(); // Obtener el valor del campo email
    let codigoPostal = document.getElementById("ZIP").value.trim(); // Obtener el valor del campo codigo postal
    let provincia = document.getElementById("province").value.trim(); // Obtener el valor del campo provincia
    let telefono = document.getElementById("phone").value.trim(); // Obtener el valor del campo telefono
    
    if (direccion === "" || pais === "" || email === "" || codigoPostal === "" || provincia === "" || telefono === "") {
        alert("¡Algún dato falta!");
    } else {
        alert("¡Dirección de envío guardada con éxito!");
    }
}

function guardarDatos(event) {
    // Evitar el comportamiento del formulario
    event.preventDefault();

    let direccion = document.getElementById("direccion").value;
    let pais = document.getElementById("pais").value;
    let email = document.getElementById("email").value;
    let cpostal = document.getElementById("cp").value;
    let provincia = document.getElementById("provincia").value;

    localStorage.setItem("direccion", direccion);
    localStorage.setItem("pais", pais);
    localStorage.setItem("email", email);
    localStorage.setItem("cpostal", cpostal);
    localStorage.setItem("provincia", provincia);

    window.location.href = "pago.jsp";
}