let x11 = 0, x12 = 0, resultado1 = 0
let x21 = 0, x22 = 1, resultado2 = 0
let x31 = 1, x32 = 0, resultado3 = 1
let x41 = 1, x42 = 1, resultado4 = 1

let p1 = -1, p2 = -1

let soma = 0, ajustes = 0, quantidadeAjustes = 0, repeticoes = 0

do{
    ajustes = 0
    soma = somar(x11, x12) 
    y = tranferencia(soma)

    if (y != resultado1){
        ajustar(x11, x12, resultado1, y)
        ajustes ++
        quantidadeAjustes ++
    }

    soma = somar(x21, x22) 
    y = tranferencia(soma)

    if (y != resultado2){
        ajustar(x21, x22, resultado2, y)
        ajustes ++
        quantidadeAjustes ++
    }

    soma = somar(x31, x32) 
    y = tranferencia(soma)

    if (y != resultado3){
        ajustar(x31, x32, resultado3, y)
        ajustes ++
        quantidadeAjustes ++
    }

    soma = somar(x41, x42) 
    y = tranferencia(soma)

    if (y != resultado4){
        ajustar(x41, x42, resultado4, y)
        ajustes ++
        quantidadeAjustes ++
    }



}while(ajustes != 0 )

console.log("teste de aprendizagem com rede neural")
console.log("\n peso1 = "+p1)
console.log("\n peso2 = "+p2)
console.log("\n foram nescessarios " + quantidadeAjustes+ " ajustes")



function somar(x1, x2){
    return (x1*p1) + (x2*p2)
}

function tranferencia(soma){

    return (soma <= 0) ? 0 : 1;
}

function ajustar(entrada1, entrada2, resltadoEsperado, resultadoObtido){
    p1 = p1 + 1 * (resltadoEsperado - resultadoObtido) * entrada1
    p2 = p2 + 1 * (resltadoEsperado - resultadoObtido) * entrada2
}