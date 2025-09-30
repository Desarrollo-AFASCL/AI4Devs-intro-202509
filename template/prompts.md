# prompts.md

**Chatbot:** ChatGPT

## Prompt 1
Quiero que actúes como desarrollador front-end. Genera código a partir de un template con index.html y script.js.

Contexto

Necesito una página web que invierta un string.

Ejemplo: AI4Devs → sveD4IA.

El template ya trae index.html y script.js. No cambies nombres de archivos ni estructura.

Requisitos

index.html:

Input con id textInput

Botón con id reverseBtn

Contenedor con id result (con aria-live="polite")

Enlazar script.js al final del <body>.

script.js:

Función pura reverseString(str) que devuelve el string invertido.

Listeners para click en botón y Enter en input.

No usar librerías externas ni alert.

Casos borde:

Cadena vacía → mostrar mensaje “Nada que invertir” o vacío.

Espacios se preservan.

Unicode básico soportado (ej: tildes).

Salida esperada

Breve resumen (2–4 líneas).

Dos bloques de código:

html <!-- index.html -->

javascript // script.js

Nada más.

Además

Al final, incluye prompts.md con:

Nombre del chatbot (ChatGPT).

Este prompt como “Prompt 1”.

Espacio para otros prompts si iteramos.

## Prompt 2
# prompts.md

**Chatbot:** ChatGPT

## Prompt 1
Quiero que actúes como desarrollador front-end. Genera código a partir de un template con index.html y script.js.

Contexto

Necesito una página web que invierta un string.

Ejemplo: AI4Devs → sveD4IA.

El template ya trae index.html y script.js. No cambies nombres de archivos ni estructura.

Requisitos

index.html:

Input con id textInput

Botón con id reverseBtn

Contenedor con id result (con aria-live="polite")

Enlazar script.js al final del <body>.

script.js:

Función pura reverseString(str) que devuelve el string invertido.

Listeners para click en botón y Enter en input.

No usar librerías externas ni alert.

Casos borde:

Cadena vacía → mostrar mensaje “Nada que invertir” o vacío.

Espacios se preservan.

Unicode básico soportado (ej: tildes).

Salida esperada

Breve resumen (2–4 líneas).

Dos bloques de código:

html <!-- index.html -->

javascript // script.js

Nada más.

Además

Al final, incluye prompts.md con:

Nombre del chatbot (ChatGPT/Gemini).

Este prompt como “Prompt 1”.

## Prompt 2
Iteración de diseño: mantener la misma estructura de archivos (index.html y script.js) y requisitos funcionales, pero ajustar la UI para que se parezca a la imagen adjunta. Específico:
- Input algo más corto (establecer un `max-width` para el campo de texto).
- Botón “Reverse” con icono de recarga (SVG inline) y estilo prominente.
- Agregar botón “Copy” con icono de portapapeles (SVG inline) para copiar el texto invertido al portapapeles (sin `alert`).
- Conservar `aria-live="polite"` en `#result`.
- Listeners: click en “Reverse”, Enter en el input, y click en “Copy”.
- Sin librerías externas; mantener la función pura `reverseString(str)` y los casos borde (cadena vacía → “Nada que invertir”; preservar espacios; soporte Unicode básico).


