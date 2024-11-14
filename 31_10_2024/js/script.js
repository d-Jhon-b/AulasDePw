//const urlContent = new URLSearchParams( window.location.search)
// console.log(window)
// console.log(location)
// console.log(urlContent)
    
// for (params of urlContent){
//     console.log(params);
// }
window.addEventListener('hashchange',()=>{
    const hash = window.location.hash;
    if(hash === '#pagina1'){
        carregarPagina1();
    }else if(hash === '#pagina2'){
        carregarPagina2();
    }
    // console.log(location.hash)
});


const container = document.createElement('main')
container.id = 'ElementIdSPA';
function carregarPagina1(){
        limparCampo()
        container.innerHTML = '<h1 className="jhon">PAGINA</h1>';
        document.body.appendChild(container)
    
}
function carregarPagina2(){
    limparCampo();
    const template = `<div className="item" id="ElementIdSPA">
                    <h2>Titulo</h2>
                  </div>`  
    container.innerHTML = template;
    document.body.appendChild(container)

}
function limparCampo(){
    const remove = document.getElementById('ElementIdSPA');
    if(remove){
        remove.remove()
    }
}
function carregarNav(){
    const teamplate = `
    <nav>
        <ul>
            <li><a href="#pagina1">Pagina 1</a></li>
            <li><a href="#pagina2">Pagina 2</a></li>
        </ul>
    </nav>`
    
    document.body.insertAdjacentHTML('afterbegin', teamplate)
}
carregarPagina1()
carregarNav()