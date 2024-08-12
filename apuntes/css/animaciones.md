### 1. **Animación de Desplazamiento (Slide Animation)**

Este ejemplo mueve un cuadro de izquierda a derecha:

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: slide 2s ease-in-out infinite;
}
```

- **`@keyframes slide`**: Define la animación que mueve el cuadro horizontalmente.
- **`animation: slide 2s ease-in-out infinite`**: Aplica la animación con una duración de 2 segundos, con una curva de aceleración `ease-in-out`, y se repite infinitamente.

### 2. **Animación de Opacidad (Fade In/Out Animation)**

Este ejemplo hace que un elemento aparezca y desaparezca gradualmente:

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: fade 3s linear infinite;
}
```

- **`@keyframes fade`**: Define la animación que cambia la opacidad del cuadro, haciéndolo aparecer y desaparecer.
- **`animation: fade 3s linear infinite`**: La animación tiene una duración de 3 segundos, con una transición lineal y se repite infinitamente.

### 3. **Animación de Rotación (Rotate Animation)**

Este ejemplo hace que un elemento gire 360 grados:

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: green;
  animation: rotate 2s linear infinite;
}
```

- **`@keyframes rotate`**: Define la animación que rota el elemento desde 0 hasta 360 grados.
- **`animation: rotate 2s linear infinite`**: La animación tiene una duración de 2 segundos y se repite infinitamente con una transición lineal.

### 4. **Animación de Escalado (Scale Animation)**

Este ejemplo hace que un elemento crezca y vuelva a su tamaño original:

```css
@keyframes scale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  animation: scale 1.5s ease-in-out infinite;
}
```

- **`@keyframes scale`**: Define la animación que escala el elemento desde su tamaño original a 1.5 veces su tamaño y luego vuelve al original.
- **`animation: scale 1.5s ease-in-out infinite`**: La animación tiene una duración de 1.5 segundos y se repite infinitamente con una transición `ease-in-out`.

### 5. **Animación de Parpadeo (Blinking Animation)**

Este ejemplo hace que un elemento parpadee:

```css
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: yellow;
  animation: blink 1s step-start infinite;
}
```

- **`@keyframes blink`**: Define la animación que alterna la opacidad del elemento entre 1 y 0, haciéndolo parpadear.
- **`animation: blink 1s step-start infinite`**: La animación se ejecuta en 1 segundo y se repite infinitamente.

### 6. **Animación de Movimiento en Diagonal (Diagonal Move Animation)**

Este ejemplo mueve un elemento en diagonal desde la esquina superior izquierda a la inferior derecha:

```css
@keyframes diagonalMove {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(200px, 200px);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: orange;
  animation: diagonalMove 3s ease-in-out infinite;
}
```

- **`@keyframes diagonalMove`**: Define la animación que mueve el elemento desde la posición `(0, 0)` a `(200px, 200px)` en ambas direcciones.
- **`animation: diagonalMove 3s ease-in-out infinite`**: La animación tiene una duración de 3 segundos, con una curva de aceleración `ease-in-out`, y se repite infinitamente.

### 7. **Animación de Rebote (Bounce Animation)**

Este ejemplo hace que un elemento rebote:

```css
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: cyan;
  animation: bounce 1s ease infinite;
}
```

- **`@keyframes bounce`**: Define la animación que hace que el elemento se mueva hacia arriba y luego vuelva a su posición original.
- **`animation: bounce 1s ease infinite`**: La animación tiene una duración de 1 segundo y se repite infinitamente.

### 8. **Animación de Colores (Color Change Animation)**

Este ejemplo cambia el color de fondo de un elemento en un ciclo:

```css
@keyframes colorChange {
  0% {
    background-color: red;
  }
  33% {
    background-color: blue;
  }
  66% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
}

.box {
  width: 100px;
  height: 100px;
  animation: colorChange 4s linear infinite;
}
```

- **`@keyframes colorChange`**: Define la animación que cambia el color de fondo en tres etapas diferentes.
- **`animation: colorChange 4s linear infinite`**: La animación tiene una duración de 4 segundos y se repite infinitamente con una transición lineal.

### 9. **Animación de Barrido (Sweep Animation)**

Este ejemplo simula un barrido de color a lo largo de un elemento:

```css
@keyframes sweep {
  from {
    background-position: 0%;
  }
  to {
    background-position: 100%;
  }
}

.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(90deg, red, yellow, green, blue);
  background-size: 400%;
  animation: sweep 3s linear infinite;
}
```

- **`@keyframes sweep`**: Define la animación que mueve el fondo de izquierda a derecha a lo largo del elemento.
- **`animation: sweep 3s linear infinite`**: La animación tiene una duración de 3 segundos y se repite infinitamente con una transición lineal.
