var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function salvarResultado(usuario, quiz, pontuacao) {
    console.log("Salvando resultado para usuário:", usuario, "quiz:", quiz, "pontuação:", pontuacao);
    var instrucaoSql = `
        INSERT INTO resultadoQuiz (fkUsuario, fkQuiz, pontuacao) VALUES ('${usuario}', '${quiz}', '${pontuacao}');
    `;
    console.log("Executando a instrução SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}
function obterPontuacao(idUsuario) {
    var instrucaoSql = `
        SELECT usuario.nome, resultadoQuiz.pontuacao AS total_pontuacao
        FROM usuario
        LEFT JOIN resultadoQuiz ON usuario.idUsuario = resultadoQuiz.fkUsuario
        WHERE resultadoQuiz.idResultado IN (
            SELECT MIN(idResultado)
            FROM resultadoQuiz
            WHERE fkUsuario = usuario.idUsuario
            GROUP BY fkUsuario
        );
    `;
    console.log("Executando a instrução SQL:", instrucaoSql);
    return database.executar(instrucaoSql)
        .then(resultado => {
            if (resultado.length === 0) {
                return Promise.reject({ message: "Nenhum resultado encontrado." });
            }
            return resultado;
        });
}


module.exports = {
    autenticar,
    cadastrar,
    salvarResultado,
    obterPontuacao
};