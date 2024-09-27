const perguntas = [
    {
        pergunta: "É Homem?",
        subElemento: {
            sim: {
                pergunta: "Ele joga futebol?",
                subElemento: {
                    sim: "Neymar",
                    nao: "Ayrton Senna"
                }
            }
        },
    },
    {
        pergunta: "É Mulher?",
        subElemento: {
            sim: {
                pergunta: "Ela é modelo",
                subElemento: {
                    sim: "Gisele Bündchen",
                    nao: "Margot Robbie"
                }
            }
        },
    },
    {
        pergunta: "É Personagem animado??",
        subElemento: {
            sim: {
                pergunta: "Ele é do Dragon Ball?",
                subElemento: {
                    sim: "Goku",
                    nao: "Naruto"
                }
            }
        },
    },
    {
        pergunta: "É um animal?",
        subElemento: {
            sim: {
                pergunta: "Ele é o melhor amigo do homem?",
                subElemento: {
                    sim: "Cachorro",
                    nao: "Vaca"
                }
            }
        },
    },  
];
    

arrayDeRespostasPossiveis = ["Neymar", "Airton Senna", "Gisele Bunchen", "Margot Robbie", "Goku", "Naruto", "Cachorro", "Vaca"];

//Informa ao usuário para ele pensar em uma das opções válidas
console.log("Pense em uma das opções abaixo para eu tentar adivinhar");
arrayDeRespostasPossiveis.forEach(resposta => {
    console.log(resposta);
});

const { resolve } = require('path');
//motor de inferencia
const readline = require('readline');

const respostaInterface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

async function fazPergunta(pergunta) {
    return new Promise((resolve) => {
        respostaInterface.question(pergunta, (resposta) => {
            resolve(resposta);
        })
    })
}

async function processaNodo(nodo){
    if(typeof nodo === 'string'){
        console.log("A resposta é " + nodo);
        return true;
    }else if (typeof nodo === 'object' && nodo.pergunta){
        let resposta = await fazPergunta(nodo.pergunta + " (digite 1 para SIM, 2 para NÃO)\n");
        if(resposta == 1 && nodo.subElemento && nodo.subElemento.sim){
            return await processaNodo(nodo.subElemento.sim);
        }else if(resposta == 2 && nodo.subElemento && nodo.subElemento.nao){
            return await processaNodo(nodo.subElemento.nao);
        }else{
            return false;
        }
    }
    
}

async function iniciarPerguntas(perguntas) {
    for(const pergunta of perguntas){
        let resposta = await processaNodo(pergunta);
        if(resposta){
            break;
        }
    }
    respostaInterface.close();
}

iniciarPerguntas(perguntas);