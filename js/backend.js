const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btn = document.getElementById('btn');
const expresiones={
	nombre: /^[a-zA-ZÁ-ÿ\s]{3,40}$/, //letras y espacios pueden llevar acentos;
	usuario: /^[a-zA-Z0-9\-\_\.]{4,20}$/, //letras, numeros, guio, guion bajo y punto
	password: /^.{4,20}$/, // todo de 4 a 20 digitos
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo model
	telefono: /^\d{10,14}$/ //10 A 14 NUMEROS
}

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
		campos[campo]= true;
	}
}
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
inputs.forEach((input)=>{
	input.addEventListener('keyup', validaForm)
	input.addEventListener('blur', validaForm)
});

const campos = {
	nombre: false,
	usuario: false,
	password: false,
	correo: false,
	telefono: false 
}
	
btn.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre  && campos.usuario && campos.password && campos.pasword2 && campos.correo && campos.telefono){
	
		console.logo('no funca');
		document.getElementById('form__exito').classList.remove('form__exito-activo');
		// setTimeout(()=>{
			
		// document.getElementById('form__exito').classList.remove('form__exito-activo');
		// }, 5000);
	
	}
})


