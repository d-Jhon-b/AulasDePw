const botao = document.getElementById('botao')
const lista = document.getElementById('lista')
const atender = document.getElementById('atender')
const desistir = document.getElementById('desistir')
//const teste = document.getElementById('teste')
//const listaIdade = document.getElementById('listaIdade');

const listaDeIdade = []

botao.addEventListener("click", (e)=> {
    e.preventDefault()
    const idade = document.getElementById('idade').value
    if(idade > 65){
        inicio(idade)
        lista.innerHTML= listaDeIdade
    }
    else{
        final(idade)
        lista.innerHTML = listaDeIdade
    }
})  

function inicio(ida){
    listaDeIdade.unshift(ida)
}
function final(ida){
    listaDeIdade.push(ida)
}
atender.addEventListener("click", (res)=>{
    res.preventDefault()

    listaDeIdade.shift()
    lista.innerHTML = listaDeIdade
})
desistir.addEventListener("click", (atn) =>{
    atn.preventDefault()
    listaDeIdade.pop()
    lista.innerHTML = listaDeIdade

})


// function addLista(ida){
// const li = document.createElement('li')
//     li.textContent = ida;
//     ul.appendChild;

// }


//nova parte

// const lista = [];
//     function adicionarIdade(){
//         const idade = parseInt(document.getElementById('idade').value)
//         if(!isNaN(idade))
//         {
//             if(idade> 65){
//                 lista.unshift(idade)
//             }
//             else{
//                 lista.push(idade)
//             }
//             atualizarLista();
//             document.getElementById('idadeInput') = '';
//         }
//         else{
//             alert('insira uma idade valida')
//         }
// }
// function atualizarLista(){
//     const ul = document.getElementById('lista');
//     ul.innerHTML = '';

//     lista.forEach(idade =>{
//         document.createElement('li');
//         li.textContent = idade;
//             ul.appendChild(li);
        
//     })
// }



