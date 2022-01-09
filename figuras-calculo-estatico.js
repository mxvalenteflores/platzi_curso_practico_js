//Codigo del cuadrado.
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El area del cuadrado mide " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("EL area del cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd();

//Codigo del triangulo.
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados de mi triangulo miden: " 
    + ladoTriangulo1 
    + "cm " 
    + ladoTriangulo2 
    + "cm "
    + baseTriangulo
    + "cm "
);

const alturaTriangulo = 5.5;
console.log("La altura triangulo es de " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("EL perimetro del triangulo es " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("EL area del triangulo es " + areaTriangulo + "cm^2");


console.groupEnd();
 
//Codigo del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");


//Diametro
const diametroCirculo = radioCirculo * 2
console.log("El perimetro del circulo es " + diametroCirculo + "cm");


//PI
const PI = Math.PI;
console.log("El valor de PI es " + PI);


//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("La circunferencia del circulo es " + perimetroCirculo + "cm");


//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El area del circulo es " + areaCirculo + "cm^2");


console.groupEnd();

