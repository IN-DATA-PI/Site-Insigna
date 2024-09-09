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
nome varchar(50),
departamento varchar(50),
email varchar(45),
matricula int,
senha varchar(45)
);


select * from usuario;