/*Mejor que el promedio:
Dado un arreglo de números, devuelve un recuento de
cuántos de los números son mayores que el promedio.*/


function betterThanAverage(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index];
    }
    sum/=arr.length;
    var count = 0;
    // cuenta cuántas variables son mayores que el promedio
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > sum) {

            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

