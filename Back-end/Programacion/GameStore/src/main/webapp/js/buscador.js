// BUSCADOR DE ARTÍCULOS
document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key === "Escape") {
            e.target.value = "";
        }

        document.querySelectorAll(".producto").forEach(articulo => {

            if (articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                articulo.classList.remove("filtro");
                articulo.classList.add("enabled");
            } else {
                articulo.classList.remove("enabled");
                articulo.classList.add("filtro");
            }
        })
    }
});


// ENFOQUE DEL BUSCADOR AL DARLE AL BOTÓN SEARCH
let inputEnfocado = false;

document.querySelector(".botonBuscador").addEventListener("click", () => {
    const buscador = document.getElementById("buscador");
    
    if (inputEnfocado) {
        buscador.blur();
        inputEnfocado = false;
    } else {
        buscador.focus();
        inputEnfocado = true;
    }
});