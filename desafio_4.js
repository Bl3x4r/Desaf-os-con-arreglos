/*Arreglo invertido
Escribe una función que invierta los valores
de un arreglo y los devuelva.*/ 

function reverse(arr) {
    // tu código aquí
    for (let index = 0; index < arr.length/2; index++) {
        let a = arr.length-index-1;
        let b = arr[index];
        let c = arr[a]  
        arr[index] = c;  
        arr[a] = b;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
