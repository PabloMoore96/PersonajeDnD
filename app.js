// Programa Dados JS Pablo Moore

/* Funcion que declara cuantos dados se tiran y realiza el calculo entre 1 
y la cantidad de caras que se le hayan ingresado al dado */

function Personaje(nombre, edad, raza, clase, sexo, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.clase = clase;
    this.sexo = sexo;
    this.altura = altura;
}

function personajeCrear(nombre, edad, raza, clase, sexo, altura){

    let personaje = new Personaje(nombre, edad, raza, clase, sexo, altura);
    console.log(personaje)
    let resultado = document.getElementById("answer");

    let arrayRespuesta = [`Nombre: ${personaje.nombre}|| Edad: ${personaje.edad} años || Raza: ${personaje.raza}|| Clase: ${personaje.clase}|| Sexo: ${personaje.sexo}|| Altura: ${personaje.altura}cm`]
    console.log(arrayRespuesta)

    let respuesta = arrayRespuesta.join(" ")
    resultado.textContent = respuesta

     

}

const formulario = document.querySelector("#form")

formulario.addEventListener( 'submit', validateForm)

function validateForm(e){
    e.preventDefault()
    
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("edad").value;
    let raza = document.getElementById("raza").value;
    let clase = document.getElementById("clase").value;
    let sexo = document.getElementById("sexo").value;
    let altura = document. getElementById("altura").value;

    if (altura > 250){
        let resultado = document.getElementById("answer");
        resultado.textContent = "No podes medir más de 250cm"
    }else if (altura < 50){
        let resultado = document.getElementById("answer");
        resultado.textContent = "No podes medir menos de 50cm"
    }else if(edad < 5 || edad > 300){
        let resultado = document.getElementById("answer");
        resultado.textContent = "Pone una edad realista para una aventura"
    }else{
        personajeCrear(nombre,edad,raza,clase,sexo,altura)
    }
    
    
}

    
