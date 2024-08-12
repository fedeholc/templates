Aquí tienes un resumen de los principales métodos para trabajar con Objetos en JavaScript:

1. Creación y manipulación:

   - `Object.create()`: Crea un nuevo objeto con el prototipo especificado.
   - `Object.assign()`: Copia las propiedades de uno o más objetos fuente a un objeto destino.
   - Spread operator (`...`): Crea una copia superficial del objeto.

2. Propiedades:

   - `Object.keys()`: Devuelve un array con las claves enumerables del objeto.
   - `Object.values()`: Devuelve un array con los valores de las propiedades enumerables.
   - `Object.entries()`: Devuelve un array de pares [clave, valor] de las propiedades enumerables.
   - `Object.getOwnPropertyNames()`: Devuelve un array con todas las propiedades (enumerables o no).
   - `Object.getOwnPropertyDescriptor()`: Devuelve el descriptor de una propiedad.
   - `Object.defineProperty()`: Define una nueva propiedad o modifica una existente.
   - `Object.defineProperties()`: Define nuevas propiedades o modifica existentes.

3. Prototipos:

   - `Object.getPrototypeOf()`: Devuelve el prototipo de un objeto.
   - `Object.setPrototypeOf()`: Establece el prototipo de un objeto.

4. Prevención de modificaciones:

   - `Object.freeze()`: Congela un objeto (no se pueden añadir, eliminar ni modificar propiedades).
   - `Object.seal()`: Sella un objeto (no se pueden añadir ni eliminar propiedades, pero se pueden modificar las existentes).
   - `Object.preventExtensions()`: Previene que se añadan nuevas propiedades al objeto.
   - `Object.isExtensible()`: Determina si un objeto es extensible.
   - `Object.isFrozen()`: Determina si un objeto está congelado.
   - `Object.isSealed()`: Determina si un objeto está sellado.

5. Iteración:

   - `for...in`: Itera sobre las propiedades enumerables de un objeto.
   - `Object.keys().forEach()`: Itera sobre las claves de un objeto.

6. Comprobación:

   - `hasOwnProperty()`: Determina si un objeto tiene una propiedad específica como propia.
   - `in` operator: Determina si una propiedad especificada está en el objeto o su cadena de prototipos.

7. Conversión:
   - `JSON.stringify()`: Convierte un objeto a una cadena JSON.
   - `JSON.parse()`: Analiza una cadena JSON y la convierte en un objeto JavaScript.
