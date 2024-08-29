let x11 = 0, x12 = 0, resultado1 = 0
let x21 = 0, x22 = 1, resultado2 = 0
let x31 = 1, x32 = 0, resultado3 = 0.5
let x41 = 1, x42 = 1, resultado4 = 1

let p1 = -1, p2 = -1

let soma = 0, ajustes = 0, quantidadeAjustes = 0, repeticoes = 0

do{
    ajustes = 0

    verificaSeNecessataAjustar(x11, x12, resultado1);
    verificaSeNecessataAjustar(x21, x22, resultado1);
    verificaSeNecessataAjustar(x31, x32, resultado1);
    verificaSeNecessataAjustar(x41, x42, resultado1);

}while(ajustes != 0 )

console.log("teste de aprendizagem com rede neural")
console.log("\n peso1 = "+p1)
console.log("\n peso2 = "+p2)
console.log("\n foram nescessarios " + quantidadeAjustes+ " ajustes")



function somar(x1, x2){
    return (x1*p1) + (x2*p2)
}

function tranferencia(soma){

    if(soma < 0 ){
        return 0;
    }
    if(soma > 1){
        return 1;
    }
    return soma;
}

function ajustar(entrada1, entrada2, resultadoEsperado, resultadoObtido){
    p1 = p1 + 1 * (resultadoEsperado - resultadoObtido) * entrada1
    p2 = p2 + 1 * (resultadoEsperado - resultadoObtido) * entrada2
}

function verificaSeNecessataAjustar(x1, x2, resultadoEsperado){
    soma = somar(x1, x2) 
    y = tranferencia(soma)

    if (y != resultadoEsperado){
        ajustar(x1, x2, resultadoEsperado, resultadoObtido)
        ajustes ++
        quantidadeAjustes ++
    }
}