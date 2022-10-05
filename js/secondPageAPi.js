'use strict'

const curso = localStorage.getItem('curso')

const mostrarCard = async (curso) =>{
    const url = `http://localhost:5050/curso/${curso}`
    const response = await fetch(url);
    const data = await response.json()

    return data
}

import { listarCursos } from "./cursosApi.js";
import { filtrarStatus } from "./alunosApi.js"

let {cursos} = await listarCursos()
const { disciplina } = await mostrarCard(curso);

console.log(disciplina)

const titleInsert =  () =>{
    const title = disciplina[0].nomeCurso.split('-')
    return title[1]
}
document.querySelector('.title').textContent = titleInsert()


const criarCard = async (item) => {
    
    const container = document.querySelector('.card-aluno')
    
    const card = document.createElement('div');
    card.classList.add('card')
    if (item.status.toLowerCase() == 'cursando') {
        card.classList.add('card-azul')
    } else if(item.status.toLowerCase() == 'finalizado'){
        card.classList.add('card-amarelo')
    }
    
    card.innerHTML = 
    `
    <img src="${item.foto}" class="foto-estudante">
    <span class="nome">${item.nome}</span> 
    `
    container.appendChild(card)

    card.addEventListener('click', (elemento)=>{
        elemento.preventDefault();
        const idAluno = card.id

        localStorage.setItem('aluno', idAluno)

        location.href = '../assents-thirdPage/index.html';
    });
   
}

disciplina.forEach(criarCard)

// const filtrarAlunos = async () => {
    
// }


















// import {mostrarAlunosCurso} from "./alunosApi.js"
// import {listarCursosTitle} from "./alunosApi.js"


// let alunos = await mostrarAlunosCurso();
// let cursos = await listarCursosTitle()

// console.log(alunos);







































