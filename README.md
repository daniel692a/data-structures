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
