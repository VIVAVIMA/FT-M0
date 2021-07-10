// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
  
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let arr=[];
  for(i=0;i<array.length;i++){
    arr.push(array[i]+1);
  }
 return arr;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  //palabras[0]="Hola";
  //palabras[1]="soy";
  //palabras[2]="Daniel;"
  //palabras[0,1,2,3]=["Hola","Soy","Daniel","Viasus"];
  //return palabras;
  let sw=[];
  for (i=0;i<palabras.length;i++){
    sw=sw+palabras[i];
    if(i!==palabras.length-1){sw=sw+" ";}
  }
  return sw;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let n;
for(let cnt=0;cnt<array.length;cnt++){
  if(array[cnt]===elemento){return true;}
}  
 return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:\
  let muneros2=0;
  for(i=0;i<numeros.length;i++){
    //numeros2+=numeros[i];
    muneros2=numeros[i]+muneros2;
  }
  return muneros2;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:\
  let suma=0;
  let res=0;
  for(cnts=0;cnts<resultadosTest.length;cnts++){
    suma=resultadosTest[cnts]+suma;
  }
  res=suma/cnts;
  return res;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let x=numeros[0];
 for(cnn=0;cnn<numeros.length;cnn++){
   if(numeros[cnn]>=x){x=numeros[cnn];}
 }
 return x;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  let Tseis=[];
  
  for(cont=0;cont<11;cont++){
    Tseis.push(cont*6);
  }
  //console.log(Tseis);
  return Tseis;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let tot=1;
  if (arguments.length<1){return 0;}else{for(cont=0;arguments.length>cont;cont++){tot=tot*arguments[cont];}}
  return tot;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let But=0;
 for(cont=0;cont<arreglo.length;cont++){if(arreglo[cont]>18){But++;}}
 return But;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí 
  switch(numeroDeDia){
    case 1: return "Es fin de semana";
    break
    case 7: return "Es fin de semana";
    break;
    default: return "Es dia Laboral";
    break;
  }

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let a=n.toString();
  if (a.charAt(0)==="9"){return true;}else{return false;}

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  st=0;
  rm=0;
  for(cont=0;arreglo.length>cont;cont++){
    st=st+arreglo[cont];
  }
  rm=st/cont;
  if(rm===arreglo[arreglo.length-1]){return true;}else{return false;}
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let MMes=[];
  for(cont=0;cont<array.length;cont++){
    if(array[cont]==='Enero'||array[cont]==='Marzo'||array[cont]==='Noviembre'){MMes.push(array[cont]);}
  }
  if(MMes.length==3){return MMes;} else{return "No se encontraron los meses pedidos"}
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  NEWA=[];
  for(cont=0;cont<array.length;cont++){
    if(array[cont]>100){NEWA.push(array[cont]);}
  }
  return NEWA;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let neen=[];
  for(cont=0;cont<10;cont++){
    numero=numero+2;
    if(numero===cont){return  "Se interrumpió la ejecución";break;}
    neen.push(numero)
  }
  //console.log(neen);
  return neen;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let gordo=[];
  for(cont=0;cont<10;cont++){
  if(cont===5){continue;}
  numero =numero+2;
  gordo.push(numero);
}
  console.log(gordo);
  return gordo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
