
var paginaCarregada = "Página carregada com sucesso!";

function exibirMensagem(){
    alert(paginaCarregada);
}

// let x = 10;
// let y = 10;

// let soma = x + y;
// document.write("A soma de x e y é ", soma);
// let divisao = x / y;
// document.write("A divisão de x e y é ", divisao);

// let multiplicacao = x * y;
// document.write("A multiplicação de x e y é ", multiplicacao);

// let subtracao = x - y;
// document.write("A subtração de x e y é ", subtracao);

// let igual = x == y;
// document.write("x e y são números iguais ? ", igual);

// let maiorque = x < y;
// document.write("x é maior que y ? ", maiorque);

// let menorque = x > y;
// document.write("x é menor que y ? ", menorque);

// let maiorigual = x <= y;
// document.write("x é maior ou igual a y ? ", maiorigual);

// let diferente = x != y;
// document.write("x é diferente de y ? ", diferente);

var x = 10;
var y = 5;

var soma = x + y;
var subtracao = x - y;
var multiplicacao = x * y;
var divisao = x / y;
var diferente = x != y;
var igual = x == y;

var resultadoElemento = document.getElementById("resultado");

resultadoElemento.innerHTML = "Soma de x e y: " + soma + "<br>" +
                              "Subtração de x e y: " + subtracao + "<br>" +
                              "Multiplicação de x e y: " + multiplicacao + "<br>" +
                              "Divisão de x e y: " + divisao + "<br>" +
                              "x é diferente de y? " + diferente + "<br>" +
                              "x é igual a y? " + igual;