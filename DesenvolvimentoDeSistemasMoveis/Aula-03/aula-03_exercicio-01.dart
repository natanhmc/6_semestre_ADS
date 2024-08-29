//Crie uma calculadora simples que aceita dois números e uma operação 
//(adição, subtração, multiplicação ou divisão) como entrada e retorna o resultado.

void main() {
  double numero1 = 4;
  double numero2 = 8;
  String operador = "+";
  
  
    double calculadora(String op, double num1, double num2){
      switch(op){
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if(num2 != 0){
            return num1 / num2;
          }else{
            print("Não é possivel divider por 0");
            return 0;
          }
        default:
          print("Operação invalida!!");
          return 0;
      }
  }
  
  double resultado = calculadora(operador, numero1, numero2);
  print("O resultado é $resultado");
}
