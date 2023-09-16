/* Siempre hambriento
Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida"
debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo,
que la consola registre "Tengo hambre" una vez.*/


function alwayshungry(arr){
    let contador=false;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === "comida"){
            contador=true;
        }        
    }
    if (contador === true) {
        console.log("Delicioso")
    }else{
        console.log("Tengo hambre")
    }
}
alwayshungry([3.14,"comida","pastel",true,"comida"])
alwayshungry(4,1,5,7,2)