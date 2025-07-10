# 💾 Tipos de datos en JavaScript

En JavaScript, los **tipos de datos** determinan qué tipo de valores puede almacenar y manipular una variable. JavaScript es un lenguaje de **tipado dinámico**, por lo que una variable puede cambiar de tipo durante la ejecución.

---

## 📂 Tipos de datos primitivos

Los **primitivos** son inmutables y se almacenan directamente en la variable.

### String

Representa cadenas de texto.

```javascript
let nombre = "Juan";
let saludo = "Hola";
let frase = `Hola, mi nombre es ${nombre}`;
```

### Number

Representa números enteros y decimales. No hay distinción entre enteros y flotantes.

```javascript
let edad = 30;
let precio = 99.99;
```

### Boolean

Solo puede tener dos valores: true o false. Muy usado en condiciones y lógica.

```javascript
let esMayor = true;
let tienePermiso = false;
```

### Undefined

Indica que una variable ha sido declarada pero no tiene un valor asignado.

```javascript
let valor;
console.log(valor); // undefined
```

### Null

Representa la ausencia intencional de valor. Debe asignarse manualmente.

```js
let usuario = null;
```

### Symbol

Introducido en ES6. Es un tipo de dato único e inmutable, útil para crear identificadores únicos.

```js
const id = Symbol("id");
```

### BigInt

Permite trabajar con enteros muy grandes que superan el límite del tipo Number.

```js
const numeroGrande = 1234567890123456789012345678901234567890n;
```

## 📦 Tipos de datos no primitivos (objetos)

Los objetos se usan para almacenar colecciones de datos y entidades más complejas. No se copian por valor, sino por referencia.

### Object

Colección de pares clave-valor.

```js
let persona = {
  nombre: "María",
  edad: 28,
};
```

### Array

Lista ordenada de valores.

```js
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Manzana", "Banana", "Pera"];
```

### Function

En JavaScript, las funciones también son objetos.

```js
function saludar() {
  console.log("¡Hola!");
}
```

### Otros objetos

- Date (fechas)
- RegExp (expresiones regulares)
- Map, Set, WeakMap, WeakSet, etc.

## Tipado dinámico

En JavaScript, una variable puede cambiar de tipo sin restricciones.

```js
let dato = 42; // Number
dato = "Hola"; // String
dato = true; // Boolean
```

## Comprobación de tipos

Usar typeof para verificar el tipo de dato.

```js
let edad = 25;
console.log(typeof edad); // "number"

let nombre = "Ana";
console.log(typeof nombre); // "string"

let activo = true;
console.log(typeof activo); // "boolean"

console.log(typeof null); // "object" (error histórico en JS)
console.log(typeof undefined); // "undefined"
```

### ⚡ Buenas prácticas

- Usar los tipos correctos para representar datos de forma clara.
- Inicializar las variables al declararlas siempre que sea posible.
- Ser consciente de las conversiones automáticas (coerción) que puede hacer JavaScript.
- Usar === en lugar de == para comparaciones estrictas y evitar conversiones implícitas.

### Ejemplo completo

```js
const nombre = "Carlos";
let edad = 35;
let casado = false;
let hijos = null;
let direccion;

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof casado); // boolean
console.log(typeof hijos); // object
console.log(typeof direccion); // undefined
```
