//3 - Crie uma classe pessoa utilizando um const constructor. 
//A classe precisa ter os atributos idade, nome, cpf e 
//além disso eles devem ser obrigatórios e nomeados.
void main(){
  
}

class Pessoa{
  final int idade;
  final String nome;
  final String cpf;
  
  const Pessoa({required this.idade, required this.nome, required this.cpf});
}