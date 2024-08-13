void main() {
  List<int> numeros = [10,21,45,64,11];
  int soma = 0;
  
  for(var i = 0; i < numeros.length; i++){
    soma += numeros[i];
  }
  double media = soma / numeros.length;
  
  print("A média é ${media}");
  
}