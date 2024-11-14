
let carrinho = [];

const produtos = [ 
    {nome: 'Papel', preco: 10.00, estoque: 5},
    {nome: 'Melancia', preco: 15.00, estoque: 1},
    {nome: 'Boné', preco: 20.00, estoque: 2},
    {nome: 'Boneco', preco: 5.00, estoque: 3}, 
    {nome: 'Arma de chumbinho', preco: 15.00, estoque: 10},
]
console.log(produtos)

function procurarProduto() {
    const searchTerm = document.getElementById('procurar').value.toLowerCase();
    const productList = document.getElementById('lista-produtos');
    productList.innerHTML = '';
    const filtrarProduto = produtos.filter(produto => produto.nome.toLowerCase().includes(searchTerm) && produto.estoque > 0);
    filtrarProduto.forEach(produto => {
        productList.innerHTML += `
            <div class="produto">
                ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Estoque: ${produto.estoque}
                <button onclick="addCarrinho('${produto.nome}')">Adicionar ao Carrinho</button>
            </div>
        `;
    });
}
console.log(procurarProduto())

function addCarrinho(nomeProduto) {
    const produto = produtos.find(p => p.nome === nomeProduto);
    if (produto && produto.estoque > 0) {
        carrinho.push(produto);
        produto.estoque--;
        procurarProduto();
        soltarCarrrinho();
    }
}
console.log(addCarrinho())

function removerItem(nomeProduto) {
    const index = carrinho.findIndex(p => p.nome === nomeProduto);
    if (index !== -1) {
        const produto = carrinho[index];
        produto.estoque++;
        carrinho.splice(index, 1);
        soltarCarrrinho();
        procurarProduto();
    }
}
console.log(removerItem())

function soltarCarrrinho() {
    const listaCarrinho = document.getElementById('lista-do-carrinho');
    listaCarrinho.innerHTML = '';
    carrinho.sort((a, b) => a.preco - b.preco);
    carrinho.forEach(produto => {
        listaCarrinho.innerHTML += `
            <div class="item-d0-carrinho">
                ${produto.nome} - R$ ${produto.preco.toFixed(2)} 
                <button onclick="removerItem('${produto.nome}')">Remover</button>
            </div>
        `;
    }); 
    const total = carrinho.reduce((sum, produto) => sum + produto.preco, 0);
    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
}
console.log(removerItem())

procurarProduto();