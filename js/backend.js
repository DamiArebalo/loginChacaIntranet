//ESCUCHA DEL FORMULARIO Y LOS INPUTS
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//EXPRESIONES REGULARES DE VALIDACION
const expresiones={
	nombre: /^[a-zA-ZÁ-ÿ\s]{3,40}$/, //letras y espacios pueden llevar acentos;
	usuario: /^[a-zA-Z0-9\-\_\.]{4,20}$/, //letras, numeros, guio, guion bajo y punto
	password: /^.{4,20}$/, // todo de 4 a 20 digitos
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo model
	telefono: /^\d{10,14}$/ //10 A 14 NUMEROS
}

//FUNCION DE VALIDACION
const validaForm = (e) =>{
	switch(e.target.name){
		case"nombre":
			validaCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case"usuario":
			validaCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case"password":
		validaCampo(expresiones.password, e.target, 'password');
		break;
		case"password2":
			validaPassword2();
		break;
		case"correo":
			validaCampo(expresiones.correo, e.target, 'correo');
		break;
		case"telefono":
			validaCampo(expresiones.telefono, e.target, 'telefono');
		break;
		
	}
}

//METODO DE ESCUCHA DE INPUTS Y VALIDACION TIEMPO REAL
inputs.forEach((input)=>{
	input.addEventListener('keyup', validaForm);//CUANDO LEVANTA UNA TECLA
	input.addEventListener('blur', validaForm);//CUANDO CLICKEA AFUERA
});

//OBJETO DE INSTANCIACION DE CAMPOS ERRONEOS
const campos = {
	nombre: false,
	usuario: false,
	password: false,
	correo: false,
	telefono: false 
}

//METODO DE VALIDACION DE CAMPOS
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

//VALIDACION DE CONTRASEÑA 2 
const  validaPassword2 = () =>{
	const inputpassword1 = document.getElementById('password');
	const inputpassword2 = document.getElementById('password2');

	if(inputpassword1.value !== inputpassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('bi-x-circle-fill');
		document.querySelector(`#grupo__password2 i`).classList.remove('bi-check-circle-fill');
		document.querySelector(`#grupo__password2 .form__input-error`).classList.add('form__input-error-activo');
		campos[password]=false;
	}else{
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('bi-x-circle-fill');
		document.querySelector(`#grupo__password2 i`).classList.add('bi-check-circle-fill');
		document.querySelector(`#grupo__password2 .form__input-error`).classList.remove('form__input-error-activo');
		campos[password]=true;
	}
}


///FUNCION DE VALIDACION DEL BOTON SUBMIT
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	formulario.reset();
	if(campos.nombre  && campos.usuario && campos.password && campos.correo && campos.telefono){
		document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');

		window.location.href='login.html';
		
	}else{
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
	}
});


