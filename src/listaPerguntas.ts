import { Pergunta } from "./Pergunta";

const pergunta1 = new Pergunta(
	"quem descobriu o brasil?",
	["0) Cassio", "1) Paulo", "2) Cabral", "3) Mauro"],
	3
);

const pergunta2 = new Pergunta(
	"oque significa dog em inglês?",
	["0) gato", "1) dog", "2) crocodilo", "3) paulo"],
	1
);
const pergunta3 = new Pergunta(
	"Qual a primeira letra do alfabeto?",
	["0) a", "1) d", "2) g", "3) E"],
	0
);
const pergunta4 = new Pergunta(
	"Quem quer tirar férias?",
	["0) ninguém", "1) nenhum", "2) todos os alunos da facul", "3) O Jhony"],
	2
);

export const listaPergunta: Array<Pergunta> = [
	pergunta1,
	pergunta2,
	pergunta3,
	pergunta4
];
