//const num1 = document.getElementById('num1');
//const num2 = document.getElementById('num2');
const app /* resposta*/ = document.getElementById('resultado')
const form = document.getElementById('form')
//declaração
//function saudacao(){
//    console.log("olá");

//}
//chamada
//saudacao()


            //function com parametros
// function soma(num1, num2){
//     console.log(num1+num2)
//     return num1 +num2  
    
// }
// soma()

            //funções annônimas


// num1 = 2 e num2 =3|| callback é uma função anonima que serve para enviar parametros para uma outra função que irá tornar visivel o resultado
// function somar (num1, num2, callback){
//     //realiza a operação e guarda na cons resultado
//     const resultado = num1 + num2
//     //chama a função anônima
//     callback(resultado) 
    
// }
//envia os valores de cada parametro
//      2   3      callback
//      ^   ^       ^
//      n1  n2     res
// somar(2, 3, function(res){
//     console.log(res)
// })


        //parte nova
// function soma(num1, num2){
//     console.log(num1+num2)
//     return num1 + num2;  
// }


    //versão 1
    // function somar(num1, num2, funcao){
    //     const result = num1 + num2
    //     funcao(result)
    // }    

    //versão 2
    function somar(num1, num2, operacao){
         /* = num1 + num2*/

        if(operacao == '+'){
            const result = num1+num2; 
            app.innerHTML = result;
        }
        else if(operacao == '-'){
            const result = num1-num2; 
            app.innerHTML = result;
        }
        else if(operacao == '*'){
            const result = num1 * num2;
            app.innerHTML = result;
        }
        else if(operacao == '/'){
            const result = num1/num2;
            app.innerHTML = result;

        }
    }    

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const number1 = parseFloat(document.getElementById('num1').value);
        const number2 = parseFloat(document.getElementById('num2').value);
        const operacao = document.getElementById('digito').value
        // Envia dados para a função "somar" com os parâmetros number1 e number2
        // A função anônima recebe o resultado como parâmetro
        somar(number1, number2, operacao);
    })
    // app.innerHTML = somar(number1, number2)

    // somar(number1, number2, function(resultado){
    //     app.innerHTML = resultado
    // })


    //ou
//   somar(number1, number2, somar) 
// funtion somar(resultado){
//  resultado = number1 + number2
//}

    // const multiplica=function(num1, num2, ){
    //     return num1*num2;
    // }
    //função de seta
    //const multiplica =(num1, num2) => (num1*num2) //ou const multiplica =(num1, num2) => num1*num2 
    //app.innerHTML = multiplica(number1, number2)

//     function primaria(segunda){
//         let nome = prompt("Nome: ")
//         segunda(nome)
//     }
//     primaria(function(nome){alert("ola..." + nome)})

// })
