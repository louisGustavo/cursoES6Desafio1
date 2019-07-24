//EXERCICIO 1
class Usuario{
	constructor(email, senha){
		this.email = email;
		this.senha = senha;
	}
	isAdmin(){
		return this.admin === true;
	}
}

class Admin extends Usuario{
	constructor(email, senha){
		super(email, senha);
		this.admin = true;
	}
}

const User1 = new Usuario('luis@email.com', 'abc123');
const Adm1 = new Admin('luis@email.com', 'abc123');

//console.log(User1.isAdmin());
//console.log(Adm1.isAdmin());

//EXERCICIO 2
const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 - RETORNA SOMENTE A IDADE DOS USUÁRIOS COM MAP
const idadeUsu = usuarios.map(item => item.idade);
//console.log(idadeUsu);

//2.2 - COM O FILTER RETORNAR SOMENTE FUNCIONÁRIOS DA ROCKETSEAT MAIORES DE 18 ANOS
const funcRocketSeat = usuarios.filter(
	usuario => usuario.empresa == 'Rocketseat' && usuario.idade >= 18
);
//console.log(funcRocketSeat);

//2.3 - COM O FIND PROCURE UM USUÁRIO QUE TRABALHE NA GOOGLE
const funcGoogle = usuarios.find(item => item.empresa == 'Google');
//console.log(funcGoogle);

//2.4 - Multiplique a idade de todos usuários por dois e depois realize um 
//filtro nos usuários que possuem no máximo 50 anos
const calculo = usuarios
	.map(usuario => ({...usuario, idade: usuario.idade * 2}))
	.filter(usuario => usuario.idade <= 50);
//console.log(calculo);

//3 - CONVERTA EM ARROW FUNCTIONS
// 3.1
const arr = [1, 2, 3, 4, 5];

/*
arr.map(function(item) {
 return item + 10;
});
*/

const somaDez = arr.map(item => item + 10);
//console.log(somaDez);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

/*
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
*/

const mostraIdade = (usuario) => usuario.idade;
//console.log(mostraIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 19;

/*
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
*/

const mostraUsuario = (nome = Diego, idade = 18) => ({nome, idade});
//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));

// 3.4
/*
const promise = function() {
	return new Promise(function(resolve, reject) {
	return resolve();
	})
 }
*/
const promise = () => new Promise((resolve, reject) => resolve());

// 4 - Desestruturação simples - A partir do seguinte objeto:

const empresa = {
	name: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC',
	}
};

//4.1 Utilize a desestruturação para transformar as propriedades nome, cidade e 
//estado em variáveis
const {name, endereco: {cidade, estado}} = empresa;
//console.log(name);
//console.log(cidade);

//4.2 Utilize a desestruturação nos parâmetros da função para buscar o nome e 
//idade do usuário separadamente
function mostraInfo({usu, age}) {
	return `${usu} tem ${age} anos.`;
}
//console.log(mostraInfo({ usu: "Diego", age: 23 }));

//5 - Utilizando o operador de rest/spread (...) realize as seguintes operações

// 5.1 - REST

//5.1.1 A partir do array defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados
const vector = [1, 2, 3, 4, 5, 6];
const [a, ...b] = vector;

const x = a;
const y = b;

//console.log(a);
//console.log(b);

//5.1.2 Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles

const soma = (...items) => items.reduce((item, next) => item + next);
//console.log(soma(3,5,6,7,8,9,12,3,4));

// 5.2 - SPREAD

const dadosusu = {
	nome: 'Diego',
	idade: 23,
	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil',
	}
};

//5.2.1 Crie uma variável usuario2 que contenha todos os dados do usuário
//porém com nome Gabriel.

const usuario2 = {...dadosusu, nome: 'Gabriel'};
//console.log(usuario2);

//5.2.2 Crie uma variável usuario3 que contenha todos os dados do usuário 
//porém com cidade Lontras.
const usuario3 = {
	...dadosusu, 
	endereco : { 
		...dadosusu.endereco, 
		cidade : 'Lontras'
	}
};
//console.log(usuario3);

// 6 - Converta o seguinte trecho de código utilizando Template Literals

const nameUser = 'Diego';
const ageUser = 23;
//console.log(`O usuário ${nameUser} possui ${ageUser} anos`);

//7 - Utilize a sintaxe curta de objetos (Object Short Syntax) no 
//seguinte objeto:

const newNameUser = 'Diego';
const newAgeUser = 23;

const newUser = {
	newNameUser,
	newAgeUser,
	cidade: 'Rio do Sul',
};

//console.log(newUser);

