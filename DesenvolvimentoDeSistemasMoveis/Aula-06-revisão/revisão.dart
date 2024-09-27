void main() {
  // MAPEAMENTO DE CHAVE -> VALOR
  List<Map<String, dynamic>> listaJson = [
    {"nome": "Daniel", "idade": 18},
    {"nome": "Bruno", "idade": 29},
    {"nome": "Natan", "idade": 40},
    {"nome": "Anderson", "idade": 60}
  ];

  List<Pessoa> listaPessoa = List.empty(growable: true);


  for (Map<String, dynamic> json in listaJson) {
    listaPessoa.add(Pessoa.convertJson(json));
  }

  print(listaPessoa);
}


class Pessoa {
  final String name;
  final int idade;  

  // Generative constructor
  //  Pessoa({required this.idade,  required this.name});

    // Const constructor
    const Pessoa({required this.idade,  required this.name});

    factory Pessoa.convertJson(Map<String, dynamic> pessoa) {
      return Pessoa(name: pessoa["nome"], idade: pessoa["idade"]);
    }

    @override
  String toString() {
    return "Name: ${this.name} - Idade: ${this.idade}";
  }
}