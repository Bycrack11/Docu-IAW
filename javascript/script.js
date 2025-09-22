const button = document.getElementById('boton');
const cajamensaje = document.getElementById('cajamensaje');

button.addEventListener('click', function() { /*Está esperando a que alguien pulse un boton*/
    cajamensaje.innerHTML = 'Has pulsado un boton'; /*Lo que pasa cuando pulsas el boton*/ 
});

/*Operadores aritméticos*/
let a = 5;
let b = 3;
let suma = a + b;
let resta = a - b;
console.log("A: " + a);
console.log("B: " + b); /*Lo pongo antes porque después cambia de valor con el incremento*/
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b; // Resto de la división
let incremento = ++a; // Suma 1 a a
let decremento = --b; // Resta 1 a b
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
console.log("Incremento: " + incremento);
console.log("Decremento: " + decremento);

/*Operadores de comparación*/
let edad = 20;
const mayoriaEdad = 18;

console.log("Edad: " + edad);
console.log("Mayor o igual que 18: " + (edad >= mayoriaEdad));
console.log(100==="100"); // false
console.log(100=="100"); // true
console.log(100!=="100"); // true
console.log(100!= "100"); // false

/*Operadores lógicos*/
let esEstudiante = true;
let tieneBeca = false;
console.log("Es estudiante y tiene beca: " + (esEstudiante && tieneBeca)); // false
console.log("Es estudiante o tiene beca: " + (esEstudiante || tieneBeca)); // true
console.log("No es estudiante: " + !esEstudiante); // false

/*Condicionales*/
if (edad < 18) {
    console.log("Eres menor de edad.");
} else {
    console.log("Eres mayor de edad.");
}

if (edad < 13) {
    console.log("Eres un niño.");
} else if (edad < 18) {
    console.log("Eres un adolescente.");
} else if (edad < 65) {
    console.log("Eres un adulto.");
}

/*Bucle for*/
let i=0;
for (i = 0; i < 5; i++) {
    console.log("Valor de i: " + i);
}

/*Funciones*/
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("Pepe"));
console.log(saludar("María"));

function areaRectangulo(base) {
    let altura = 10;
    return base * altura;
}
console.log(areaRectangulo(5));
/*console.log(altura);  //Error: altura no está definida fuera de la función*/

/*Objetos*/
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Madrid",
    
    nombrecompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
console.log("Nombre completo: " + persona.nombrecompleto());

/*Arrays*/
let frutas = ["Manzana", "Banana", "Cereza"];
console.log("Frutas: " + frutas);
console.log("Fruta 2: " + frutas[1]); // Accede al segundo elemento
frutas[2] = "Fresa"; // Modifica el tercer elemento
console.log("Frutas después de modificar: " + frutas);
console.log("Número de frutas: " + frutas.length); // Longitud del array
frutas.push("Naranja"); // Añade un elemento al final
console.log("Frutas después de push: " + frutas);
frutas.pop(); // Elimina el último elemento
frutas.shift(); // Elimina el primer elemento
frutas.unshift("Melocotón"); // Añade un elemento al principio
console.log("Frutas después de pop, shift y unshift: " + frutas);

const resultados = [55, 70, 85, 90, 100];
for(let i=0; i < resultados.length; i++) {
    console.log("Resultado: " + resultados[i]);
}