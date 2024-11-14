const container=document.getElementById('app')





//lista
const numeros = [1,2,3,4,5,6,7,8,9,10]


// com laço de repetição

//com if
numeros.forEach((number)=>{
    if(number%2 == 0){
        console.log(number)
    }
})


////
const res = numeros.filter(VerificaPares)

function VerificaPares(num){
    return num%2 == 0
}
console.log(res)

////
//sem IF
// function filtrarPares(par) {
//     return par.filter(num => num % 2 == 0);
// }

// Exemplo de uso:
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // const pares = filtrarPares(numbers);
        // console.log(pares); 








