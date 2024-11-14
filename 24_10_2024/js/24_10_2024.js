const  dom = document.querySelector(".bar")
// dom.head.title ="hoje é quinta"
const btnS = document.getElementsByClassName('btn')
const app = document.getElementById("app")

const navbar = document.getElementById('navbar')
const footer = document.getElementById('footer')

function Renderizar(){

const livros= [
    {nome: 'azul', preco: 100.00, qtde: 10},
    {nome: 'ore ni trauma okashiteru nane desu ga, subarashi sekai', preco: 100.00, qtde: 3},
    {nome: 'mamaco', preco: 30.00, qtde: 1.00}]
const ul = document.createElement('ul')
livros.forEach((item)=>{
    const li = document.createElement('li')
    li.innerHTML = ` nome: ${item.nome}, <br> preço: ${item.preco.toFixed(2 )}, <br> Quantidade: ${item.qtde}`
    li.classList.add('btn', 'sucess')
    ul.appendChild(li)
})  
const secao = document.createElement('section')
secao.appendChild(ul)
app.appendChild(secao)
}
function DeletePlayer(){

}

navbar.innerHTML = `<h1>AULA SOBRE DOM</h1>
            
            <nav class="bar">
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </nav>
            <form id="form-dados">
                <label for="nome">Digite seu nome</label>
                <input type="text" id="nome"placeholder= "digite seu nome">
                <button id="enviar">enviar</button>
            </form>
`;

const formDados = document.getElementById("form-dados")
formDados.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nome = document.getElementById('nome')/*o valor = value tmb pode vir aqui*/;
    console.log(nome.value)

})
const nome = document.getElementById("nome");
nome.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e.target.value)
})


footer.innerHTML = `
    <div class="container_button">
        <button class="btn_teste success">Mostrar lista</button>
        <button class="btn_teste cancel" id="btnDelete">CANCEL</button>
    </div>
`;    


const mostrar = document.createElement('button')
mostrar.innerHTML="MOSTRAR"

footer.appendChild(mostrar)
mostrar.addEventListener('click', (e)=>{
    Renderizar()
})




// btn_success.addEventListener((e)=>{
//     e
// })


//em situções que desejamops atribuir uma resposta com string + variavel de resposta, usamos " `` "
//isso se chama concatenação

// app.innerText = `<b style='color:red'>TESTE</b>`
// app.innerHTML = `<b style='color:red'>TESTE:</b> ${teste}`
// let teste = 38;
// console.log(btnS[0]);
// console.log(app)





