// 1 - Crie uma classe pessoa com os atributos nome,
//idade e um factory constructor
// para converter de um json (Map<String, dynamic>)
//para uma nova instância da classe pessoa.
void main(){
  
    Map<String, dynamic> json = {
        'nome' : 'Natan',
        'idade' : '27',
    };
  
    Pessoa pessoa = Pessoa.fromJson(json);
  
    print(pessoa.nome);
    print(pessoa.idade);
}

class Pessoa{
    String nome;
    int idade;
  
    Pessoa(this.nome, this.idade);
  
    factory Pessoa.fromJson(Map<String, dynamic> json) {
        return Pessoa(
        json['nome'] as String,
        int.parse(json['idade']),   
        );
    }
}