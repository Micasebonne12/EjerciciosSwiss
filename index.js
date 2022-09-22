/* EJERCICIO 2
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

let listado = [2, 4, 6, 8, 9]

let ordenarMatriz = (listado, dir) => {
    for (let i = 0; i < listado.length; i++) {
        for (let j = i + 1; j < listado.length; j++) {
            let tmp = 0;
            if (listado[i] > listado[j] && dir == "asc") {
                tmp = listado[i];
                listado[i] = listado[j];
                listado[j] = tmp;
            } else if (listado[i] < listado[j] && dir == "desc") {
                tmp = listado[i];
                listado[i] = listado[j];
                listado[j] = tmp;
            }
        }
    }
    for (let i = 0; i < listado.length; i++) {
        console.log(listado[i]);
    }
}

ordenarMatriz(listado, "desc"); 

/* EJERCICIO 4
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
* que calcule el mínimo común múltiplo (mcm) de dos números enteros.
* - No se pueden utilizar operaciones del lenguaje que 
*   lo resuelvan directamente. */

let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))

let maximoComunDivisor = (numero1, numero2) => {
    let temp;
    while (numero2 !== 0) {
        temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    return numero1;
};

let minimoComunMultiplo = (numero1, numero2) => {
    return alert(`El mínimo común múltiplo entre ambos números es ${(numero1 * numero2) / maximoComunDivisor(numero1, numero2)}`);
};

alert(`El máximo común divisor entre los números elegidos es ${maximoComunDivisor(numero1, numero2)}`)
minimoComunMultiplo(numero1, numero2) 



/* EJERCICIO 5

* Crea una función que reciba días, horas, minutos y segundos (como enteros)

* y retorne su resultado en milisegundos.

*/
 
let dias = parseInt(prompt("Ingrese un día"))
let horas = parseInt(prompt("Ingrese una hora"))
let minutos = parseInt(prompt("Ingrese minutos"))
let segundos = parseInt(prompt("Ingrese segundos"))



let fecha = (dias, horas, minutos, segundos) => {
    return alert(`El resultado de la fecha ingresada en milisegundos es de dias: ${dias * 86400000} ms, horas: ${horas * 3600000} ms, minutos: ${minutos * 60000} ms y segundos: ${segundos * 1000} ms`)
}


fecha(dias, horas, minutos, segundos);

/*EJERCICIO 6 

Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */
let palabra = prompt("Ingrese una palabra")

let convertirMayuscula = (palabra) => {

    var regex = new RegExp('^[A-Z]+$', 'i');

    if(!regex.test(palabra) || palabra === ''){
        alert("Debe ingresar una palabra válida")
    }else{
        alert(palabra.charAt(0).toUpperCase(0) + palabra.slice(1))
    }
}

convertirMayuscula(palabra)

/* EJERCICIO 7
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


 let str = prompt("Ingrese una frase que será analizada por consola");

function contarPalabras(str) {
    let palabras = str.toLowerCase().split(" ");
    let contador = {};
    for (let i = 0; i < palabras.length; i++) {
        if (contador[palabras[i]]) {
            contador[palabras[i]]++;
        } else {
            contador[palabras[i]] = 1;
        }
    }
    return contador;
}
console.log(contarPalabras(str));  