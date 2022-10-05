/* 'use strict'

import { listarCursos } from "./cursosApi.js";

let {cursos} = await listarCursos();

console.log(cursos); */

'use strict'

// criar cards

import { listarCursos } from "./cursosApi.js";


const { cursos } = await listarCursos();

console.log(cursos);

const criarCards = (indice) => {
    const cardsContainer = document.querySelector('#cursos');
    const cards = document.createElement('div');
    cards.classList.add('cards');
    cards.id = indice.sigla.toLowerCase();

    const icone = document.createElement('img');
    icone.classList.add('curso-icon');
    icone.src = indice.icone;

    const sigla = document.createElement('span');
    sigla.classList.add('nome');
    sigla.textContent = indice.sigla;

    cards.appendChild(icone);
    cards.appendChild(sigla);
    cardsContainer.appendChild(cards)

    cards.addEventListener('click', (elemento) => {
        elemento.preventDefault();
        const idCurso = cards.id;
        // console.log(idCurso)

        localStorage.setItem('curso', idCurso);

        location.href = '../student-page/index.html';
    });
}

cursos.forEach(criarCards)


