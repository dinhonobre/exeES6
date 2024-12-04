"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: "Anderson",
  nota: 8
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "João",
  nota: 6
}, {
  nome: "Ana",
  nota: 7
}, {
  nome: "Lucas",
  nota: 4
}];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamando a função e exibindo o resultado
var aprovados = filtrarAprovados(alunos);
console.log(aprovados);