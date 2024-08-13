console.log("Exercicio 1")
function somaDoisNumeros(num1, num2){
    return num1 + num2;
}

console.log("A soma é " + somaDoisNumeros(1, 2));


console.log("\nExercicio 2")

const lista = [1,2,3,4,5,6,7,8,9];

function numeroPares(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            console.log("O numero " + list[i] + " é par" );
        }else{
            console.log("O numero " + list[i] + " é impar" )
        }
    }
}

numeroPares(lista)