## unit testing Jest / vitest

Se puede hacer con jest como indica acá `https://jestjs.io/docs/getting-started` pero para poder usar ES Modules hay que hacer unos pasos extras.

Es más fácil usar `vitest` (`https://vitest.dev/guide/`) que con instalarlo (`npm install -D vitest`) ya se puede usar.
Agregar al `package.json`:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

para correr los tests con `npm run test`.

## End to end testing: Playwright

instalar: `npm install -D playwright`

ojo, aún no anda en ubuntu 24.04, hay que instalar la versión canary: `npm install -D @playwright/test@next`
para correr los tests: `npx playwright test`
para correr test con ui: `npx playwright test --ui`
para grabar un test: `npx playwright codegen <url>`
