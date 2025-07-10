# 💻 Variables en JavaScript

## 📄 ¿Qué es una variable?

Una variable es un espacio en memoria donde se puede almacenar un dato para usarlo y modificarlo durante la ejecución de un programa.

---

## 🏷️ Declaración de variables

En JavaScript existen tres formas principales de declarar variables:

### `var`

- Declaración antigua.
- Ámbito (scope) de función.
- Puede generar problemas por hoisting y redeclaración.

```javascript
var nombre = "Ana";
nombre = "Carlos"; // Reasignación permitida
```

### `let`

- Introducido en ES6.
- Ámbito de bloque.
- Permite reasignar valores.

```javascript
let edad = 25;
edad = 26; // Correcto
```

### `Const`

- Introducido en ES6.
- Ámbito de bloque.
- No permite reasignar valores.
- Para objetos y arrays, el contenido interno puede modificarse.

```javascript
cosnt PI = 3.1416;
// PI = 3; // ❌ Error: reasignación no permitida

const persona = {
    nombre: "Juan",
    edad: 30
}
persona.nombre = "Pedro" // ✔️ Modificar propiedades internas
```

## 📦 Ámbito básico (Scope) de variables

El scope define dónde es accesible una variable:

- Global: Declarada fuera de funciones o bloques, accesible en todo el programa.
- De función: Declarada con var dentro de una función, solo accesible en ella.
- De bloque: Declarada con let o const dentro de un bloque {}, solo accesible dentro de ese bloque.

```js
function ejemplo() {
  var x = 10; // Scope de función
  let y = 20; // Scope de bloque
  const z = 30; // Scope de bloque
}
```

## ⬆️ Hoisting

- Las declaraciones con var se elevan (hoisting) al inicio de su scope, pero su valor inicial es undefined hasta que se asigna.
- Las variables declaradas con let y const también se elevan pero no se pueden usar antes de ser declaradas (Temporal Dead Zone).

```js
console.log(a); // undefined
var a = 5;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
```

## 🏷️ Tipado dinámico

JavaScript es un lenguaje con tipado dinámico, lo que significa que las variables pueden almacenar cualquier tipo de dato y pueden cambiarlo en cualquier momento.

```js
let dato = 42; // number
dato = "Hola"; // string
dato = true; // boolean
```

### ⚡ Buenas prácticas

- Usa const por defecto para valores que no cambian.
- Usa let solo cuando necesites reasignar.
- Evita usar var para prevenir errores y comportamientos inesperados.
- Usa nombres claros y descriptivos para tus variables.
- Declara variables lo más cerca posible de su uso.

```js
const nombre = "Lucía";
let edad = 22;

if (edad >= 18) {
  let mensaje = "Es mayor de edad";
  console.log(mensaje);
}

// console.log(mensaje); // ❌ Error: 'mensaje' no está definida fuera del bloque
```
