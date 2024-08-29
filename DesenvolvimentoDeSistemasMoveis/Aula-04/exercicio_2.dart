//2 - Crie uma classe conta que tenha saldo, número da conta, 
//crie um método para converter para um json 
//(Map<String, dynamic>).
void main(){
  Conta conta1 = Conta(saldo : 10000.0, num_conta : "1111111-0");
  print(conta1.ToJson());
  
}

class Conta{
  double saldo;
  String num_conta;
  
  Conta({required this.saldo, required this.num_conta});
  
  Map<String, dynamic> ToJson(){
    return {
      'saldo' : saldo,
      'num_conta' : num_conta,
    };
  }
}