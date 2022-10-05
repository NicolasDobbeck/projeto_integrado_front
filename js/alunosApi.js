'use strict'



// mostrar alunos do mesmo curso
const mostrarAlunosCurso = async (disciplina) =>{
    const url = `http://localhost:5050/disciplina/${disciplina}`
    const response = await fetch(url);
    const data = await response.json()

    return data
}

const listarCursosTitle = async () => {
    const url = `http://localhost:5050/cursos`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const filtrarStatus = async (idStatus, cursoNome) => {
    const url = `http://localhost:3030/alunos/curso/${idStatus}/${cursoNome}`
    const response = await fetch(url);
    const data = await response.json()

    return data
}


export{
    mostrarAlunosCurso, listarCursosTitle, filtrarStatus
}