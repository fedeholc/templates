El routing en JavaScript se refiere al proceso de gestionar la navegación entre diferentes vistas o páginas dentro de una aplicación de una sola página (SPA, por sus siglas en inglés). Esto se logra cambiando el contenido mostrado sin recargar la página completa. A continuación, te muestro cómo implementar routing básico con JavaScript puro.

### 1. **Configuración básica**

Primero, necesitas una estructura HTML básica con un contenedor donde se cargarán las diferentes vistas.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SPA Routing</title>
  </head>
  <body>
    <nav>
      <a href="#/" id="home-link">Home</a>
      <a href="#/about" id="about-link">About</a>
      <a href="#/contact" id="contact-link">Contact</a>
    </nav>

    <div id="app"></div>

    <script src="app.js"></script>
  </body>
</html>
```

### 2. **Definir vistas y rutas**

En este ejemplo, cada vista es un simple bloque de HTML que se mostrará en el contenedor principal (`#app`). Las rutas se definen usando la parte hash (`#`) de la URL.

```javascript
// app.js

// Definimos nuestras vistas como funciones que devuelven HTML
const Home = () => `
    <h1>Home</h1>
    <p>Bienvenido a la página de inicio.</p>
`;

const About = () => `
    <h1>About</h1>
    <p>Esta es la página de acerca de nosotros.</p>
`;

const Contact = () => `
    <h1>Contact</h1>
    <p>Contáctanos en esta página.</p>
`;

// Definimos nuestras rutas
const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

// Función que maneja el cambio de ruta
const router = () => {
  // Obtener la ruta actual (después de #)
  const path = window.location.hash.slice(1) || "/";

  // Obtener la función correspondiente a la ruta
  const route = routes[path];

  // Si la ruta existe, renderizamos la vista; si no, mostramos un mensaje de error
  document.getElementById("app").innerHTML = route
    ? route()
    : "<h1>404 Not Found</h1>";
};

// Escuchar cambios en el hash (cuando se navega)
window.addEventListener("hashchange", router);

// Llamar al router en la carga de la página
window.addEventListener("load", router);
```

### 3. **Explicación del código**

1. **Vistas**:

   - `Home`, `About`, y `Contact` son funciones que devuelven el contenido HTML para cada página.

2. **Rutas**:

   - `routes` es un objeto que mapea las rutas (`/`, `/about`, `/contact`) a sus respectivas vistas.

3. **Router**:

   - La función `router` se encarga de manejar la navegación.
   - Obtiene la ruta actual desde el hash en la URL (`window.location.hash.slice(1)`).
   - Busca la vista correspondiente en el objeto `routes` y la inserta en el contenedor `#app`.
   - Si la ruta no existe, muestra un mensaje de "404 Not Found".

4. **Eventos**:
   - `hashchange`: Se dispara cuando el hash en la URL cambia (por ejemplo, al hacer clic en un enlace de navegación).
   - `load`: Se dispara cuando la página se carga, para renderizar la vista inicial.

### 4. **Probando la aplicación**

Cuando haces clic en los enlaces de navegación (`Home`, `About`, `Contact`), el hash en la URL cambia, por ejemplo, a `#/about`, y la vista correspondiente se carga sin recargar toda la página.

### 5. **Navegación dinámica**

Puedes agregar una navegación dinámica actualizando el contenido del hash usando JavaScript:

```javascript
const goTo = (path) => {
  window.location.hash = path;
};

// Ejemplo: Navegar a la página de contacto programáticamente
goTo("/contact");
```

### 6. **Mejoras adicionales**

- **Historial del navegador**: Para una experiencia de navegación más completa, puedes implementar routing basado en la API `History` (`history.pushState()` y `history.replaceState()`) en lugar de `hashchange`, aunque eso requiere un servidor que maneje correctamente las rutas.
- **Asincronía**: Si las vistas requieren cargar contenido dinámico (por ejemplo, desde un servidor), puedes hacer uso de `fetch` o `async/await` para obtener datos antes de renderizar las vistas.
- **Router avanzado**: En proyectos más grandes, es común utilizar bibliotecas específicas para el enrutamiento, como `React Router` en aplicaciones React o `Vue Router` en aplicaciones Vue.
