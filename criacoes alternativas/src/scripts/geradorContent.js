const header = document.getElementById('header');
const main = document.getElementById('content');
const footer = document.getElementById('footer');

function renderizar(){
    main.innerHTML = `
        <div className="Jhon" id="teste">
            <h1>TESTe</h1>
        </div> 
    `
}
const btn =document.getElementById('btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    renderizar()

})