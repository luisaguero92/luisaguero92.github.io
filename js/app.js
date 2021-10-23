
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fvalidation").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('Nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito nada en el Nombre');
        Nombre.style.borderColor = '#ff0000';
        return;
    } else {
        Nombre.style.borderColor = '#008f39';
    }


    var emailValidationRegularExpression = /\S+@\S+\.\S+/;
    //Aqui comparamos el input con la variable anterior que es un correo generico con un @ y un .
    var validation = emailValidationRegularExpression.test(document.getElementById("inputEmail").value);
    if (!validation) {
    alert("Ingrese un mail correcto");
    inputEmail.style.borderColor = '#ff0000'
    return
    } else {
        inputEmail.style.borderColor = '#008f39'; 
    } 

    var clave1 = document.getElementById('Password1').value;
    if (clave1.length < 6) {
        alert('La contraseña debe tener mas de 6 caracteres');
        Password1.style.borderColor = '#ff0000'
        return;
    } else {
        Password1.style.borderColor = '#008f39'
    }

    var clave2 = document.getElementById('Password2').value;
    if (clave2.length < 6) {
        alert('Repita la contraseña correctamente');
        Password2.style.borderColor = '#ff0000'
        return;
    }

    if(clave1 !== clave2){
        alert('Repita la contraseña correctamente');
        return;
    } else {
        Password2.style.borderColor = '#008f39'
    }

    var direccion = document.getElementById('inputDireccion').value;
    if (direccion.length == 0) {
        alert('Ingrese una Direccion');
        inputDireccion.style.borderColor = '#ff0000';
        return;
    } else {
        inputDireccion.style.borderColor = '#008f39';
    }

    var ciudad = document.getElementById('inputCity').value;
    if (ciudad.length == 0) {
        alert('Ingrese una Ciudad');
        inputCity.style.borderColor = '#ff0000';
        return;
    } else {
        inputCity.style.borderColor = '#008f39';
    }

    var zip = document.getElementById('inputZip').value;
    if (zip.length == 0) {
        alert('Ingrese un Codigo Postal');
        inputZip.style.borderColor = '#ff0000';
        return;
    } 
    if (zip.length !== 4) {
        alert('Ingrese un Codigo Postal correcto (4 digitos)');
        inputZip.style.borderColor = '#ff0000';
        return;
    } else {
        inputZip.style.borderColor = '#008f39';
    }

    var check = document.getElementById('gridCheck').checked;
    if (check == false  ) {
        alert('Acepte los terminos y condiciones');
        gridCheck.style.borderColor = '#ff0000';
        return;
    } else {
        gridCheck.style.borderColor = '#008f39';
    }    

    this.submit();
    alert("Muchas gracias por enviar el formulario");
}


