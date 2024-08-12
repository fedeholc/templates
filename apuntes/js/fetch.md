- [fetch](#fetch)
  - [debouncing](#debouncing)
  - [Throttling](#throttling)
  - [Abort](#abort)
  - [debouncing combinado con abort](#debouncing-combinado-con-abort)
  - [data fetching en paralelo](#data-fetching-en-paralelo)
    - [1. **Paralelismo con `Promise.all`**](#1-paralelismo-con-promiseall)
    - [2. **Explicación del Código**](#2-explicación-del-código)
    - [3. **Tratamiento de Errores**](#3-tratamiento-de-errores)
    - [4. **Ejemplo con Manejo de Errores Detallado**](#4-ejemplo-con-manejo-de-errores-detallado)
    - [promise.all vs promise.allSettled](#promiseall-vs-promiseallsettled)

# fetch

## debouncing

```js
let debounceTimeout;

function debounceFetch(input) {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    fetchData(input);
  }, 300); // Espera 300ms antes de hacer la solicitud
}

function fetchData(query) {
  fetch(`https://api.example.com/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

const input = document.querySelector("#searchInput");
input.addEventListener("input", (e) => debounceFetch(e.target.value));
```

## Throttling

```js
let throttleTimeout;

function throttleFetch(input) {
  if (!throttleTimeout) {
    throttleTimeout = setTimeout(() => {
      fetchData(input);
      throttleTimeout = null;
    }, 300); // Intervalo de 300ms para permitir nuevas solicitudes
  }
}

function fetchData(query) {
  fetch(`https://api.example.com/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

const input = document.querySelector("#searchInput");
input.addEventListener("input", (e) => throttleFetch(e.target.value));
```

## Abort

```js
let controller;

function fetchData(query) {
  if (controller) {
    controller.abort(); // Cancelar la solicitud anterior
  }

  controller = new AbortController();
  const signal = controller.signal;

  fetch(`https://api.example.com/search?q=${query}`, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error:", error);
      }
    });
}

const input = document.querySelector("#searchInput");
input.addEventListener("input", (e) => fetchData(e.target.value));
```

## debouncing combinado con abort

```js
let debounceTimeout;
let controller;

function debounceFetch(input) {
  // Limpiamos el timeout anterior
  clearTimeout(debounceTimeout);

  // Configuramos un nuevo debounce
  debounceTimeout = setTimeout(() => {
    fetchData(input);
  }, 300); // Espera 300ms antes de hacer la solicitud
}

function fetchData(query) {
  // Si ya hay una solicitud en curso, la cancelamos
  if (controller) {
    controller.abort();
  }

  // Creamos un nuevo AbortController para la nueva solicitud
  controller = new AbortController();
  const signal = controller.signal;

  // Realizamos la solicitud fetch
  fetch(`https://api.example.com/search?q=${query}`, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error:", error);
      }
    });
}

// Asignamos el evento de input a la función de debounce
const input = document.querySelector("#searchInput");
input.addEventListener("input", (e) => debounceFetch(e.target.value));
```

## data fetching en paralelo

Para realizar **data fetching en paralelo** con `fetch` en JavaScript, puedes aprovechar el hecho de que `fetch` devuelve una `Promise`. Puedes utilizar `Promise.all` para ejecutar múltiples solicitudes al mismo tiempo y esperar a que todas se resuelvan antes de continuar. Esto es útil cuando tienes que hacer varias peticiones y no quieres que se ejecuten secuencialmente, lo cual sería más lento.

A continuación, te muestro un ejemplo paso a paso.

### 1. **Paralelismo con `Promise.all`**

Supongamos que quieres hacer tres solicitudes de `fetch` en paralelo:

```javascript
const url1 = "https://api.example.com/data1";
const url2 = "https://api.example.com/data2";
const url3 = "https://api.example.com/data3";

async function fetchDataInParallel() {
  try {
    // Inicia todas las solicitudes de fetch en paralelo
    const [response1, response2, response3] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);

    // Verifica que todas las respuestas sean exitosas
    if (!response1.ok || !response2.ok || !response3.ok) {
      throw new Error("Error en una de las solicitudes");
    }

    // Procesa los datos (esto también se puede hacer en paralelo)
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    // Usa los datos
    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataInParallel();
```

### 2. **Explicación del Código**

- **`Promise.all([...])`**:

  - Este método toma un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto. Si alguna de las promesas falla, `Promise.all` rechazará inmediatamente la promesa con el error de la promesa que falló.

- **Paralelismo**:

  - Las llamadas a `fetch(url1)`, `fetch(url2)`, y `fetch(url3)` se ejecutan en paralelo. No esperarán a que una se resuelva antes de iniciar la siguiente.

- **Verificación de Respuestas**:

  - Es buena práctica verificar si las respuestas son exitosas (`response.ok`) antes de intentar procesar los datos.

- **Procesamiento de Datos**:
  - Una vez que todas las promesas se resuelven, puedes procesar las respuestas. Aquí, se utiliza `response.json()` para convertir las respuestas en objetos JavaScript.

### 3. **Tratamiento de Errores**

Si una de las solicitudes falla, `Promise.all` rechazará la promesa resultante, y el flujo de ejecución pasará al bloque `catch`.

### 4. **Ejemplo con Manejo de Errores Detallado**

Puedes manejar errores individualmente para cada `fetch` si lo prefieres, en lugar de rechazar todo en el primer error:

```javascript
async function fetchDataInParallel() {
  try {
    const responses = await Promise.all([
      fetch(url1).then((response) =>
        response.ok ? response.json() : Promise.reject("Error en url1")
      ),
      fetch(url2).then((response) =>
        response.ok ? response.json() : Promise.reject("Error en url2")
      ),
      fetch(url3).then((response) =>
        response.ok ? response.json() : Promise.reject("Error en url3")
      ),
    ]);

    const [data1, data2, data3] = responses;

    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataInParallel();
```

### promise.all vs promise.allSettled

Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.
