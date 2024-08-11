La manipulación del DOM (Document Object Model) con JavaScript es una habilidad esencial para crear interacciones dinámicas en páginas web. El DOM es una representación estructurada de un documento HTML o XML, y con JavaScript, puedes acceder y modificar elementos, atributos, y contenido.

A continuación te explico cómo realizar manipulación básica del DOM:

### 1. **Acceder a elementos del DOM**

Puedes acceder a elementos del DOM utilizando métodos como:

- `getElementById`: Selecciona un elemento por su `id`.
- `getElementsByClassName`: Selecciona todos los elementos que tienen una clase específica.
- `getElementsByTagName`: Selecciona todos los elementos con una etiqueta específica.
- `querySelector`: Selecciona el primer elemento que coincide con un selector CSS.
- `querySelectorAll`: Selecciona todos los elementos que coinciden con un selector CSS.

**Ejemplos:**

```javascript
// Acceder a un elemento por su id
const titulo = document.getElementById("titulo");

// Acceder a elementos por su clase
const items = document.getElementsByClassName("item");

// Acceder a elementos por su etiqueta
const parrafos = document.getElementsByTagName("p");

// Acceder al primer elemento que coincide con un selector CSS
const primerItem = document.querySelector(".item");

// Acceder a todos los elementos que coinciden con un selector CSS
const todosLosItems = document.querySelectorAll(".item");
```

### 2. **Modificar el contenido de un elemento**

Puedes cambiar el contenido de un elemento usando propiedades como:

- `textContent`: Modifica solo el texto dentro de un elemento.
- `innerHTML`: Modifica el contenido HTML dentro de un elemento.

**Ejemplos:**

```javascript
// Cambiar el texto de un elemento
titulo.textContent = "Nuevo Título";

// Cambiar el contenido HTML de un elemento
primerItem.innerHTML = "<strong>Primer ítem actualizado</strong>";
```

### 3. **Modificar atributos**

Puedes cambiar o agregar atributos a un elemento con:

- `setAttribute`: Establece el valor de un atributo.
- `getAttribute`: Obtiene el valor de un atributo.
- `removeAttribute`: Elimina un atributo.

**Ejemplos:**

```javascript
// Cambiar el atributo src de una imagen
const imagen = document.querySelector("img");
imagen.setAttribute("src", "nueva-imagen.jpg");

// Obtener el valor de un atributo
const valorSrc = imagen.getAttribute("src");

// Eliminar un atributo
imagen.removeAttribute("alt");
```

### 4. **Modificar estilos CSS**

Puedes modificar los estilos de un elemento utilizando la propiedad `style`:

**Ejemplos:**

```javascript
// Cambiar el color del texto
titulo.style.color = "blue";

// Cambiar el fondo
titulo.style.backgroundColor = "yellow";

// Cambiar el tamaño de la fuente
titulo.style.fontSize = "24px";
```

### 5. **Añadir y quitar clases**

Para manipular clases CSS, puedes utilizar:

- `classList.add`: Añade una clase.
- `classList.remove`: Quita una clase.
- `classList.toggle`: Añade la clase si no existe, o la quita si existe.
- `classList.contains`: Verifica si una clase existe.

**Ejemplos:**

```javascript
// Añadir una clase
titulo.classList.add("resaltado");

// Quitar una clase
titulo.classList.remove("resaltado");

// Alternar una clase (añadir si no está, quitar si está)
titulo.classList.toggle("resaltado");

// Verificar si tiene una clase
if (titulo.classList.contains("resaltado")) {
  console.log("El título está resaltado");
}
```

### 6. **Crear y agregar elementos**

Puedes crear nuevos elementos y agregarlos al DOM con:

- `createElement`: Crea un nuevo elemento HTML.
- `appendChild`: Añade un nuevo nodo como hijo de un elemento.
- `insertBefore`: Inserta un nodo antes de otro nodo específico.
- `removeChild`: Elimina un nodo hijo de un elemento.

**Ejemplos:**

```javascript
// Crear un nuevo párrafo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo";

// Añadir el párrafo al final del body
document.body.appendChild(nuevoParrafo);

// Insertar un nuevo ítem antes del primer ítem
const lista = document.querySelector("ul");
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo ítem";
lista.insertBefore(nuevoItem, lista.firstChild);

// Eliminar el primer ítem de la lista
lista.removeChild(lista.firstChild);
```

### 7. **Manipular eventos**

Puedes agregar eventos a los elementos para hacer que respondan a las interacciones del usuario:

**Ejemplo:**

```javascript
// Añadir un evento de clic a un botón
const boton = document.querySelector("button");
boton.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});
```

### Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulación del DOM</title>
  </head>
  <body>
    <h1 id="titulo">Hola Mundo</h1>
    <ul>
      <li class="item">Item 1</li>
      <li class="item">Item 2</li>
      <li class="item">Item 3</li>
    </ul>
    <button>Click Me</button>

    <script>
      // Modificar el texto del título
      const titulo = document.getElementById("titulo");
      titulo.textContent = "Nuevo Título";

      // Cambiar color del título
      titulo.style.color = "red";

      // Crear y agregar un nuevo párrafo
      const nuevoParrafo = document.createElement("p");
      nuevoParrafo.textContent =
        "Este es un nuevo párrafo añadido con JavaScript";
      document.body.appendChild(nuevoParrafo);

      // Añadir un evento de clic al botón
      const boton = document.querySelector("button");
      boton.addEventListener("click", function () {
        alert("¡Botón clickeado!");
      });
    </script>
  </body>
</html>
```
