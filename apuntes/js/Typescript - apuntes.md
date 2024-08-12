# Typescript

## Inicializar un proyecto de Typescript (con HTML y CSS)

- Iniciar npm en la carpeta del proyecto `npm init`
- Instalar typescript `npm install typescript --save-dev`
- Iniciar proyecto de typescript `npx tsc --init`
- Crear un archivo index.html, un archivo de CSS y un archivo de typescript (.ts)

  - Ejemplo de index.html:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
        <script src="script.js" defer></script>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
    ```

  - Ejemplo de script.ts:

    ```ts
    function appendTexto(texto: string): void {
      const elemento = document.createElement("p");
      elemento.textContent = texto;
      window.document.body.appendChild(elemento);
    }

    appendTexto("Hola mundo!");
    ```

- Compilar el archivo de typescript `npx tsc` (lo cual genera un archivo script.js)
- Para que se actualice el archivo script.js cada vez que se modifique el archivo script.ts, se puede usar el comando `npx tsc --watch`
- Con estos ejemplos básicos se puede abrir el archivo index.html en el navegador y se mostrará correctamente. Luego si se utilizan ciertas características se requerirá de un servidor HTTP para que funcione correctamente (por ejemplo, si se utiliza fetch para obtener datos de un servidor). Se puede utilizar el Live Preview / Live Server de VSCode.
- También se puede utilizar Vite para crear un proyecto de typescript, que incluye servidor de desarrollo: `npm create vite@latest`.
