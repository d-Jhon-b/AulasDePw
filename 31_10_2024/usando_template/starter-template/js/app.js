import navBar from './componentes/header.js'
import footer from './componentes/footer.js'
import home from './pages/home.js'
import contatos from './pages/contatos.js'
 
const app = document.createElement("div")
app.id = "app"

window.addEventListener('hashchange', (e)=>{
    limparcorpo()
    if(location.hash === '#home'){
        app.appendChild(home())
    }else if(location.hash === '#contato'){
        app.appendChild(contatos())
    }
})

function limparcorpo(){
    const elemento = document.getElementById("app")
    if(elemento){
        elemento.remove()
    }
}
// document.body.insertAdjacentElement('beforebegin', navBar)
// document.body.insertAdjacentElement('afterbegin', main)
// document.body.insertAdjacentElement('beforeend', footer)
document.body.appendChild(navBar())
document.body.appendChild(home())
document.body.appendChild(footer())