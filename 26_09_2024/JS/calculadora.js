const Resposta = document.getElementById('Resposata')
const Banco = document.getElementById('Banco')

let nota = 7;
let faltas = 20;
let res;
if( (nota >=7 && faltas >20) || (nota <7 && faltas <=20)){
    console.log(res)
    res = 'Reprovado'
}
else if(nota >=7 && faltas <= 20 ){
     console.log(res)
     res = 'Aprovado'
}
Resposta.innerHTML = res


//User

let user = 'Jhon'
let password = '123456789'

let userInsert = 'deyvid'
let passwordInsert = '123456789'

let Acesso;


if( user != userInsert || password != passwordInsert){
    console.log('Acesso negado')
    Acesso = "negado"
}
else if (user == userInsert  && password == passwordInsert ){
    console.log('Acesso Liberado')
    Acesso = "aceito"

}
Banco.innerHTML = Acesso
