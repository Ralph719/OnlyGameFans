// PARA VENTANA EMERGENTE 
let close_button = document.getElementById('close-button');
close_button.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('choosePayment').style.display = "none";
});


// OBTENER INFORMACIÓN DE LOS INPUTS
const visaInput = document.getElementById('visa');
const mastercardInput = document.getElementById('mastercard');

// CAMBIAR LA IMÁGEN DE LA TARJETA SEGÚN LA ELECCIÓN
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

// REGISTRAMOS LA OPCIÓN QUE ELIJAMOS PARA EJECUTAR EL MÉTODO DESPUÉS

visaInput.addEventListener('change', () => {
    if (visaInput.checked) {
        actualizarImagenTarjeta('visa');
    }
});

mastercardInput.addEventListener('change', () => {
    if (mastercardInput.checked) {
        actualizarImagenTarjeta('mastercard');
    }
});

// ATRIBUTOS DE LA TARJETA-FORMULARIO

const tarjeta = document.querySelector('#tarjeta'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');


// PARA SELECCIONAR EL MES
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i; // ESTABLECEMOS EL VALOR DE LA OPCIÓN COMO EL NÚMERO DEL MES
	opcion.innerText = i; // ESTABLECEMOS EL TEXTO INTERNO DE LA OPCIÓN COMO EL NÚMERO DE MES
	formulario.selectMes.appendChild(opcion); // AGREGAMOS LA OPCIÓN CREADA AL SELECTOR DE MES 
}

// PARA SELECCIONAR EL AÑO
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// PARA INTRODUCIR EL NÚMERO DE TARJETA
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// ELIMINAMOS ESPACIOS EN BLANCO
	.replace(/\s/g, '')
	// ELIMINAMOS LAS LETRAS
	.replace(/\D/g, '')
	// PONEMOS ESPACIO CADA 4 NÚMEROS
	.replace(/([0-9]{4})/g, '$1 ')
	// ELIMINA EL ÚLTIMO ESPACIADO
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

});

// PARA INTRODUCIR EL NOMBRE DE LA TARJETA
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

});

// PARA SELECCIONAR EL MES
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
});

// PARA SELECCIONAR EL AÑO
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
});

// CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// ELIMINAMOS LOS ESPACIOS
	.replace(/\s/g, '')
	// ELIMINAMOS LAS LETRAS
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});