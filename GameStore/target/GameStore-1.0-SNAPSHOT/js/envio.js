const advertencia = document.getElementById('advertencia');

// GUARDA LOS DATOS DEL FORMULARIO DE ENVÍO
function guardarDatos(event) {
    // Evitar el comportamiento del formulario
    event.preventDefault();

    let direccion = document.getElementById("direccion").value.trim();
    let pais = document.getElementById("pais").value.trim();
    let email = document.getElementById("email").value.trim();
    let cpostal = document.getElementById("cp").value.trim();
    let provincia = document.getElementById("provincia").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    // Verificación de campos vacíos
    if (direccion === "" || pais === "" || email === "" || cpostal === "" || provincia === "" || telefono === "") {
        advertencia.style.display = 'block';
        event.preventDefault();
    } else {
        localStorage.setItem("direccion", direccion);
        localStorage.setItem("pais", pais);
        localStorage.setItem("email", email);
        localStorage.setItem("cpostal", cpostal);
        localStorage.setItem("provincia", provincia);

        window.location.href = "pago.jsp";
    }
}