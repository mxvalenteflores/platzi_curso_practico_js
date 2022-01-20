//METODO ESTATICO
// const lista1 = [
//     100,
//     200,
//     300,
//     500,

// ];

// //ahora tenemos que sumar todos los elementos dentro de la lista
// //usamos un ciclo for
// // ya no sera varible const sino "let" para que podamos cambiarla en el futuro

// let sumaLista1 = 0;

// for(let i=0; i<lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;


//METODO DINAMICO CON CICLO FOR
// function calcularMediaAritmetica(lista){
//     let sumaLista = 0;

//     for(let i=0; i<lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
// }

//     const prommedioLista = sumaLista / lista.length;

//     return prommedioLista;
// }


//METODO DINAMICO CON METODOS DE STRINGS. METODO.REDUCE
function calcularMediaAritmetica(lista){
  

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const prommedioLista = sumaLista / lista.length;

    return prommedioLista;
}