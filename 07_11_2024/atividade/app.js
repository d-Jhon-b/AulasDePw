import { buscarDados } from './componentes/api.js'
import { mostrarCard } from './componentes/ui.js'

const form = document.querySelector('#form')

async function init(nome, status){
    try{
        
        // const nome = "Rick Sanchez";
        // const status = "Alive"

        const dadosExternos = await buscarDados(nome, status);
        console.log(dadosExternos)

        const appContainer = document.getElementById('app')
        mostrarCard(appContainer, dadosExternos);
    }catch(error){
        console.error('Error fetching data: ', error)
    }
}

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const nome =document.getElementById('nome')
//     const status=document.getElementById('status')
//     init(nome, status)
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=document.getElementById('nome').value
    console.log(nome)
    const status=document.getElementById('status').value
    console.log(status)
    init(nome, status)
})
