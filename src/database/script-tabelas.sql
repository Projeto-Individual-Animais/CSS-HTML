CREATE DATABASE projetoIndividual;
use projetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (264),
senha varchar (100)
);

create table quiz(
idQuiz int primary key,
nome varchar(45));

create table resultadoQuiz(
idResultado int auto_increment,
fkUsuario int,
fkQuiz int,
constraint fkUsuarioQuiz foreign key (fkUsuario) references usuario(idUsuario),
constraint fkQuizResultado foreign key (fkQuiz) references quiz(idQuiz),
primary key (idResultado, fkUsuario, fkQuiz),
pontuacao int);
select * from resultadoQuiz;


    select sum(pontuacao) as total_pontuacao from resultadoQuiz where fkUsuario = 1;

create table sugestao(
idSugestao int primary key auto_increment,
titulo varchar (20),
conteudo varchar (100),
fkUsuario int,
constraint fkUsuarioSugestao foreign key (fkUsuario) references usuario(idUsuario)
);

create table artigo(
idArtigo int primary key auto_increment,
titulo varchar (20),
dataPostagem date
);

create table conteudo(
idConteudo int primary key auto_increment,
fkArtigo int,
constraint fkConteudoArtigo foreign key (fkArtigo) references artigo(idArtigo)
);

SELECT * FROM usuario;
SELECT * FROM resultadoQuiz;

insert into quiz values(1, 'O peixe com mãos')

-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

-- CREATE DATABASE projetoIndividual;
-- use projetoIndividual;

-- create table usuario(
-- idUsuario int primary key auto_increment,
-- nome varchar (45),
-- email varchar (264),
-- senha varchar (100)
-- );

-- create table sugestao(
-- idSugestao int primary key auto_increment,
-- titulo varchar (20),
-- conteudo varchar (100),
-- fkUsuario int,
-- constraint fkUsuarioSugestao foreign key (fkUsuario) references usuario(idUsuario)
-- );

-- create table artigo(
-- idArtigo int primary key auto_increment,
-- titulo varchar (20),
-- dataPostagem date
-- );

-- create table conteudo(
-- idConteudo int primary key auto_increment,
-- fkArtigo int,
-- constraint fkConteudoArtigo foreign key (fkArtigo) references artigo(idArtigo)
-- );

-- create table usuarioReageArtigo (
-- idusuarioReageArtigo int,
-- tipo VARCHAR(9) CHECK (tipo IN ('amei', 'gostei', 'naoGostei')),
-- fkUsuario int,
-- fkArtigo int,
-- primary key (fkUsuario, fkArtigo),
-- constraint fkUsuarioReage foreign key (fkUsuario) references usuario(idUsuario),
-- constraint fkArtigoReagido foreign key (fkArtigo) references artigo(idArtigo)
-- );

-- insert into aquario (descricao) values ('Aquário de Estrela-do-mar');