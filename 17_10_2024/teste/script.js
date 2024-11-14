const btn = document.getElementById('Add-car')
const app = document.getElementById('app')

const produtos = [ 
    {nome: 'Papel', preco: 10.00, estoque: 5},
    {nome: 'Melancia', preco: 15.00, estoque: 1},
    {nome: 'Boné', preco: 20.00, estoque: 2},
    {nome: 'Boneco', preco: 5.00, estoque: 3}, 
    {nome: 'Arma de chumbinho', preco: 15.00, estoque: 10},
]


//teste 
console.log(produtos[1])
const btnMelancia = document.getElementById('Melancia')
btnMelancia.addEventListener('click', (prod)=>{
    prod.preventDefault()

    app.innerHTML = produtos.filter()
})


// function addMelancia() {
//     app.innerHTML = produtos[0]
// }