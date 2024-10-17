
//também podemos usar document.querrySelector('nome da identificação, mas deve conter sua definição de ident')
const antes = document.getElementById('antes')
const depois = document.getElementById('depois')

const app = document.getElementById('app');
const app2 = document.querySelector('#app2')
                    //posições
    //              0   1   2   3   4   5
    const frutas = [0,  1,  2,  3,  4,  5];
    const carrinho = frutas.slice(1, 2)
            //PUSH envia um atriubto para o final da lista(array)
    // frutas.push(4, 5, 6, 7, 'teste') //ficaria na posição 0
    //frutas.push(6)  //ficaria na posição 1

            //UNSHIFT envia um atributo/item para o inicio da lista(array)
    //frutas.unshift('inicio')

                    //Eliminadno elementos de uma array
            //pop, remove o ultimo item de uma array
     frutas.pop()       //removendo o atributo 5    
     
     
    //SLICE remover itens entre as posições definidas, 
    //faz um corte para mostrar apenas os valores entre as posiç~poes definidas
    
    //frutas.slice(1, 3)



    //console.log(frutas)

antes.innerHTML = carrinho
console.log(frutas)
frutas.pop() //eliminando o valor 5
depois.innerHTML = frutas
console.log(frutas)
