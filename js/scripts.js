//Queryselector

// const heading = document.querySelector("#heading");
// //heading.textContent = "Nuevo heading"; //cambia el texto
// console.log(heading);

//queryselectorall

// const enlaces = document.querySelectorAll(".navegacion a")
// enlaces[0].textContent = "Nuevo texto";
// // enlaces[0].href = "http://google.com";
// console.log(enlaces);
// console.log(enlaces[0]);

//getelementbyid

// const heading2 = document.getElementById("heading");
// console.log(heading2);

// modificar un enlace
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para nuevo enlace poncho';
// enlaces[0].classList.add('Nueva-clase');
//enlaces[0].classList.remove('navegacion_enlace');

//crear un enlace
// const nuevoEnlace = document.createElement('A');
// // AGREGAR HREF
// nuevoEnlace.href = 'nuevo-enlace.html';
// //Agregar texto
// nuevoEnlace.textContent = 'Un nuevo Enlace';
// //agregar clase
// nuevoEnlace.classList.add('navegacion_enlace');
// //agregar en el documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);
// console.log(nuevoEnlace);


// eventos
// document.addEventListener('load', function(){ // espera a que el js y los archivos html esten listos

// });
// document.addEventListener('DOMContentLoaded', function(){ //solo espera el html, no js no css no img

// });

// selecionar y asociar un evento a elementos ya creados
// const btnenviar = document.querySelector('.botton-primario');
// btnenviar.addEventListener('click', function(evento){
//     evento.preventDefault();
//     console.log('Enviado');
// });

const datos = {
    nombre:'',
    email:'',
    mensaje: ''
}

function leer(e){
    datos[e.target.id]= e.target.value;
    console.log(datos);
}

//evento submit

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    //validar
        const {nombre, email, mensaje } = datos;
        if ( nombre == ''|| email == '' || mensaje == ''){
            MostrarAlerta("Todos los datos son requeridos", 'error');
            return;
        }
        else{
            MostrarAlerta("Enviado correctamente");
        }

});

//eventos de input teclado y textarea

const inputnombre = document.querySelector('#nombre');
const inputemail = document.querySelector('#email');
const inputmensaje = document.querySelector('#mensaje');

inputnombre.addEventListener('input',leer);
inputemail.addEventListener('input',leer);
inputmensaje.addEventListener('input',leer);


///simplificar
function MostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('envio');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },5000);
}
