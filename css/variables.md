## 1. **Variables en CSS (Custom Properties)**

### **Definición de Variables**

Las variables en CSS se definen usando la sintaxis `--nombre-variable`, y se pueden usar en cualquier lugar dentro de las reglas CSS.

- **Definición de una variable**:

  ```css
  :root {
    --main-color: #3498db;
    --padding-size: 16px;
  }
  ```

  - **`:root`** es un selector pseudo-clase que hace que las variables estén disponibles globalmente en todo el documento. Puedes definir variables en cualquier selector para que estén disponibles solo en ese contexto específico.

### **Uso de Variables**

Para usar una variable, se emplea la función `var(--nombre-variable)`.

- **Uso en estilos**:

  ```css
  .button {
    background-color: var(--main-color);
    padding: var(--padding-size);
  }
  ```

  - Esto aplica el color de fondo y el padding según los valores definidos en `--main-color` y `--padding-size`.

### **Valores por Defecto**

Puedes especificar un valor por defecto si la variable no está definida:

- **Ejemplo con valor por defecto**:

  ```css
  .button {
    background-color: var(--secondary-color, #2ecc71);
  }
  ```

  - Si `--secondary-color` no está definida, se usará `#2ecc71` como valor.

### **Reasignación de Variables**

Puedes cambiar el valor de una variable dentro de un contexto específico, como una clase o un elemento:

- **Ejemplo de reasignación**:

  ```css
  .button.alt {
    --main-color: #e74c3c;
  }

  .button.alt {
    background-color: var(--main-color);
  }
  ```

  - Esto aplica un color diferente cuando `.button` tiene la clase `.alt`.

## 2. **Variables en JavaScript**

### **Declaración de Variables**

En JavaScript, puedes declarar variables usando `var`, `let`, o `const`.

- **Declaraciones básicas**:

  ```javascript
  var name = "Alice"; // Variable global o de función
  let age = 30; // Variable de bloque
  const isAdmin = true; // Constante
  ```

  - **`var`** tiene un alcance de función y puede ser redeclarada.
  - **`let`** tiene un alcance de bloque y no puede ser redeclarada en el mismo bloque.
  - **`const`** define una constante que no puede ser reasignada (aunque los objetos y arrays referenciados pueden ser mutados).

### **Uso de Variables**

Las variables se pueden utilizar en cualquier lugar después de ser declaradas, dependiendo de su alcance.

- **Ejemplo**:
  ```javascript
  let greeting = "Hello";
  let name = "Bob";
  console.log(greeting + ", " + name + "!"); // "Hello, Bob!"
  ```

### **Interacción entre CSS y JS con Variables**

Puedes usar JavaScript para leer o modificar las variables CSS (`Custom Properties`) en tiempo real.

- **Obtener el valor de una variable CSS**:

  ```javascript
  let root = document.documentElement;
  let mainColor = getComputedStyle(root)
    .getPropertyValue("--main-color")
    .trim();
  console.log(mainColor); // Imprime el valor de --main-color
  ```

- **Modificar el valor de una variable CSS**:

  ```javascript
  root.style.setProperty("--main-color", "#8e44ad");
  ```

  - Esto cambia el valor de `--main-color` en tiempo real, afectando todos los estilos que la usen.

### **Comunicación entre CSS y JS**

Modificar variables CSS desde JavaScript permite crear interfaces dinámicas que responden a la interacción del usuario.

- **Ejemplo de cambio dinámico**:

  ```javascript
  document.querySelector(".button").addEventListener("click", function () {
    document.documentElement.style.setProperty("--main-color", "#e74c3c");
  });
  ```

  - Esto cambiará el color de la variable CSS `--main-color` al hacer clic en `.button`.

### **Conclusión**

- **CSS**: Las variables permiten reutilizar valores de forma sencilla y mantener consistencia en el diseño. Son ideales para temas, colores, tamaños, etc.
- **JavaScript**: Permite un control más fino y dinámico, interactuando con variables CSS para modificar el estilo en tiempo real o gestionar estados y datos en la lógica de la aplicación.

Este enfoque combinado facilita la creación de interfaces modernas y flexibles que pueden responder a cambios tanto en la lógica como en el diseño.
