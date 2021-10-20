const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
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
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__nombre i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__nombre .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__nombre i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__nombre .form__input-error').classList.add('form__input-error-activo');
			}
		break;
		case"usuario":
			if(expresiones.usuario.test(e.target.value)){
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__usuario i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__usuario .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__usuario i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__usuario .form__input-error').classList.add('form__input-error-activo');
			}
		break;
		case"password":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__password i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__password i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__password2 .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__password i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__password i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__password .form__input-error').classList.add('form__input-error-activo');
			}
		break;
		case"password2":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__password2 i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__password2 i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__password2 .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__password2 i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__password2 i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__password2 .form__input-error').classList.add('form__input-error-activo');

			}
		break;
		case"correo":
			if(expresiones.correo.test(e.target.value)){
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__correo i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__correo .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__correo i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__correo .form__input-error').classList.add('form__input-error-activo');
			}
		break;
		case"telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.remove('bi-x-circle-fill');
				document.querySelector('#grupo__telefono i').classList.add('bi-check-circle-fill');
				document.querySelector('#grupo__telefono .form__input-error').classList.remove('form__input-error-activo');
			}else{
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('bi-x-circle-fill');
				document.querySelector('#grupo__telefono i').classList.remove('bi-check-circle-fill');
				document.querySelector('#grupo__telefono .form__input-error').classList.add('form__input-error-activo');
			}
		break;
		
	}
}

const validaCampo = ()=>{

}

inputs.forEach((input)=>{
	input.addEventListener('keyup', validaForm)
	input.addEventListener('blur', validaForm)
})

	
// formulario.addEventListener('submit', (e) => {
// 	location.href("./login.html";)
// })



	

