console.log("hola mundo")
//alert("hola mundo js")
console.log(" resultado es:" , 4*145)
console.warn("esto es warn")
//variables//
var numeroUno = 45;//numerico
var texto = "hola como estas "; //string//cadena "5"tambien puede ser numero todo entre comillas
var logico = false;//booleano 1 true 0 false
console.log("operacion : " ,numeroUno+10 );
//objetos:
var persona={
    nombre:"juan",
    apellido:"perez",
    edad:20
}
console.log(persona.apellido )
//document.getElementById("parrafo") .innerText= persona.nombre; error( debo encontrar)
   
//clase 2 js
//objeto number
console.log("1. es finito:",Number.isFinite(50));
console.log("2.es finito:", Number.isFinite(Infinity))

console.log("3. es entero", Number.isInteger(4.56));

console.log("5. es NaN:",Number.isNaN(34.5));//NaN significa que No es Un Número.
console.log("6. es NaN:",Number.isNaN(34.5/"A1"));
//PARSEO DE NUMERO
console.log("7. parse entero  :",Number.parseInt("344"));
console.log("8. parse entero :",Number.parseInt("num:42"));
console.log("8. parse entero :",Number.parseInt("45cm"));
console.log("8. parse float :",Number.parseFloat("3.45cm"));
//objeto de valor random
var n =Math.random();
console.log("valor de n :", n)
n=n*10;
console.log("valor random:",Math.floor(n));
