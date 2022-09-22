/* EJERCICIO 2
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */


//Al no poder utilizar funciones propias del lenguaje que resuelvan automáticamente, se investigó y se decidió resolver por el algoritmo "Bubble sort" (ordenamiento burbuja).
//Este algoritmo ordena el array comparando dos elementos adyacentes e intercambiándolos si no se encuentran en el orden previsto, siendo éste de forma incremental o decremental.

//Defino el listado
let listado = [2, 4, 6, 8, 9]

//Declaro una función que va a tener dos parámetros. El listado, y la dirección (ascendente/descendente)
let ordenarMatriz = (listado, dir) => {
    //Hago un bucle for que
    for (let i = 0; i < listado.length; i++) {
        //Bucle sobre el listado
        for (let j = i + 1; j < listado.length; j++) {
            //Declaro una variable temporal que sirva para comparar
            let tmp = 0;
            //Comparo el objeto del bucle externo con el bucle interno si es mayor que el intercambio.
            if (listado[i] > listado[j] && dir == "asc") {
                tmp = listado[i];
                listado[i] = listado[j];
                listado[j] = tmp; //Código de intercambio
            //Comparo el objeto del bucle externo con el bucle interno si es menor que el intercambio.
            } else if (listado[i] < listado[j] && dir == "desc") {
                tmp = listado[i];
                listado[i] = listado[j];
                listado[j] = tmp; //Código de intercambio
            }
        }
    }

    
    //Después de ordenar, imprime el valor
    for (let i = 0; i < listado.length; i++) {
        console.log(listado[i]);
    }
}

//Llamo a la función y le paso como parámetro el array de números y de qué forma quiero que se ordenen.
ordenarMatriz(listado, "desc"); 

/* EJERCICIO 4
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
* que calcule el mínimo común múltiplo (mcm) de dos números enteros.
* - No se pueden utilizar operaciones del lenguaje que 
*   lo resuelvan directamente. */

//Le pido al usuario que ingrese dos números y los almaceno en dos variables diferentes.
let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))

//Creo una función llamada maximoComunDivisor que recibe dos números
let maximoComunDivisor = (numero1, numero2) => {
    //Declaro una variable temporal
    let temp;
    //Mientras el segundo número sea distinto de 0
    while (numero2 !== 0) {
        //Guardo el segundo número en esa variable temporal declarada más arriba
        temp = numero2;
        //Le asigno al segundo número el módulo del primero
        numero2 = numero1 % numero2;
        //Ahora ese primer número será el MCM de ambos y lo almaceno en la variable temporal
        numero1 = temp;
    }
    return numero1;
};

//Creo una función llamada mínimo común Múltiplo que recibe dos números
let minimoComunMultiplo = (numero1, numero2) => {
    //Retorna un alert que devuelve el numero 1 multiplicado por el numero 2, dividido por el MCM entre ambos
    return alert(`El mínimo común múltiplo entre ambos números es ${(numero1 * numero2) / maximoComunDivisor(numero1, numero2)}`);
};

//Llamo a la función MCM con un alert, para que aparezca el resultado por pantalla y le paso como parámetros los valores ingresados por el usuario
alert(`El máximo común divisor entre los números elegidos es ${maximoComunDivisor(numero1, numero2)}`)
//Llamo a la función MCM y le paso como parámetros los valores ingresados por el usuario
minimoComunMultiplo(numero1, numero2) 



/* EJERCICIO 5
* Crea una función que reciba días, horas, minutos y segundos (como enteros)
* y retorne su resultado en milisegundos.
*/

//Creo 4 variables para que el usuario ingrese dias, horas, minutos y segundos
let dias = parseInt(prompt("Ingrese un día"))
let horas = parseInt(prompt("Ingrese una hora"))
let minutos = parseInt(prompt("Ingrese minutos"))
let segundos = parseInt(prompt("Ingrese segundos"))


//Creo una función que retorna los valores ingresados por el usuario, multiplicados por la cantidad de milisegundos que entran en ese valor 
let fecha = (dias, horas, minutos, segundos) => {
    return alert(`El resultado de la fecha ingresada en milisegundos es de dias: ${dias * 86400000} ms, horas: ${horas * 3600000} ms, minutos: ${minutos * 60000} ms y segundos: ${segundos * 1000} ms`)
}

//Llamo a la función y le paso como parámetro los valores ingresados por el usuario
fecha(dias, horas, minutos, segundos);

/*EJERCICIO 6 
Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

//Le pido al usuario que ingrese una palabra y la guardo en una variable
let palabra = prompt("Ingrese una palabra")

//Creo una función que recibe un parámetro
let convertirMayuscula = (palabra) => {

    //Creo una expresión regular que solo permita caracteres alfabéticos
    var regex = new RegExp('^[A-Z]+$', 'i');

    //Si el usuario ingresa un número, un caracter especial o no ingresa nada, tira error
    if(!regex.test(palabra) || palabra === ''){
        alert("Debe ingresar una palabra válida")
    }else{
        //Si el usuario ingresa una palabra, el método charAt recorre hacia la primera letra de esa palabra, la convierte en Mayúscula y le suma el resto de la palabra
        alert(palabra.charAt(0).toUpperCase(0) + palabra.slice(1))
    }
}

//Llamo a la función y le paso por parámetro lo que ingresó el usuario
convertirMayuscula(palabra)

/* EJERCICIO 7
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

//Le pido al usuario que ingrese una frase por prompt
 let str = prompt("Ingrese una frase que será analizada por consola");

//Creo una función que cuenta las palabras
function contarPalabras(str) {
    //Creo un nuevo array, conviertiendo las palabras a minúscula y las separo
    let palabras = str.toLowerCase().split(" ");
    //Creo un objeto vacío
    let contador = {};
    //Creo un bucle for que recorra la longitud del array palabras
    for (let i = 0; i < palabras.length; i++) {
        //Si en el contador se encuentra esa palabra, hace una iteración y la suma 
        if (contador[palabras[i]]) {
            contador[palabras[i]]++;
            //Si no la encuentra, la iguala a 1 (se repite una sola vez)
        } else {
            contador[palabras[i]] = 1;
        }
    }
    //Devuelve el objeto con la cantidad de palabras repetidas
    return contador;
}

//Llamo a la función para que me muestre por consola la cantidad de palabras repetidas escritas por el usuario
console.log(contarPalabras(str));  