const itens = ['pessoa1','pessoa2','pessoa3','pessoa4','pessoa5']
console.log(itens.reverse())
for(let i = 0; i < itens.length; i ++){
    itens.reverse()
    // const listReverse = itens.reverse()
    console.log(itens[i]) 
    // console.log(listReverse)
}
//correção
console.log('correção')
const list =['iten1', 'iten2', 'iten3', 'iten4']
const listReverse = []
for(const item of list){
    listReverse.unshift(item)
}
console.log(listReverse)


//atv 2

let list2 = [5,3,7,9,1,6]
let maior = list2[0];
const tamanhoNumeros = list2.length 
//console.log(numeros.length)
//console.log(maior)

for(let i = 1; i<tamanhoNumeros; i++){
    if(list2[i]>maior){
        maior = list2[i]
    }
    console.log(i)
}
console.log(`O maior numero é ${maior}`)
//i=2
// posição 2(vaalor 7) = maior

//atv 3

            console.log('atv_3')
let palavra = "MAMaMCO"
let letraR = 'A';
let letrar = 'a'; 
let repeticoes = 0;

for(let word of palavra){
    if((word === letraR)|| (word === letrar)){
        repeticoes++
    }
}
console.log(repeticoes);
