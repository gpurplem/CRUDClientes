create database crud;
use crud;

create table TBPessoa
(
Nome varchar(50) not null,
Nascimento varchar(8) not null,
CPF varchar(11) not null primary key,
Celular varchar(14) not null,
Email varchar(30) not null,
Endereco varchar(50) not null,
Observacao varchar(300)
);

select * from TBPessoa;
