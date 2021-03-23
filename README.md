# ¿Qué son las estructuras de Datos?

Es la forma en que vamos a estructurar y guardar los datos, estas nos ayudan a optimizar espacio en memoria. para comprender un poco mejor veamos una analogía:

Mi mamá acaba de lavar mi ropa, después de secarse me la entrega para que la acomodé, si soy desordenado pues en mi armario sólo la botaré y dejaré ahí, puede ser una solución, puede que cierre mi armario y no habrá problema, el problema aparece cuando le pida a mi mamá si me pasa una sudadera, abrirá el armario para buscarla pero le costará mucho encontrarla, y muy posiblemente me regañé por mi desorden.

Pero para no tener ese problema me dedicaré a doblarla y acomodarla correctamente, así tendré más orden, encontraré una prenda fácilmente y posiblemente tenga más espacio para guardar ropa.

Así podríamos a ver las estructuras de datos, una formar de acomodar los datos para optimizar la búsqueda y puede que ahorrar memoria.

Algunos lenguajes de programación ya tienen las estructuras de datos construidas para que la mandes a llamar y empieces a guardar la información pero en JavaScript tenemos que construirlas desde cero para empezar a guardar.

## Memoria y cómo se guardan los datos

* b -> 1 bit
* B -> 1 Byte -> 8 bits
* KB ->  1 KiloByte -> 1024 Bytes
* MB -> 1 MegaByte -> 1024 KBytes
* GB -> 1 GigaByte  -> 1024 MBytes
* TB -> 1 TeraByte -> 1024 GBytes
* PB -> 1 PetaByte -> 1024 TBytes
* EB -> 1 ExaByte -> 1024 PBytes

![memory](./imgs/memory)

Podemos ver a nuestra memoria como una gran celda, donde cada cuadro se llama Memory Slot que son los espacios donde se va a guardar cierta información, en un memory slot podemos vamos a poder almacenar 1 Byte, 8 bits, es importante mencionar que al guardar la información o los datos en la memoria esto sucederá de forma aleatoria, nosotros no decidimos donde vamos a guardar la información, eso lo determina la computadora, pero entonces ¿Cómo sabemos donde se guarda esa información?, eso lo podemos saber por medio de direcciones o address, el address no es más que la dirección de la celda donde se encuentra nuestro valor.

### Arrays

Son una colección de información, también se les conoce como listas. En los arrays se genera un índice para la información  que estamos guardando, algo así:

| index | value    |
| ----- | -------- |
| 0     | 'Daniel' |
| 1     | 'Sandra' |
| 2     | 'Samuel' |
| 3     | 'Martín' |
| 4     | 'Arturo' |

Existen dos tipos de arrays:

* Estáticos: Existen lenguajes como C++ dónde le debemos decir cuantos espacios debe tener nuestra memoria, y eso no se podrá mutar, no podremos agregar más espacios, le dice a la memoria cuántos espacios quiere.

  ```c++
  int numbers[10];
  int decimals = {0.2, 0.7, 0.5};
  ```

* Dinámicos: Por default JavaScript maneja este tipo, son los arrays que puedes mutar, agregar, eliminar, nosotros no estamos manejando la complejidad de cuánto almacenar en memoria. para poder hacer esto lo que hace es generar doble espacio en memoria.

  ![array](./imgs/array-d)

Existe un gran problema, si con el array anterior llenó los otros 3 espacios y deseo agregar un séptimo elemento, lo que hará la computadora es limpiar esos 6 espacios anteriores y buscará doce nuevos para pegar ahí la copia de los 6 que tenemos y el que añadimos.

### Strings

No son como tal una estructura de datos, pero la forma en que se almacena en memoria, lo hace como una estructura de datos, algo importante a destacar que JavaScript y otros lenguajes los Strings son inmutables, esto quiere decir que al crearlo como se ve a continuación:

```javascript
const saludo = `Hola`;
```

Ya no podremos manipularlo, eso se guarda, estos se guardan como un array:

![string](./imgs/string)

El manipular un string crea problemas de cómputo. Su significado si lo traducimos a español sería algo como “cadena”, sin embargo, su verdadero nombre o traducción es “cadena de caracteres”. si le damos un poco de interpretación a esta traducción podemos deducir que se trata de un carácter ligado a otro y así de forma consecutiva, ¡Sí!, son caracteres singulares que están pegados los unos a los otros y en conjunto forman una cadena, de ahí su nombre **string**.

### Hast Tables

Esta estructura de datos ya sube un poco la complejidad, en JavaScript no está del todo construida, pero se pueden ver como Objetos o Maps, les falta ciertas cosas pero son muy similares. Como puedes ver aquí:

![hash](./imgs/hash)

El paso intermedio que tienen las hash tables es la hash function, en este pasó generamos un hash que se convierte en un address para poder accerder al valor que estamos guardando. Veamos como funciona:

![hash-t](./imgs/hash-t)

Lo que se hará es pasar el key, en este caso es mandarinas, a la hash function el cual me va a generar un número, que para esa key será siempre el mismo, ese hash o ese número se va a convertir en mi address donde se va a guardar mi value. Todo lo que pase por hash function se convertirá en los buckets, y para volver a acceder al valor, doy mi key que pasa por la hash function y me devuelve el value.

#### Métodos

| Métodos |             Acción              |
| :-----: | :-----------------------------: |
| insert  | Inserta un elemento en la tabla |
| search  |   Buscar un elemento por key    |
| delete  |       Borrar un elemento        |

#### Colisión de Hash Table

No siempre es bueno trabajar con hash tables porque puede pasar este fenómeno de colisión, puede que me generé un mismo hash para dos keys diferentes