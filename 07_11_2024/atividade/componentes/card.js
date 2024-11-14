export default function criarCard(data){

    const card = document.createElement('div');
    card.innerHTML = `
        <div class="card">
        <p>Nome: ${data.name}</p>
        <p>Nome: ${data.status}</p>
        </div>
    `;
    return card;
}