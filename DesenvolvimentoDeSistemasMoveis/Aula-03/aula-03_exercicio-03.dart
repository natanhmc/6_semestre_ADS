//3 - Escreva uma função que aceita uma lista de números como entrada e retorna uma nova lista contendo apenas os números
// pares da lista original.
//4 - Escreva uma função que calcule a média
//5 - Escreva uma função que recebe uma lista de inteiros e retorna uma nova lista com apenas os números impares

void main(){
  List<int> lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16];
  
  List<int> pares(List<int> par){
    return par.where((numero) => numero % 2 == 0).toList();
  }
  List<int> numPar = pares(lista);
  print("Os pares são $numPar");

  double media(List<int> nums){
    double soma = 0;
    
    nums.forEach((num) {
      soma += num;
    });
    
    return soma / nums.length;
    
  }
  double mediaNum = media(lista);
  
  print("A media é $mediaNum");
  
  List<int> impares(List<int> par){
    return par.where((numero) => numero % 2 != 0).toList();
  }
  List<int> numImpar = impares(lista);
  print("Os Impares são $numImpar");
  
 }