let entradas_pesos = [
    {entrada: -1,peso:  0},
    {entrada: 1,peso:  -1},
    {entrada: 1,peso:  2},
];

let funcaoEscolha = 'FS'

let y 

switch (funcaoEscolha){
    case 'LR':
            y = limiteRapido(soma(entradas_pesos))
            console.log("saida: "+ y + ", funcao : "+ funcaoEscolha)
        break;
    case 'FR':
            y = funcaoRampa(soma(entradas_pesos))
            console.log("saida: "+ y + ", funcao : "+ funcaoEscolha)
        break;
    case 'FS':
            y = funcaoSigmoide(soma(entradas_pesos))
            console.log("saida: "+ y + ", funcao : "+ funcaoEscolha)
        break;
}

function soma(entradas_pesos){
    var soma = 0;
    for (let i = 0; i < entradas_pesos.length; i++) {
        soma = soma +(entradas_pesos[i].entrada * entradas_pesos[i].peso)
        
    }
    console.log("soma: "+ soma);
    return soma
}

function limiteRapido(soma){
    return soma <= 0 ? -1 : 1;
}

function funcaoRampa(soma){
    if(soma < 0 ){
        return 0;
    }else if(soma >= 0 && soma <= 1){
        return soma;
    }else{
        return 1;
    }
}

function funcaoSigmoide(soma){
    if(soma >= 0){
        return 1 - 1 / (1 + soma);
    }else{
        return -1 + 1 / (1 - soma);
    }
}