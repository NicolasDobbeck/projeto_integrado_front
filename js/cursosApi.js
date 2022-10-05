/* 'use strict'

//Consumindo API

//Rota do endpoint de Cursos

const listarCursos =  async () =>{
    const url = `http://localhost:3030/cursos`

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export{
    listarCursos
} */

'use strict'

//consumo de api

const listarCursos = async () => {
    const url = `http://localhost:5050/cursos`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {listarCursos};