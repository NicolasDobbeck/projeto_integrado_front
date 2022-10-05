//import da biblioteca do express
const express =  require('express')

//import da biblioteca do cors
const cors = require('cors')

//import da biblioteca do body-parser
const bodyParser = require('body-parser')

//Criando o objeto app
const app = express();

//import das funcoes utilizadas
const {alunosFilter, getAlunos, AlunoCurso, getAlunoByCurso, alunoAno, alunoStatus} = require('./module/alunos.js');
const {getCursos, getCursosByName} = require('./module/cursos.js');
const { response } = require('express');

app.use((request, response, next) => {
    //header - contém permissão / segurança
    //body - dados(JSON)
    //Permite especificar quem serao os IP's que podem acessar a API (no caso (* == significa todos))
    response.header('Acess-Control-Allow-Origin', '*')
    //Permite especificar quais serao os verbos (metodos) que API irá reconhecer 
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Estabelece que as opcoes acima serao respresentadas pelo cors
    app.use(cors());
    next();
});

app.get('/alunos/curso/:status/:cursando', cors(), async function(request, response, next){
    let idStatus = request.params.status;
    let cursoNome = request.params.cursando;
    let statusAluno = alunoStatus(idStatus, cursoNome);
    let statusJson = {}

    if(statusAluno){
        statusJson.AlunosByStatus = statusAluno;
        response.status(200);
        response.json(statusJson);
        
    }else{
        response.status(400);
    }

})

//EndPoint: Busca aluno pela matricula // status: Funcionando
app.get('/aluno/:matriculaAluno', cors(), async function(request, response, next){
    let idAluno = request.params.matriculaAluno;
    let aluno = alunosFilter(idAluno);
    let alunoDescricao = {}

    if (aluno) {
        alunoDescricao.alunoInfo = aluno;
        response.status(200);
        response.json(alunoDescricao);
    }else{
        response.status(404);
    }
})

//Endpoint: Mostra todos os alunos // status: Funcionando
app.get('/alunos', cors(), async function(request, response, next){
    let alunos = getAlunos();
    let jsonAlunos = {}

    if (alunos) {
        jsonAlunos.alunos = alunos
        response.status(200);
        response.json(jsonAlunos);
    }else{
        response.status(404);
    
    }
    
})

//EndPoint: Mostra todas as informacoes do curso do aluno // Funcionando
app.get('/disciplinas/:matriculaAluno', cors(), async function(request, response, next){
    let idGetInfoCurso = request.params.matriculaAluno;
    let aluno = AlunoCurso(idGetInfoCurso);
    let alunoInfoCurso = {}

    if (aluno) {
        alunoInfoCurso.aluno = aluno
        response.status(200)
        response.json(alunoInfoCurso)
    }else{
        response.status(404)
    }
    
})

//EndPoint: Filtra os alunos pelo Curso // status
app.get('/curso/:cursoAluno', cors(), async function(request, response, next){
    let idAlunoCurso = request.params.cursoAluno;
    let disciplina = getAlunoByCurso(idAlunoCurso);
    let infoDisciplina = {}

    if (disciplina) {
        infoDisciplina.disciplina = disciplina
        response.status(200)
        response.json(infoDisciplina)
    }else{
        response.status(404)
    }
})

//EndPoint: Filtra alunos pelo ano
app.get('/conclusao/:anoDeConclusao', cors(), async function(request, response, next){
    let idAnoConclusao = request.params.anoDeConclusao;
    let ano = alunoAno(idAnoConclusao);
    let jsonAno = {};

    if (ano) {
        jsonAno.ano = ano;
        response.status(200)
        response.json(jsonAno)
    }else{
        response.status(404)
    }
})

//EndPoint: Mostra todos os cursos // status: funcionando
app.get('/cursos', cors(), async function(request, response, next){
    let cursos = getCursos();
    let jsonCursos = {};
    
    if (cursos) {
        jsonCursos.cursos = cursos;
        response.status(200)
        response.json(jsonCursos)
    }else{
        response.status(404)
    }
        
    
})

// Lista o curso pelo nome 
app.get('/curso/:nomeCurso', cors(), async function(request, response, next){
    let idCurso = request.params.nomeCurso
    let cursos = getCursosByName(idCurso)
    let jsonCursosNomes = {}

    if (cursos) {
        jsonCursosNomes.cursos = cursos
        response.status(200)
        response.json(jsonCursosNomes)
    }else{
        response.status(404)
    }
})


app.listen(5050, function(){
    console.log('Servidor aguardando requisicoes');
})







// //EndPoint: Filtra os alunos pelo Curso // status
// app.get('/disciplina/:disciplinaAluno', cors(), async function(request, response, next){
//     let idAlunoCurso = request.params.disciplinaAluno;
//     let disciplina = getAlunoByCurso(idAlunoCurso);
//     let infoDisciplina = {}

//     if (disciplina) {
//         infoDisciplina.disciplina = disciplina
//         response.status(200)
//         response.json(infoDisciplina)
//     }else{
//         response.status(404)
//     }
// })