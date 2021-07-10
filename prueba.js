// cosas importantes a saber 
//creacion de metodos en los prototipos 
//clases
//como asignar nuevas propiedades en la instancia 
//arrays y metodos de arrays 
//objetos 

//funciones
//function nombreDeClase(argumento){accion con base al argumento }
//bucles

//--Array

//nombreDelArray[ITEM];
//nombreDelArray.push(elementoIngresadoAlFinalDelArray)
//nombreDelArray.pop()
//nombreDelArray.unshift()

//--OBJETOS

//para objetos el for..in
//for(var key in objeto)
//console.log(key)

// contiene varias  clave , valor
//const nombreDelObjeto={
//    nombreClave1:atributoDelValor1,
//    nombreClave2:atributoDelValor2 

// funciones dentro de un objeto son llamdos metodos
//salidar:function(){return 'Hola ${this.nombre}'}
//--Brackets notation 
//persona[' nombreClave2']
//}


//--Clases =. es la estructura principal en el cual puedo crear objetos 
//forma 1 
//function nombreClase(argumento1,argumento2) {
//    this.nombreArgumento1=argumento1;
//    this.nombreArgumento2=argumento2;
//}
//prototipos
//nombreClase.prototype.nombreFuncion =function{}
//forma 2
//class nombreClase{
//    constuctor(instancia1,instancia2){
//
//    }
//}
//--callback
//es una funcion que es enviuada como arfumento de otra funcion
//function sumar(a,b){return a+b;}

//function totalCompra(cb,a,b){
//    return `el total de tu compra es: ${cb(a,b)}`
//}
//console.log(totalCompra(sumar,10,15)) 

//.map
//aplica una logica sobre los elementos de un array y va metiendo los resultados de esa logica en un nuevo array . este nuevo array se retonta como resultado del map
//var array=[1,2,3,74];
//var arrayConMap=array.map(function(elementoDeArray){return elementoDeArray+2});

//.filter filtra un los elementos de un Array
//var filtrados = array.filter(function(elemento){return elemento>100});

//reduce .. reduce un array de elementos a un unico valor ; en cada iteracion se va guardando en un acumulador del resultado 

//var reducido= array.reduce(function(acumulador,elemento){return acumulador+elemento;}0=> el cero al final incida el valor inicial que va a tener el acumulador en el reduce);

//.sort ??
/* EJERCICIO DE NUMERO ALREVEZ
 let numero = 12;

numero=numero.toString();
  let numInvertido='';
  for(cont=numero.length-1;cont>=0;cont--)
  {
    numInvertido+=numero[cont];
  }
  console.log(numero)
  console.log(numInvertido)
    if(numInvertido===numero){
      return a="Es capicua"
    }
    else 
    {
      return a="No es capicua"
    }
  */  
/* eliminacion de lestas especificas

let cadena= 'murcuelago';
 let cadenaComparacion='';
 console.log(cadena[3]);
 for (cont=0;cont<cadena.length;cont++){
    console.log(cadena[cont]);
    console.log(cadenaComparacion)
     if(cadena[cont]==='a'){continue;}else if(cadena[cont]==='b'){continue;}else if(cadena[cont]==='c'){continue;}else{cadenaComparacion=cadenaComparacion+cadena[cont]}
 }
 console.log(cadenaComparacion);
 return cadenaComparacion;*/
 

 /*arreglo de matrices por tamano 
 let j=0;
 let arr=['uno' , 'dos' , 'tres', 'cuatro' , 'cinco'];
 MatrizOrdenada=[];
 for(i=0;i<arr.length;i++){
     let carta=arr[i].length;
 } 
 console.log(arr.length)*/

 /*conjunto de arrays*/
 
let arreglo1=[1,2,3,4,5,6,7,8,9];
let arreglo2=[1,5,7,6,11,12];
let arregloConjunto=[];
for(let i=0;i<arreglo1.length;i++){
    for(let j=0;j<arreglo2.length;j++){
        if(arreglo2[j]===arreglo1[i]){arregloConjunto.push(arreglo2[j])}
    }
    console.log(arregloConjunto);
}
return arregloConjunto;