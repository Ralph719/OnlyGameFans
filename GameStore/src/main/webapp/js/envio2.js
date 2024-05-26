function guardarEnvio() {
    let direccion = document.getElementById("address").value.trim();
    let pais = document.getElementById("country").value.trim();
    let email = document.getElementById("email").value.trim();
    let codigoPostal = document.getElementById("ZIP").value.trim();
    let provincia = document.getElementById("province").value.trim();
    let telefono = document.getElementById("phone").value.trim();
    
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