
//ESCUCHA DE FORMULARIO Y DE LOS INPUTS
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// EXPRESIONES REGULARES PARA VALIDACION
const expresiones={
	usuario: /^[a-zA-Z0-9\-\_\.]{4,20}$/, //letras, numeros, guion, guion bajo y punto
	password: /^.{4,20}$/, // todo de 4 a 20 digitos

}



// FUNCION DE VALIDACION
const validaForm = (e) =>{
	switch(e.target.name){
		case"user":
			validaCampo(expresiones.usuario, e.target, 'user');
		break;
		case"password":
		validaCampo(expresiones.password, e.target, 'password');
		break;
		
	
	}
}

// VALIDAR CADA INPUT CADA VEZ QEU SUELTEN UNA TECAL O HAGAN CLICK AFUER
inputs.forEach((input)=>{
	input.addEventListener('keyup', validaForm); //TECLA LEVANTADA
	input.addEventListener('blur', validaForm); //CLICK AFUERA
});

// INSTANCIACION DE CAMPOS ERRONEOS
const campos = {
	user: false,
	password: false
}


// METODO PARA VALIDACION Y AGREGACION DE CLASES DE ESTILOS
const validaCampo = (expresion, input, campo)=>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.remove('bi-x-circle-fill');
		document.querySelector(`#grupo__${campo} i`).classList.add('bi-check-circle-fill');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
		campos[campo] = true;
	}else{
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('bi-x-circle-fill');
		document.querySelector(`#grupo__${campo} i`).classList.remove('bi-check-circle-fill');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
		campos[campo]= false;
	}
}


// CODIGO DE BOTON CUANDO SE APRETA

formulario.addEventListener('submit',(e)=>{
	e.preventDefault();
	formulario.reset();
	if(campos.user && campos.password){//SI LOS CAMPOS SON VERDADEROS...
		document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
		window.location.href ='https://www.tecnica6moron.edu.ar/';

	}else{//SI NO SON VERDADEROS...
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
	}
})