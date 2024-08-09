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
