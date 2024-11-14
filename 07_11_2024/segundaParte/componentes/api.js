export async function buscarDados(){
    const response = await fetch(`
            https://rickandmortyapi.com/api/episode   
        `)
        //https://rickandmortyapi.com/api/episode //antiga API usada
        //https://rickandmortyapi.com/api/character/?name=rick&status=alive    

    if(!response.ok){
        throw new Error('Sem rede');
    }
    
    // const dados = await response.json();
    // console.log(dados)
    return response.json();
}