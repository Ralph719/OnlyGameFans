let close_button = document.getElementById('close-button');
close_button.addEventListener('click', function(e) {
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

// Event listener para el input de radio Visa
visaInput.addEventListener('change', () => {
    if (visaInput.checked) {
        actualizarImagenTarjeta('visa');
    }
});

// Event listener para el input de radio Mastercard
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
    const selectMes = document.getElementById('selectMes');
    const selectYear = document.getElementById('selectYear');

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

    const formularioTarjeta = document.getElementById('formulario-tarjeta');
    formularioTarjeta.addEventListener('submit', function (event) {
        const inputNumero = document.getElementById('inputNumero');
        const inputNombre = document.getElementById('inputNombre');
        const inputCCV = document.getElementById('inputCCV');
        const advertencia = document.getElementById('advertencia');

        if (!inputNumero.value || !inputNombre.value || !selectMes.value || !selectYear.value || !inputCCV.value) {
            advertencia.style.display = 'block';
            event.preventDefault();
        } else {
            advertencia.style.display = 'none';
        }
    });
});

// * Input numero de tarjeta
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

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});