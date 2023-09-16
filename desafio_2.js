/*Filtro paso alto
Dado un arreglo y un valor cutoff, devuelve un nuevo
arregloque contenga solo los valores mayores a cutoff.*/


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > cutoff ) {
            filteredArr.push(arr[index]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
