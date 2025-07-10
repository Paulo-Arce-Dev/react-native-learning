# 📄 Introducción a JavaScript

## 💡 ¿Qué es JavaScript?

JavaScript es un lenguaje de programación interpretado, orientado a objetos y basado en prototipos. Se utiliza principalmente para crear páginas web dinámicas e interactivas. Es uno de los tres pilares fundamentales del desarrollo web, junto con HTML y CSS.

## 🕰️ Un poco de historia

JavaScript fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape. Originalmente llamado "Mocha", luego "LiveScript", y finalmente "JavaScript" como estrategia de marketing para aprovechar la popularidad de Java en ese momento. Desde entonces, JavaScript ha evolucionado considerablemente y ahora es uno de los lenguajes más utilizados del mundo, no solo en el navegador, sino también en el lado del servidor (gracias a Node.js).

## ✨ Principales características

- **Interpretado:** No necesita ser compilado, el navegador lo ejecuta directamente.
- **Multiparadigma:** Permite programación imperativa, orientada a objetos y funcional.
- **Basado en prototipos:** Los objetos pueden heredar directamente de otros objetos.
- **Dinámico:** Tipado dinámico, es decir, no se necesita declarar explícitamente el tipo de variable.
- **Event-driven:** Ideal para aplicaciones que reaccionan a eventos como clics, movimientos del mouse, etc.
- **Compatible con todos los navegadores modernos.**

## ⚙️ ¿Qué hace JavaScript?

- Manipula el DOM (Document Object Model) para modificar el contenido, la estructura y el estilo de una página web en tiempo real.
- Valida formularios y gestiona interacciones del usuario.
- Permite crear animaciones y efectos visuales.
- Puede comunicarse con servidores mediante peticiones HTTP (por ejemplo, usando fetch o AJAX).
- Se usa para construir aplicaciones completas del lado del cliente (Frontend) y también del lado del servidor (Backend) con Node.js.

## 🤔 Diferencias con otros lenguajes

- JavaScript se ejecuta principalmente en el navegador, mientras que lenguajes como Python, Java o C++ suelen ejecutarse en el servidor o en aplicaciones de escritorio.
- Su modelo basado en prototipos es diferente a la herencia basada en clases tradicional (aunque a partir de ES6 se introdujeron las clases).
- Está diseñado para ser altamente interactivo y responder a eventos en el navegador.
- No necesita compilación previa, a diferencia de lenguajes compilados como Java o C++.

## 📝 Sintaxis básica

```javascript
// Comentario de una línea

/*
  Comentario
  de varias líneas
*/

// Declarar una variable
let nombre = "Juan";
const edad = 25;

// Función
function saludar() {
  console.log("¡Hola!");
}

// Llamar a la función
saludar();

// Condicional
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
