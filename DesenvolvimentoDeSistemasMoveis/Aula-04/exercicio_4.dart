//4 - Crie um interface pessoa e implemente em uma classe estudante. 
//A interface precisa ter 2 métodos a serem implementados, caminhar e falar.
// Além da interface, crie a classe estudante implementando essa interface. 
// As implementações dos métodos devem ser apenas um print, exemplo: print("caminhando").

interface class Pessoa{
  final String nome;
  
  Pessoa(this.nome);
  
  void caminhando(String pessoa){}
  void apresentando(String pessoa){}
}

class Cidadao implements Pessoa{
  final String nome;
  
  Cidadao(this.nome);
  
  @override
  caminhando(pessoa){
    print("Cidadao $pessoa, está caminhando.");
  }
  
  apresentando(pessoa){
    print("Cidadao $pessoa, está dizendo olá.");
  }
}

void main(){
  Cidadao pessoa1 = Cidadao("Natan");
  
  pessoa1.caminhando(pessoa1.nome);
  pessoa1.apresentando(pessoa1.nome);
  
}