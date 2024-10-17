
const app /* resposta*/ = document.getElementById('resultado')
const form = document.getElementById('form')
// function primaria(segunda){
//     const nome = prompt("what your name: ")
//     segunda(nome)
// }
// primaria(function(nomeRecebido){alert(`olá... ${nomeRecebido}`)})

// function loop(x){
//     console.log(x)
//     if(x>=10){
//         return;
//     }
//     loop(x+1)
// }
// loop(0)

// const pessoa = function(nome){
//     const getHome = function(){
//         return nome;
//     }
//     return getHome
// }
// const aluno = pessoa("Jhon")
// const resultado = aluno()
// console.log(resultado)

function calculo(num1, num2, digito, exibe){
    if(digito == '+' ){
        let res = num1 + num2;
        exibe(res)
    }
    else if(digito == '-'){
        let res = num1 - num2;
        exibe(res)
    }
    else if(digito == '*'){
        let res = num1 * num2;
        exibe(res)
    }
    else if(digito == '/'){
        let res = num1 / num2;
        exibe(res)
    }
}
form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(event)
    //parseINt || parseFloat
    const number1 = parseFloat(document.getElementById('num1').value)
    const number2 = parseFloat(document.getElementById('num2').value)
    const digito = document.getElementById('digito').value

})