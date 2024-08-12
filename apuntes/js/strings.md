Aquí tienes un resumen de los principales métodos de manipulación de strings en JavaScript:

1. Longitud:
   - `length`: Devuelve la longitud del string.

2. Acceso y búsqueda:
   - `charAt(index)`: Devuelve el carácter en la posición especificada.
   - `indexOf(substring)`: Devuelve la posición de la primera ocurrencia de un substring.
   - `lastIndexOf(substring)`: Devuelve la posición de la última ocurrencia de un substring.
   - `includes(substring)`: Devuelve true si el string contiene el substring.
   - `startsWith(substring)`: Verifica si el string comienza con el substring especificado.
   - `endsWith(substring)`: Verifica si el string termina con el substring especificado.

3. Extracción:
   - `slice(start, end)`: Extrae una parte del string.
   - `substring(start, end)`: Similar a slice, pero no acepta índices negativos.
   - `substr(start, length)`: Extrae una parte del string especificando la longitud.

4. Modificación:
   - `toLowerCase()`: Convierte el string a minúsculas.
   - `toUpperCase()`: Convierte el string a mayúsculas.
   - `trim()`: Elimina espacios en blanco al inicio y al final.
   - `trimStart()` / `trimLeft()`: Elimina espacios en blanco al inicio.
   - `trimEnd()` / `trimRight()`: Elimina espacios en blanco al final.
   - `padStart(targetLength, padString)`: Rellena el inicio del string.
   - `padEnd(targetLength, padString)`: Rellena el final del string.

5. Reemplazo:
   - `replace(searchValue, replaceValue)`: Reemplaza la primera ocurrencia.
   - `replaceAll(searchValue, replaceValue)`: Reemplaza todas las ocurrencias.

6. División y unión:
   - `split(separator)`: Divide el string en un array de substrings.
   - `join(separator)`: Une elementos de un array en un string.

7. Repetición:
   - `repeat(count)`: Repite el string el número de veces especificado.

8. Comparación:
   - `localeCompare(compareString)`: Compara strings teniendo en cuenta el idioma.

9. Plantillas de strings:
   - Uso de backticks (`) para crear strings multilínea y para interpolación.

 