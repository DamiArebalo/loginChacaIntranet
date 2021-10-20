// funcion de validicion
function validar() {
	// variables de llamado a los input
	const pass = document.getElementById('clave').value ;
	const user = document.getElementById('user').value ;

	if ((user == "") || (pass == "") ) { /*campos vacios*/
		alert("complete los campos vacios");	
	}
	else if (pass.length < 6) { /*contraseña minima*/
		alert("contraseña minima de 6 caracteres"); 
		

	}else if (pass.length >= 30){ /*contraseña maxima*/
		alert("contraseña no puede superar los 30 caracteres");
		
	}
	else if(user.length <4){ /*usuario minimo*/
		alert("usuario minimo de 4 caracteres");
		
	}else{
		btn.addEventListener(('submit'), (e) => {
			location.href="https://www.tecnica6moron.edu.ar/";
		})
	}
}