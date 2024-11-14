export async function buscarDados(nome, status){
    const response = await fetch(`
    https://rickandmortyapi.com/api/character/?name=${nome}&status=${status}
`
)
        //https://rickandmortyapi.com/api/episode //antiga API usada
        //https://rickandmortyapi.com/api/character/?name=rick&status=alive    

    if(!response.ok){
        throw new Error('Sem rede');
    }
    console.log(response)
    // const dados = await response.json();
    // console.log(dados)
    return response.json();
}