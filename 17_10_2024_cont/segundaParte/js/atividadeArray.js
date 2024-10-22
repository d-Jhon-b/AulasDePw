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
const listReverse =[]
for(const item of list){
    listReverse.unshift(item)
}
console.log(listReverse)


//atv 2

console.log('atividade 2')

const list2 = [1,2,3,4,5,6,7,8,9]
let maior = 9;
for (let i = 0; i < list2.length; i++) {
   if ( list2[i] > maior ) {
      maior = list2[i];
      console.log(maior)
   }
}
