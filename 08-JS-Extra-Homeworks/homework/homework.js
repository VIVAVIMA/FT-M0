// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let obj=objeto;
  let nuevoArray=[];
  for (var ky in obj){nuevoArray.push([ky,obj[ky]]);};
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj={};
  for(let i=0; i<string.length;i++)  {if(obj[string[i]]){obj[string[i]]+=1;}  else  {obj[string[i]]=1;}}  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let Mayus="";
  let min="";
  for(let ij=0;ij<s.length;ij++){
    if(s[ij].toLowerCase()===s[ij]){
      min+=s[ij];}

    else{
      Mayus+=s[ij];}
  }
  return Mayus+min;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let invstring="";
  str=str.split(" ");
  for(i=0;i<str.length;i++){
    for(let j=str[i].length-1;j>=0 ;j--){invstring+=str[i][j]}; 
    if (i!==str.length-1){invstring+=(' ')}else{break;}
  }
  return invstring;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=numero.toString();
  let numInvertido='';
  for(cont=numero.length-1;cont>=0;cont--)
  {
    numInvertido+=numero[cont];
  }
  console.log(numero)
  console.log(numInvertido)
    if(numInvertido===numero){
      return "Es capicua"
    }
    else 
    {
      return "No es capicua"
    }

}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaComparacion='';
 console.log(cadena[3]);
 for (cont=0;cont<cadena.length;cont++){
    console.log(cadena[cont]);
    console.log(cadenaComparacion)
     if(cadena[cont]==='a'){continue;}else if(cadena[cont]==='b'){continue;}else if(cadena[cont]==='c'){continue;}else{cadenaComparacion=cadenaComparacion+cadena[cont]}
 }
 console.log(cadenaComparacion);
 return cadenaComparacion;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(eA, eB) {
    return eA.length-eB.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

