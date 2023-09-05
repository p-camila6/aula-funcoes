
//exercicios
//1)
function minhaFuncao(variavel) {
return variavel * 5
}
console.log(minhaFuncao(2)) 
console.log(minhaFuncao(10)) 
//a. 2*5 = 10 será imrpesso ""10"//10*5 = 52 será impresso "50"
//b. nada será impresso
//2)
let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*
a. Explique o que essa função faz e qual é sua utilidade // pede ao usuario um texto, passa tudo pra letra minuscula e busca a palavra cenoura. faz-se util na otimização de busca.
b. Determine qual será a saída no console para cada uma das 3
entradas do usuário:
i. Eu gosto de cenoura //"true"
ii. CENOURA é bom pra vista //"true"
iii. Cenouras crescem na terra. //"true"
//3)a.
*/
function imprimeMinhaBio() {
    console.log("Eu sou Camila, tenho 17 anos, moro em São Leopoldo e sou estudante.")
}
//b.
function imprimeInfos(nome, idade, cidade, profissao) {
    const mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
    return mensagem;
  }

const nome = "camila";
const idade = 17;
const cidade = "São Leopoldo";
const profissao = "designer";

const mensagemInfos = imprimeInfos(nome, idade, cidade, profissao);
console.log(mensagemInfos);
//c.
function numeros(um, dois){
const soma = um + dois
return soma;
}
const um = 5;
const dois = 35;
const resultado = numeros(5, 35);
console.log(resultado);
//d.
function maiorQue(numero1, numero2){
    const confere = numero1 >= numero2
    return confere
}
const numero1 = 400;
const numero2 = 200;

const imprimir = maiorQue(numero1, numero2)
console.log(imprimir);
//e.
function numerosPares(valor1){
    return valor1 % 2 === 0;
}
const valor1 = 3
const imprimePar = numerosPares(valor1)
console.log(imprimePar);
//f.
function texto(mensagem3){
    const tmensagem = mensagem3.length;
    const tmensagem2 = mensagem3.toUpperCase();
    return [tmensagem, tmensagem2];
}
const mensagem3 = "eu estou estudando javascript";
imprimeMensagem = texto(mensagem3);
console.log(imprimeMensagem [0]);
console.log(imprimeMensagem [1]);
//g.
function soma(primeiroN, segundoN){
    const operacao = primeiroN + segundoN
    return operacao
}

function subtração(primeiroN, segundoN){
    const operacao2 = primeiroN - segundoN
    return operacao2
}

function divisão(primeiroN, segundoN){
    const operacao3 = primeiroN / segundoN
    return operacao3
}

function multiplicação(primeiroN, segundoN){
    const operacao4 = primeiroN * segundoN
    return operacao4
}

const valorUser = Number(prompt('digite um valor'));
const valorUser1 = Number(prompt('digite outro valor'));
primeiroN = valorUser
segundoN = valorUser1

console.log("soma:", soma(primeiroN, segundoN));
console.log("subtração:", subtração(primeiroN, segundoN));
console.log("multiplicação:", multiplicação(primeiroN, segundoN));
console.log("divisão:", divisão(primeiroN, segundoN));
