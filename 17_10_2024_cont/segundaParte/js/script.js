//array até o 10
const lista = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<lista.length; i++){
    console.log(i)
    
    //console.log(i)
}


console.log('array até o 4')
for(let i = 0; i<=lista.length; i++){
    if(lista[i] === 4){
        break;
    }
    console.log(lista[i])
}
//exemplo do continue
console.log('array com continue')
//após uma condição continuar arrya 
for(let i = 0; i<=lista.length; i++){
    if(lista[i]%2===0){
        console.log(lista[i]);
    }
    continue;
}


let frutas =['aplee', 'banana', 'granada']
//            __________  o valor vai para a primeira posição
///          |          |                    
for(const fruta of frutas){
    console.log(fruta)
}

                    console.log('filtração dentro do laço com -- of --')
                    //filtração de atributo

for(const fruta of frutas){
    if(fruta == 'banana'){break;}
        console.log(fruta)
}


console.log('usando --for-- e --in--')
for(const fruta in frutas){
    console.log(fruta);
}

console.log('usando --prop-- --in-- ')
let carro = {
    marca: 'toyota', modelo: 'corolla', ano:2000
}

for(const prop in carro){
    console.log(`${prop}: ${carro[prop]}`);
}

