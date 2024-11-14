//A função timeOut é uma função async assincrona, é inicializada em conjunto com o código


// console.log("inicio");
// setTimeout(()=>{
//  console.log("fim")   
// },2000 )

        //exemplo 1

    const feachPromise = fetch(`https://viacep.com.br/ws/01001000/json/`)
    console.log(feachPromise);

    feachPromise
    .then((resposta)=>{
        if(!resposta.ok){
            throw new Error(`HTTP error: ${resposta.status}`)
        }
        return resposta.json()
    })
    .then((data)=>{
        console.log(data)

    })  
    
.catch((error)=>{   
    console.error(`Não foi possível obter seus dados ${error}`)
    console.log(error);
})

// console.log('um')
// setTimeout(()=>{
//     console.log("dois")
// },0)
// queueMicrotask(()=>{
//     console.log('três')
// })
// Promise.resolve("quatro")
// .then(res=>{
//     console.log(res)
// })
// console.log("cinco")

                //exemplo 2

async function fetchData(){
    try{
        const results = await fetch(

            `https://viacep.com.br/ws/01001000/json/`
        )
        const data = await results.json()
        console.log(data)
    }catch(error){
        console.error(error)
    }
}
fetchData()

async function init(){
    try{
        const dadosJson = await fetchData(); //espera  a função fetchData finalizar sua função
        const appContainer= document.getElementById('app') 
        //coleta o objeto app do html e gurada seu conteudo em uma variável
        
        mostrarCard(appContainer,dadosJson)
    }catch(error){
        console.error('Erro fetching data: ', error)
    }
}
