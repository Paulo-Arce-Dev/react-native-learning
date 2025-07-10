# Coerción en JavaScript

## ¿Qué es la coerción?

La **coerción** en JavaScript se refiere a la conversión automática o implícita de un tipo de dato a otro.  
JavaScript es un lenguaje **débilmente tipado y dinámico**, lo que significa que puede convertir valores automáticamente cuando es necesario.

---

## Tipos de coerción

### Coerción implícita

La conversión ocurre de forma automática cuando el lenguaje la necesita, por ejemplo en operaciones aritméticas o comparaciones.

```javascript
console.log("5" + 3); // "53" (3 se convierte en string)
console.log("5" - 3); // 2   ("5" se convierte en número)
console.log(4 * "2"); // 8   ("2" se convierte en número)
console.log(5 + true); // 6  (true se convierte en 1)
console.log("10" == 10); // true ("10" se convierte en número)
```

### Coerción explícita

La conversión se hace de forma manual usando funciones o métodos.

```js
let numero = "123";
let numConvertido = Number(numero); // string a number
console.log(numConvertido); // 123

let valor = 456;
let valorStr = String(valor); // number a string
console.log(valorStr); // "456"

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hola")); // true
```

### Coerción en comparaciones

En comparaciones con == (igualdad débil), JavaScript convierte los valores para compararlos.
Por eso, se recomienda usar === (igualdad estricta) para evitar resultados inesperados.

```js
console.log("0" == 0); // true
console.log(0 == false); // true
console.log("" == 0); // true

console.log("0" === 0); // false
console.log(0 === false); // false
console.log("" === 0); // false
```

### Ejemplos curiosos de coerción

```js
console.log([] + []); // ""      (arrays convertidos a string y concatenados)
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0       (dependiendo del contexto de parsing)
console.log("5" - "2"); // 3
console.log("5" + "2"); // "52"
console.log(true + true); // 2      (true → 1)
console.log(false + 1); // 1
```

### Buenas prácticas

- Usar siempre === para evitar conversiones automáticas no deseadas.
- Convertir explícitamente cuando se necesita (Number(), String(), Boolean()).
- Leer y entender los tipos de datos involucrados en cada operación.
- Evitar confiar en el comportamiento automático de coerción.

### Ejemplo completo

```js
const valor = "10";

if (valor == 10) {
  console.log("Con == se cumple la condición"); // Se ejecuta
}

if (valor === 10) {
  console.log("Con === se cumple la condición");
} else {
  console.log("Con === NO se cumple la condición"); // Se ejecuta
}

// Conversión explícita
const num = Number(valor);
console.log(num + 5); // 15
```
