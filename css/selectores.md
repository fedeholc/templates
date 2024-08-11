## **1. Selectores Básicos**

### **Selector de Tipo**

- **Uso**: Selecciona todos los elementos de un tipo específico.
- **Sintaxis**: `elemento`
- **Ejemplo**:
  ```css
  p {
    color: blue;
  }
  ```
  - Selecciona todos los párrafos (`<p>`).

### **Selector de Clase**

- **Uso**: Selecciona todos los elementos que tienen una clase específica.
- **Sintaxis**: `.clase`
- **Ejemplo**:
  ```css
  .highlight {
    background-color: yellow;
  }
  ```
  - Selecciona todos los elementos con la clase `highlight`.

### **Selector de ID**

- **Uso**: Selecciona un único elemento que tiene un ID específico.
- **Sintaxis**: `#id`
- **Ejemplo**:
  ```css
  #header {
    font-size: 24px;
  }
  ```
  - Selecciona el elemento con el ID `header`.

### **Selector Universal**

- **Uso**: Selecciona todos los elementos.
- **Sintaxis**: `*`
- **Ejemplo**:
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```
  - Elimina márgenes y rellenos para todos los elementos.

### **Selector de Atributo**

- **Uso**: Selecciona elementos basados en un atributo y/o su valor.
- **Sintaxis**: `[atributo]`, `[atributo="valor"]`
- **Ejemplo**:
  ```css
  [type="text"] {
    border: 1px solid #ccc;
  }
  ```
  - Selecciona todos los campos de entrada (`<input>`) de tipo texto.

## **2. Selectores Combinados**

### **Selector Descendiente**

- **Uso**: Selecciona elementos que son descendientes de un elemento específico.
- **Sintaxis**: `elemento1 elemento2`
- **Ejemplo**:
  ```css
  div p {
    color: red;
  }
  ```
  - Selecciona todos los párrafos dentro de cualquier `<div>`.

### **Selector Hijo Directo**

- **Uso**: Selecciona elementos que son hijos directos de un elemento específico.
- **Sintaxis**: `elemento1 > elemento2`
- **Ejemplo**:
  ```css
  ul > li {
    list-style-type: none;
  }
  ```
  - Selecciona todos los elementos `<li>` que son hijos directos de una lista `<ul>`.

### **Selector Adyacente**

- **Uso**: Selecciona el primer elemento que sigue inmediatamente a otro.
- **Sintaxis**: `elemento1 + elemento2`
- **Ejemplo**:
  ```css
  h1 + p {
    margin-top: 0;
  }
  ```
  - Selecciona el primer párrafo que sigue inmediatamente a un `<h1>`.

### **Selector General de Hermanos**

- **Uso**: Selecciona todos los elementos que siguen a otro elemento en el mismo nivel.
- **Sintaxis**: `elemento1 ~ elemento2`
- **Ejemplo**:
  ```css
  h2 ~ p {
    color: green;
  }
  ```
  - Selecciona todos los párrafos que siguen a un `<h2>`.

## **3. Pseudoclases**

### **`:hover`**

- **Uso**: Aplica estilos a un elemento cuando el usuario pasa el cursor sobre él.
- **Ejemplo**:
  ```css
  a:hover {
    text-decoration: underline;
  }
  ```
  - Sube subraya los enlaces cuando el cursor está sobre ellos.

### **`:focus`**

- **Uso**: Aplica estilos a un elemento cuando es enfocado (por ejemplo, un campo de formulario).
- **Ejemplo**:
  ```css
  input:focus {
    outline: 2px solid blue;
  }
  ```
  - Resalta un campo de entrada cuando está enfocado.

### **`:first-child`**

- **Uso**: Selecciona el primer hijo de su padre.
- **Ejemplo**:
  ```css
  p:first-child {
    font-weight: bold;
  }
  ```
  - Hace que el primer párrafo de un contenedor sea negrita.

### **`:last-child`**

- **Uso**: Selecciona el último hijo de su padre.
- **Ejemplo**:
  ```css
  p:last-child {
    margin-bottom: 0;
  }
  ```
  - Elimina el margen inferior del último párrafo de un contenedor.

### **`:nth-child(n)`**

- **Uso**: Selecciona el enésimo hijo de su padre, donde `n` puede ser un número, `odd` (impar) o `even` (par).
- **Ejemplo**:
  ```css
  li:nth-child(odd) {
    background-color: #f0f0f0;
  }
  ```
  - Aplica un fondo gris claro a los elementos de lista impares.

### **`:not(selector)`**

- **Uso**: Selecciona todos los elementos que no coinciden con el selector dado.
- **Ejemplo**:
  ```css
  input:not([type="submit"]) {
    width: 100%;
  }
  ```
  - Hace que todos los campos de entrada ocupen el 100% de ancho, excepto los de tipo submit.

## **4. Pseudoelementos**

### **`::before`**

- **Uso**: Inserta contenido antes del contenido real de un elemento.
- **Ejemplo**:
  ```css
  h1::before {
    content: "★ ";
    color: gold;
  }
  ```
  - Añade una estrella dorada antes de cada `<h1>`.

### **`::after`**

- **Uso**: Inserta contenido después del contenido real de un elemento.
- **Ejemplo**:
  ```css
  h1::after {
    content: " ★";
    color: gold;
  }
  ```
  - Añade una estrella dorada después de cada `<h1>`.

### **`::first-line`**

- **Uso**: Aplica estilos a la primera línea de un bloque de texto.
- **Ejemplo**:
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```
  - Hace que la primera línea de cada párrafo sea negrita.

### **`::first-letter`**

- **Uso**: Aplica estilos a la primera letra de un bloque de texto.
- **Ejemplo**:
  ```css
  p::first-letter {
    font-size: 2em;
    color: red;
  }
  ```
  - Hace que la primera letra de cada párrafo sea más grande y de color rojo.

## **5. Selectores de Atributos Avanzados**

### **`[attribute^="value"]`**

- **Uso**: Selecciona elementos cuyo valor de atributo comienza con un valor específico.
- **Ejemplo**:
  ```css
  a[href^="https"] {
    color: green;
  }
  ```
  - Selecciona todos los enlaces que comienzan con `https`.

### **`[attribute$="value"]`**

- **Uso**: Selecciona elementos cuyo valor de atributo termina con un valor específico.
- **Ejemplo**:
  ```css
  img[src$=".jpg"] {
    border: 2px solid black;
  }
  ```
  - Selecciona todas las imágenes con la extensión `.jpg`.

### **`[attribute*="value"]`**

- **Uso**: Selecciona elementos cuyo valor de atributo contiene un valor específico.
- **Ejemplo**:
  ```css
  p[class*="note"] {
    background-color: yellow;
  }
  ```
  - Selecciona todos los párrafos que contienen la palabra `note` en su clase.
