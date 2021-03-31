//Formas de representar un grafo

/*
       2 - 0
      / \
     1 - 3
*/

//Edge list
//Si obervamos creamos arrays con las parejas de nodos que están conectados
const graph = [ [0,2], [2,3], [2,1], [1,3] ];

//Adjacent List
//Está forma creamos arrays que adentro tenga los valores con los que conecta cada nodo, esto va por índice, empezando de 0
//              0    1     2        3
const graph = [[2], [2,3], [0,1,3], [1,2]];
//Forma de objeto
const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
};

//Adjacent Matrix
//Para esta forma es como trabajar una matriz identidad de matemáticas discretas, si existe la conexión o relación se coloca un 1, si no existe pones un 0, de igual forma se hace por index, desde 0 hasta 3
const graph = [[0,0,1,0], [0,0,1,1], [1,1,0,1], [0,1,1,0]];

const graph = {
     0: [0,0,1,0],
     1: [0,0,1,1],
     2: [1,1,0,1],
     3: [0,1,1,0]
};