//Helpers

// la funcion de arriba es la misma que esta pero mas simplificada
function esPar(numerito){
    return (numerito % 2 === 0);
}

//funcion para el calculo del promedio

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const prommedioLista = sumaLista / lista.length;

    return prommedioLista;
}

//calculo de la mediana general | Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Array que contenga solamente los salarios. | Mediana general

const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

//array para ordenar el array pasado
//dentro del metodo sort, como en el metodo de cualquier array, se envia una funcion anonima como parametro
//hacemos una resta de salaryA - salaryB = 1
// si los dos salarios son iguales, nos da un cero
// si salario a es menor a b, nos regresa un numero negativo. 


const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);


//     if (numerito % 2 === 0) {
//         return true;
//     }   else {
//         return false;
//     }
// }


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
// se creaa una variable donde se guarda ese 10%


const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,

});