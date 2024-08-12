# Testing

- [Testing](#testing)
  - [vitest](#vitest)
    - [Vitest en Next.js](#vitest-en-nextjs)
      - [Vitest junto con Playwright](#vitest-junto-con-playwright)
    - [Para usar vitest con testing library](#para-usar-vitest-con-testing-library)
  - [Testing CANVAS API (posibles recursos, no los probé)](#testing-canvas-api-posibles-recursos-no-los-probé)
  - [playwright](#playwright)
  - [React testing library](#react-testing-library)
  - [artículos google sobre unit testing](#artículos-google-sobre-unit-testing)

## vitest

Para ver si sirve:
<https://www.youtube.com/results?search_query=curso+vitest+react>

### Vitest en Next.js

Seguir los pasos que están en <https://nextjs.org/docs/app/building-your-application/testing/vitest>, que basicamente son:

1. instalar vitest, jsdom y react testing library: `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react`
2. crear el archivo de configuración de vitest (vitest.config.ts):

   ```js
   import { defineConfig } from "vitest/config";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: "jsdom",
     },
   });
   ```

3. agregar el script de test en el package.json: `"test": "vitest"`
4. también se puede agregar el de coverage: `"coverage": "vitest run --coverage"` para lo cual cuando se ejecute va a pedir que instalemos ese paquete.

#### Vitest junto con Playwright

Si estamos usando Playwright en el mismo proyecto y hacemos `npm run test` va a llamar también a los test de playwright pero de modo tal que va a dar un error. Para evitar eso hay que configurar vitest de modo que los excluya. Se puede hacer directamente desde la linea de comandos con `--exclude` o en el archivo de configuración de vitest. Para esto hay que incluir todas las exclusiones que hace vitest por default además de la nuestra, si ponemos solo la nuestra toma esa pero faltan las que son por defecto y va a correr todos los test que hay en la carpeta de node modules por ejemplo. Entonces el archivo de configuración para excluir por ejemplo los tests que estén dentro de la carpeta `tests` y que tengan `spec` en el nombre, quedaría así:

```js
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: [
      "**/tests/*spec**",
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
  },
});
```

**Para correr los test de Playwright** hay que hacerlo con `npx playwright test`

### Para usar vitest con testing library

Instalación y configuración <https://www.robinwieruch.de/vitest-react-testing-library/>
En esa instalación también se instala `@testing-library/jest-dom` para poder extender el expect de vitest con los métodos de jest-dom como por ejemplo toBeInTheDocument.
Hay que instalar también `@testing-library/user-event` para poder simular eventos de usuario como clicks, etc. `npm install --save-dev @testing-library/user-event`
Vitest ui para poder ver los tests en el navegador: `npm install --save-dev @vitest/ui`
Linters: `npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom`
Copiar y pegar para instalar todo:
`npm install --save-dev vitest jsdom @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event eslint-plugin-testing-library eslint-plugin-jest-dom`

Otras herramientas para probar:

- jest-axe (accessibility)
- Testing Playground (determining the best query method)
- Wallaby.js (increase test writing productivity)
- mocking service worker <https://mswjs.io/docs/getting-started>

Algunas explicaciones básicas: <https://www.robinwieruch.de/react-testing-library/>

- Cuando se quiere buscar un elemento en el renderizado usar getBy, cuando se quiere buscar que un elemento no esté en el renderizado usar queryBy.
- Para buscar algo que va a estar luego de un tiempo en el renderizado usar findBy, como cuando se hace un fetch en el useEffect y eso aparece recién en el segundo renderizado del componente.
- Recomiendan usar siempre que se pueda Getbytestid (con Data-testid como atributo en el html) porque buscar por clase o id puede fallar si alguien cambia eso en el código por otros motivos.

## Testing CANVAS API (posibles recursos, no los probé)

Mock canvas · vitest-dev/vitest · Discussion #395
🔹<https://github.com/vitest-dev/vitest/discussions/395>

jest-canvas-mock - npm
🔹<https://www.npmjs.com/package/jest-canvas-mock>

How to test HTML5 canvas with jest? - Yonatan Kra
🔹<https://yonatankra.com/how-to-test-html5-canvas-with-jest/>

wobsoriano/vitest-canvas-mock: 🌗 A module used to mock canvas in Vitest.
🔹<https://github.com/wobsoriano/vitest-canvas-mock>

vitest-canvas-mock - npm
🔹<https://www.npmjs.com/package/vitest-canvas-mock>

HTML5 Canvas Testing: Techniques, Tools, and Best Practices
🔹<https://www.askui.com/blog-posts/html5-canvas-testing-techniques-tools-and-best-practices>

## playwright

<https://playwright.dev/>
<https://github.com/jdmesalosada/playwright-course-jm-consultant/tree/main/tests>

## React testing library

<https://testing-library.com/docs/react-testing-library/intro/>

## artículos google sobre unit testing

<https://web.dev/learn/testing/get-started/component-testing>
