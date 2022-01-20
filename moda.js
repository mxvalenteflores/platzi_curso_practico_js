const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

//Este objeto se ira llenando usando un metodo de los arrays.
const lista1Count = {};

lista1.map(
    function (elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

// a object.entries le podemos enviar como argumento el objeto que queremos
//convertir en un array


const lista1Array =  Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];