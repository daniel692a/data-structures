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

### Linked List

Las linked list son muy distintas a las anteriores, para tener un ejemplo visual veamos la siguiente imagen.

![linked-list](./imgs/linked-list)

Esta sería la anatomía de una linked list, donde tenemos nodos, el nodo principal que en la imgen es el 3, se convierte en la cabeza, el último nodo (7), se convierte en la cola. Las flechas que puedes ver son lo que permite ligar a los nodos.

Existen dos tipos de linked list:

* Singly Linked List
* Doubly Linked List

Por ahora veremos la Singly, pero puedes acceder al siguiente enlace para conocer la Doubly:

[Estructuras de Datos]: https://medium.com/@bohndez.dev/estructuras-de-datos-linked-list-en-javascript-e84f3c50a4c4	"Linked List"

##### Métodos de las Linked List

|     Método      |            Acción            |
| :-------------: | :--------------------------: |
|     prepend     |  Agregar un nodo al inicio   |
|     append      |   Agregar un nodo al final   |
| Lookup / search |        Buscar un nodo        |
|     insert      | Insertar un nodo en la lista |
|     delete      |        Borrar un nodo        |

Para buscar un elemento no tendremos que pasar un índice o una key como lo vimos en las anteriores, tendremos que recorrer toda la lista y por eso tiene la particularidad de ser lenta.

Un nodo se componen de dos factores principales, su valor y el valor del next o siguiente:

![s-link](./imgs/s-link)

Es importante aclarar que si estuvieras en la cola o en otra posición y quieres regresar a un valor de atrás, eso no se puede hacer, tienes que volver a empezar la búsqueda.

##### ¿Cómo se guardan las LinkedList?

El problema de las búsquedas en una linked list se debe a como se almacenan los datos, veamos gráficamente como se guarda una linked list:

![how-l](./imgs/how-l)

Cómo vemos en la imagen los slots no están en secuencia como un array, que después de un slot está el otro, si no que los nodos de las linked list son aleatorios en la memoria, aunque esta estructura de datos solo conoce a su siguiente nodo, los nodos pueden estar guardados aleatoriamente en la memoria porque cada nodo sabe cuál es la referencia de memoria del siguiente nodo.

Si se quiere acceder a uno de los cuadritos de la imagen, la computadora no sabrá el índice de él, pero tiene el address del primer nodo o el head y ese nodo sabe el valor del siguiente.

## Nota

Hay dos formas en las que se puede acceder a la información.

* **Acceso Aleatorio**: Se puede acceder al n-ésimo elemento de una lista de elementos en un tiempo constante. Ejemplo de esto son los **arreglos**, ya que se reservan espacios de memorias seguidos (sean arreglos dinámicos o no). Por esto, se puede acceder directamente a las posición 3 de un arreglo como array[2].

  ![array-vs-ll](./imgs/array-vs-ll)

* **Acceso Secuencial:** En este caso, un grupo de elementos es accedido en un predeterminado orden secuencial. Las l**inked list** son ejemplo de esto. Como **no** están de manera continua en memoria, para acceder a un nodo en particular, debemos recorrer la lista, accediendo a los apuntadores del siguiente elemento. Es decir, si quiero acceder a la posición 3 de la lista, debo pasar por la posición 1, luego a la 2 y ahí llego a la 3.

  ![array-vs-ll1](./imgs/array-vs-lll1)

### Doubly Linked List

En esta estructura de datos ya no tienes que hacer loop para poder recorrer otra vez la linked list, sino que ahora puedes ir de la cola a la cabeza, tienen dos direcciones, su estructura es algo parecida a esta:

![dll](./imgs/dll)

Lo que salta a primera lista es que ya no tenemos 2 valores como en la singly, ahora tenemos 3, no sólo el next y el value, ahora esta el previo, en memoria se vería algo así:

![mdll](./imgs/mdll)

Una doubly linked list tiene el mismo comportamiento que una singly linked list, pero con la particularidad de que esta **SI** puede regresar. Aún necesita ir moviéndose una por una, pero ahora si lo desea puede regresar porque ya conoce quién es su elemento anterior y también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.