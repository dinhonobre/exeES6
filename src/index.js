// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Anderson", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "João", nota: 6 },
    { nome: "Ana", nota: 7 },
    { nome: "Lucas", nota: 4 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e exibindo o resultado
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
