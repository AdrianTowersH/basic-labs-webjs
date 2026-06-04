// Alert box
alert("Hello, World!");


let usuario = {
    nombre: "Ana",
    edad: 30
    
};

console.log(usuario); // Imprime el objeto completo en la consola

console.log(usuario.nombre); // Imprime "Ana" en la consola

usuario.nombre = "Carlos"; // Cambia el nombre a "Carlos"

console.log(usuario); // Imprime "Carlos" en la consola

const lastname = "García";

console.log( usuario.nombre + " " + lastname); // Imprime "Carlos García" en la consola


// if / else if / else (The Decision Maker)

let speed = 80;
if (speed > 120) {
    console.log("Too fast!");
} else if (speed < 40) {
    console.log("Too slow!");
} else {
    console.log("Perfect speed.");
}


// switch (The Multi-way Branch)

let day = "Monday";
switch (day) {
    case "Monday": console.log("Start of the week!"); break;
    case "Friday": console.log("Weekend is near!"); break;
    default: console.log("Just a regular day.");
}

// for (The Standard Loop)

for (let i = 0; i < 5; i++) {
    console.log(`Iteration number: ${i}`);
}


// while (The Conditional Loop)

let energy = 3;
while (energy > 0) {
    console.log("Still running...");
    energy--;
}

//Map (The JavaScript HashMap)

const userRoles = new Map();
userRoles.set("alice", "admin");
userRoles.set("bob", "editor");

console.log(userRoles.get("alice")); // Output: admin
console.log(userRoles.has("bob"));   // Output: true

// Set (The JavaScript HashSet)

const uniqueNumbers = new Set();
uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(5); // Duplicate! Ignored.

console.log(uniqueNumbers.size); // Output: 2

// Array (The List)
let fruits = ["apple", "banana", "cherry"];

// for...of: Loops through the values of an iterable (Arrays, Sets, Maps).
for (let fruit of fruits) { console.log(fruit); }


// forEach: Executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));

// .map(): Transforms an array into a new array.
let upperFruits = fruits.map(f => f.toUpperCase()); // ["APPLE", "BANANA", "CHERRY"]

// .filter(): Creates a new array filtering out elements that don't match a condition.
let longFruits = fruits.filter(f => f.length > 5); // ["banana", "cherry"]

// 4. Error Handling & Asynchronous Essentials
// try...catch (The Safety Net)
try {
    // Code that might fail (e.g., calling an API or reading an undefined variable)
    let result = riskyFunction(); 
} catch (error) {
    console.log("Something went wrong: " + error.message);
}



/*
async / await (Handling Time)

Used when dealing with operations that take time, like fetching data from a server, 
to make asynchronous code look and behave like synchronous code.  */


async function FetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}


/*
Las 3 formas de declarar variables

En JavaScript moderno, existen tres palabras clave para crear variables. Cada una tiene reglas diferentes:
1. let (La más recomendada para valores que cambian)

Se usa cuando sabes que el valor de la variable va a cambiar a lo largo del tiempo.

let puntuacion = 0;
puntuacion = 10; // ¡Ganaste puntos! El valor ahora es 10.


2. const (Para valores fijos)

Viene de "constante". Se usa para valores que no deben cambiar después de ser asignados. 
Si intentas cambiarlo, JavaScript te dará un error

const pi = 3.1416;
const miNombre = "Carlos";
// miNombre = "Juan"; // ❌ Esto romperá tu código.

3. var (La forma antigua, ¡evítala!)

Era la única forma de crear variables en el JavaScript antiguo (antes de 2015). 
Hoy en día no se recomienda usarla porque tiene un comportamiento un tanto impredecible con el alcance de los datos (scope) 
y puede causar errores lógicos difíciles de encontrar.

JavaScript es de tipado dinámico, lo que significa que no tienes que decirle qué tipo de dato vas a guardar; la variable lo detecta automáticamente. Puedes guardar:

    Números (Numbers): let edad = 25;

    Texto (Strings): let saludo = "Hola, mundo"; (Siempre entre comillas).

    Booleanos (Booleans): let esMayorDeEdad = true; (Solo pueden ser true o false).

    Arreglos/Listas (Arrays): let colores = ["azul", "rojo", "verde"];

    Objetos (Objects): Para estructuras más complejas.

    let usuario = {
    nombre: "Ana",
    edad: 30
    
    };

    Sé descriptivo: Es mejor usar let precioTotal = 100; que let x = 100;. Alguien más (¡o tú en el futuro!) debe entender qué hace esa variable.

    Usa camelCase: En JavaScript, por convención, si el nombre tiene más de una palabra, la primera va en minúscula y las siguientes empiezan con mayúscula. Ejemplo: nombreDelUsuario, unidadesEnInventario.

    Restricciones: Los nombres no pueden empezar con números ni llevar espacios o guiones medios. Tampoco puedes usar palabras reservadas del lenguaje (como let, if, for).

    En resumen: Usa const por defecto para todo lo que no vaya a cambiar. Si necesitas modificar el valor más adelante, usa let. Olvídate de que var existe.


*/
