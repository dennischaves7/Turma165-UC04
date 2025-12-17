export default class Usuario {
  nome;
  idade;
  genero;
  telefone;
  email;
  cpf;
  cep;
  rg;
  endereco;
  
  constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.rg = rg;
    this.endereco = endereco;
  }

  mostrarUsuario(Usuario) {
    return `
     Dados do Usuário 
Nome:     ${this.nome}
Idade:    ${this.idade}
Gênero:   ${this.genero}
Telefone: ${this.telefone}
E-mail:   ${this.email}
CPF:      ${this.cpf}
CEP:      ${this.cep}
RG:       ${this.rg}
Endereço: ${this.endereco}

    `
  }
}
