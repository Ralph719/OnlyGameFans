let close_button = document.getElementById('close-button');
close_button.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('choosePayment').style.display = "none";
});


// OBTENER INFORMACIÓN DE LOS INPUTS
const visaInput = document.getElementById('visa');
const mastercardInput = document.getElementById('mastercard');

// Función para cambiar la imagen de la tarjeta según la opción seleccionada
function actualizarImagenTarjeta(opcionSeleccionada) {
    const logoVisa = document.getElementById('imgVisa');
    const logoMastercard = document.getElementById('imgMastercard');

    if (opcionSeleccionada === 'visa') {
        logoVisa.style.display = "inline";
        logoMastercard.style.display = "none";
    } else if (opcionSeleccionada === 'mastercard') {
        logoVisa.style.display = "none";
        logoMastercard.style.display = "inline";
    }
}

// Evento para el input de radio Visa
visaInput.addEventListener('change', () => {
    if (visaInput.checked) {
        actualizarImagenTarjeta('visa');
    }
});

// Evento para el input de radio Mastercard
mastercardInput.addEventListener('change', () => {
    if (mastercardInput.checked) {
        actualizarImagenTarjeta('mastercard');
    }
});


const tarjeta = document.querySelector('#tarjeta'),
        formulario = document.querySelector('#formulario-tarjeta'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector('#tarjeta .firma p'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccv = document.querySelector('#tarjeta .ccv');


document.addEventListener('DOMContentLoaded', function () {
    const formularioTarjeta = document.getElementById('formulario-tarjeta');
    const selectMes = document.getElementById('selectMes');
    const selectYear = document.getElementById('selectYear');
    const advertencia = document.getElementById('advertencia');

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i.toString().padStart(2, '0');
        option.text = i.toString().padStart(2, '0');
        selectMes.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= currentYear + 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectYear.appendChild(option);
    }

    formularioTarjeta.addEventListener('submit', function (event) {
        const inputNumero = document.getElementById('inputNumero').value.trim();
        const inputNombre = document.getElementById('inputNombre').value.trim();
        const inputCCV = document.getElementById('inputCCV').value.trim();
        const mes = selectMes.value;
        const year = selectYear.value;

        // Verifica que ningún campo esté vacío
        if (!inputNumero || !inputNombre || !mes || !year || !inputCCV) {
            advertencia.style.display = 'block';
            event.preventDefault();
        } else {
            // Si todos los datos se completaron correctamente 
            advertencia.style.display = 'none';
            // Se inicia el proceso de creación del pedido
            enviarDatos();
            mostrarModalCarga();
            limpiarDatosDeEnvio();
            event.preventDefault(); // Evita el envío del formulario
        }
    });
});

// Input número de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
            // Eliminamos espacios en blanco
            .replace(/\s/g, '')
            // Eliminar las letras
            .replace(/\D/g, '')
            // Ponemos espacio cada cuatro numeros
            .replace(/([0-9]{4})/g, '$1 ')
            // Elimina el ultimo espaciado
            .trim();

    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

});

// Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

});

// Selector de mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
});

// Selector de año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
});

// CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
            // Eliminar los espacios
            .replace(/\s/g, '')
            // Eliminar las letras
            .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});

var userEmail = localStorage.getItem("userEmail");

// Obtener el email del localStorage y asignarlo al campo de entrada oculto
document.addEventListener('DOMContentLoaded', function () {
    if (userEmail) {
        document.getElementById("userEmail").value = userEmail;
    }
});

// Envia los datos necesarios al servlet para poder crear el pedido
function enviarDatos() {
    let direccion = localStorage.getItem("direccion");
    let pais = localStorage.getItem("pais");
    let email = localStorage.getItem("email");
    let cpostal = localStorage.getItem("cpostal");
    let provincia = localStorage.getItem("provincia");

    if (userEmail && direccion && pais && email && cpostal && provincia) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "SvPedidos", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        var data = "userEmail=" + encodeURIComponent(userEmail)
                + "&direccion=" + encodeURIComponent(direccion)
                + "&pais=" + encodeURIComponent(pais)
                + "&email=" + encodeURIComponent(email)
                + "&cpostal=" + encodeURIComponent(cpostal)
                + "&provincia=" + encodeURIComponent(provincia);

        xhr.send(data);
    }
}

// Limpia los datos de la dirección de envío en el LocalStorage
function limpiarDatosDeEnvio() {
    let datosPorEliminar = ["direccion", "pais", "email", "cpostal", "provincia"];

    datosPorEliminar.forEach(dato => {
        localStorage.removeItem(dato);
    });
}

// VENTANA EMERGENTE
var carga = document.getElementById("carga");
var opciones = document.getElementById("opciones");
var resumen = document.getElementById("resumen");
var spanClose = document.getElementsByClassName("close");

// ABRIR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN EL BOTÓN
function mostrarModalCarga() {
    carga.style.display = "flex";

    // CERRAR LA VENTANA EMERGENTE DESPUÉS DE 2 SEGUNDOS
    setTimeout(function () {
        carga.style.display = "none";
        mostrarModalOpciones();
    }, 2000);
}

function mostrarModalOpciones() {
    opciones.style.display = "flex";
}

// ABRIR LA VENTANA EMERGENTE DE RESUMEN
function mostrarModalResumen() {
    resumen.style.display = "flex";
}

// CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK EN LA X
for (var i = 0; i < spanClose.length; i++) {
    spanClose[i].onclick = function () {
        resumen.style.display = "none";
    };
}

// CERRAR LA VENTANA EMERGENTE CUANDO SE HACE CLICK FUERA DE LA VENTANA EMERGENTE
window.onclick = function(event) {
  if (event.target == resumen) {
    resumen.style.display = "none";
  }
};

// FUNCIÓN PARA VER EL RESUMEN DE COMPRA
function verResumenCompra() {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    const url = `SvPedidos?${params}`;
    
    // LLamada del método GET
    fetch(url)
            .then(response => response.json())
            .then(data => {
                // Mostrar datos del resumen de compra
                let resumen = document.getElementById("resumen-content");
                resumen.innerHTML = '';
                
                resumen.innerHTML = `
                    <h3>RESUMEN DE COMPRA</h3>
                    <p><b>ID Pedido: </b>${data.idPedido}</p>
                    <p><b>Usuario: </b>${data.nombreUsuario}</p>
                    <p><b>Artículos:</b></p>
                    <ul>
                        ${data.articulos.map(articulo => `<li>${articulo.nombre} - Cantidad: ${articulo.cantidad} - Precio: ${(articulo.precio * articulo.cantidad).toFixed(2)}€</li>`).join('')}
                    </ul>
                    <p><b>Total: </b>${data.pagoTotal}€</p>
                `;
                mostrarModalResumen();
            })
            .catch (error => {
                console.error('Error al obtener el resumen de compra: ', error);
            });
    return false;
}