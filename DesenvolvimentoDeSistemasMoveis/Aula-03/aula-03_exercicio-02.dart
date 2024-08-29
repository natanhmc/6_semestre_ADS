// Escreva uma função que aceita uma lista de números como entrada e retorna uma nova lista onde cada
// elemento é o dobro do elemento correspondente na lista original.

void main(){
  List<int> numeros = [2,13,5,78,6,9,100];
  
  List<int> duplicaNumeros(List<int> num){
    return num.map((numero) => numero * 2).toList(); 
  }
    
  print(duplicaNumeros(numeros));
}