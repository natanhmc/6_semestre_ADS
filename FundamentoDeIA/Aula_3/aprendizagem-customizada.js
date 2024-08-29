const treinamento = [
    {entrada: [0, 0, 0], resultadoEsperado: [0]},//laranja
    {entrada: [0, 0, 1], resultadoEsperado: [0]},//abacaxi
    {entrada: [0, 1, 0], resultadoEsperado: [0]},//limao
    {entrada: [0, 1, 1], resultadoEsperado: [0]},//kiwi
    {entrada: [1, 0, 0], resultadoEsperado: [1]},//melao
    {entrada: [1, 0, 1], resultadoEsperado: [1]},//banana
    {entrada: [1, 1, 0], resultadoEsperado: [1]},//melancia
    {entrada: [1, 1, 0], resultadoEsperado: [1]},//maçã
];

class Neuronio{
    
    constructor(numeroEntradas){
        this.numeroEntradas = numeroEntradas;
        this.pesos = [];

        for (let i = 0; i < numeroEntradas; i++) {
            this.pesos.push(Math.random())
        }
        this.bias = Math.random();
        this.taxaAprendizagem = 0.1;
    }

    somar(entrada){
        let somaPonderada = this.bias;
        for (let i = 0; i < this.numeroEntradas; i++) {
            somaPonderada += entrada[i] * this.pesos[i];
            
        }
        return somaPonderada;
    }

    ativacao(somaPonderada){
        return somaPonderada < 0 ? 0 : 1;
    }

    processar(entrada){
        let somaPonderada = this.somar(entrada);
        this.saida = this.ativacao(somaPonderada);
        return this.saida;
    }

    ajustar(erro, entrada){
        for (let i = 0; i < this.numeroEntradas; i++) {
            this.pesos[i] += erro * entrada[i] * this.taxaAprendizagem;
        }
        this.bias += erro * this.taxaAprendizagem;
    }

    treinarRede(arrayTreinamento){
        let ajustesNecessarios = true;
        let cont = 0;

        while(ajustesNecessarios){
            ajustesNecessarios = false;
            cont += 1;

            for (let i = 0; i < arrayTreinamento.length; i++) {
                const entrada = arrayTreinamento[i].entrada;
                const resultadoEsperado = arrayTreinamento[i].resultadoEsperado;
                const resultadoObtido = this.processar(entrada);
                const erro = resultadoEsperado - resultadoObtido;

                if(erro !== 0 ){
                    ajustesNecessarios = true;
                    this.ajustar(erro, entrada);
                    console.log(cont);
                }
            }
        }
    }
}

neuronio = new Neuronio(3);
neuronio.treinarRede(treinamento);
let resultado = neuronio.processar([0,1,1]);

if(resultado == 0){
    console.log("Fruta citrica");
}else{
    console.log("Fruta doce");
}

console.log("rede treinada com sucesso!!")