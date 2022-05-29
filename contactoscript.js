function validarEmail (email){
	expresionRegular=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!expresionRegular.exec(email)){
		alert('Ups!!! Ingresaste un email no válido, intentá nuevamente');
	}
	else alert('Perfecto!!! Ingresaste un email válido.');
	}