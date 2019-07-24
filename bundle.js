"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//EXERCICIO 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('luis@email.com', 'abc123');
var Adm1 = new Admin('luis@email.com', 'abc123'); //console.log(User1.isAdmin());
//console.log(Adm1.isAdmin());
//EXERCICIO 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 - RETORNA SOMENTE A IDADE DOS USUÁRIOS COM MAP

var idadeUsu = usuarios.map(function (item) {
  return item.idade;
}); //console.log(idadeUsu);
//2.2 - COM O FILTER RETORNAR SOMENTE FUNCIONÁRIOS DA ROCKETSEAT MAIORES DE 18 ANOS

var funcRocketSeat = usuarios.filter(function (usuario) {
  return usuario.empresa == 'Rocketseat' && usuario.idade >= 18;
}); //console.log(funcRocketSeat);
//2.3 - COM O FIND PROCURE UM USUÁRIO QUE TRABALHE NA GOOGLE

var funcGoogle = usuarios.find(function (item) {
  return item.empresa == 'Google';
}); //console.log(funcGoogle);
//2.4 - Multiplique a idade de todos usuários por dois e depois realize um 
//filtro nos usuários que possuem no máximo 50 anos

var calculo = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
}); //console.log(calculo);
//3 - CONVERTA EM ARROW FUNCTIONS
// 3.1

var arr = [1, 2, 3, 4, 5];
/*
arr.map(function(item) {
 return item + 10;
});
*/

var somaDez = arr.map(function (item) {
  return item + 10;
}); //console.log(somaDez);
// 3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};
/*
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
*/

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; //console.log(mostraIdade(usuario));
// 3.3


var nome = "Diego";
var idade = 19;
/*
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
*/

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Diego;
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; //console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));
// 3.4

/*
const promise = function() {
	return new Promise(function(resolve, reject) {
	return resolve();
	})
 }
*/


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // 4 - Desestruturação simples - A partir do seguinte objeto:


var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; //4.1 Utilize a desestruturação para transformar as propriedades nome, cidade e 
//estado em variáveis

var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado; //console.log(name);
//console.log(cidade);
//4.2 Utilize a desestruturação nos parâmetros da função para buscar o nome e 
//idade do usuário separadamente

function mostraInfo(_ref) {
  var usu = _ref.usu,
      age = _ref.age;
  return "".concat(usu, " tem ").concat(age, " anos.");
} //console.log(mostraInfo({ usu: "Diego", age: 23 }));
//5 - Utilizando o operador de rest/spread (...) realize as seguintes operações
// 5.1 - REST
//5.1.1 A partir do array defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados


var vector = [1, 2, 3, 4, 5, 6];
var a = vector[0],
    b = vector.slice(1);
var x = a;
var y = b; //console.log(a);
//console.log(b);
//5.1.2 Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles

var soma = function soma() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.reduce(function (item, next) {
    return item + next;
  });
}; //console.log(soma(3,5,6,7,8,9,12,3,4));
// 5.2 - SPREAD


var dadosusu = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; //5.2.1 Crie uma variável usuario2 que contenha todos os dados do usuário
//porém com nome Gabriel.

var usuario2 = _objectSpread({}, dadosusu, {
  nome: 'Gabriel'
}); //console.log(usuario2);
//5.2.2 Crie uma variável usuario3 que contenha todos os dados do usuário 
//porém com cidade Lontras.


var usuario3 = _objectSpread({}, dadosusu, {
  endereco: _objectSpread({}, dadosusu.endereco, {
    cidade: 'Lontras'
  })
}); //console.log(usuario3);
// 6 - Converta o seguinte trecho de código utilizando Template Literals


var nameUser = 'Diego';
var ageUser = 23; //console.log(`O usuário ${nameUser} possui ${ageUser} anos`);
//7 - Utilize a sintaxe curta de objetos (Object Short Syntax) no 
//seguinte objeto:

var newNameUser = 'Diego';
var newAgeUser = 23;
var newUser = {
  newNameUser: newNameUser,
  newAgeUser: newAgeUser,
  cidade: 'Rio do Sul'
}; //console.log(newUser);
