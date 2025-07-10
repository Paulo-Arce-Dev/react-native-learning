# Introducción a JavaScript

## ¿Qué es JavaScript?

- Es un **lenguaje de programación** (o de secuencias de comandos) que permite implementar funcionalidades dinámicas en páginas web.
- Es el **centro de todo lo frontend**, aunque también se usa en backend y otras áreas.
- Fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape.
- Inicialmente se llamó **Mocha**, luego **LiveScript**, y finalmente se renombró a **JavaScript** para aprovechar el auge de Java en ese momento.

## ¿Cómo funciona JavaScript?

- Es un lenguaje **single-threaded** (de un solo hilo) y **síncrono** por naturaleza: se ejecuta línea por línea.
- Mientras se ejecuta una línea, nada puede interrumpirla.

### Pensando en un lenguaje "por turnos"

Imaginá que leés un cuento de aventuras donde, llegado un punto, elegís el camino:

1. Si querés matar al jefe final, pasá a la página 60.
2. Si querés salvar a la princesa, pasá a la página 13.

Con JavaScript sucede algo similar: el flujo se controla paso a paso, y en el caso de código asíncrono, se "aparta" para retomarse más tarde.

#### Ejemplo: funciones asíncronas

```js
setTimeout(() => {
  console.log("Hola!"); // Se ejecuta 2do
}, 1000);

console.log("Yo voy primero"); // Se ejecuta 1ro
```

Salida en consola:
Yo voy primero
Hola!

## Variables en Javascript

### ¿Cómo se asignan valores?

Cuando declarás una variable y le asignás un valor:

1. Se crea un espacio en memoria para almacenar ese valor.
2. El nombre de la variable actúa como un puntero que referencia ese espacio.

```js
const numero = 15;
```

En este ejemplo, numero apunta al valor 15 guardado en memoria.

## Funciones en JavaScript

### ¿Qué es una función?

- Una función es un bloque de código reutilizable que se define con un nombre y puede recibir parámetros para realizar operaciones específicas.
- Dentro de la función, esos parámetros pueden usarse para interactuar con el contexto y devolver un valor de retorno.

#### Ejemplo

```js
function suma(a, b) {
  return a + b;
}

let a = 10;
let b = 12;
let c = suma(a, b); // c = 22
```
