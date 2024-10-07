-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Insigna;
use Insigna;

create table usuario(
id int primary key auto_increment,
nome varchar(50) unique,
distritoPolicial int,
email varchar(45),
matricula varchar(20),
senha varchar(45)
);

insert into usuario(nome, matricula, email, senha) values ("Victor", "1234567", "victor@gmail.com", "1234567");

create table operacoes(
codigoOp int auto_increment primary key,
nomeOp varchar(45),
qtdPoliciais int,
localOp varchar(45),
dataOp date,
descricaoOp varchar(500));

create table dados(
id int primary key auto_increment,
dp varchar(100),
natureza varchar(100),
ano int,
janeiro int,
fevereiro int,
marco int,
abril int,
maio int,
junho int,
julho int,
agosto int,
setembro int,
outubro int,
novembro int,
dezembro int,
total int );

select * from usuario;
select * from operacoes;
select * from dados;
