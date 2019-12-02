import { Pergunta } from "./Pergunta";

const pergunta1 = new Pergunta(
	"quem descobriu o brasil?\n",
	["0) Cassio\n", "1) Paulo\n", "2) Cabral\n", "3) Mauro\n"],
	3
);

const pergunta2 = new Pergunta(
	"oque significa dog em inglês?\n",
	["0) gato\n", "1) dog\n", "2) crocodilo\n", "3) paulo\n"],
	1
);
const pergunta3 = new Pergunta(
	"Qual a primeira letra do alfabeto?\n",
	["0) a\n", "1) d\n", "2) g\n", "3) E\n"],
	0
);
const pergunta4 = new Pergunta(
	"Quem quer tirar férias?\n",
	[
		"0) ninguém\n",
		"1) nenhum\n",
		"2) todos os alunos da facul\n",
		"3) O Jhony\n"
	],
	2
);

export const listaPergunta: Array<Pergunta> = [
	pergunta1,
	pergunta2,
	pergunta3,
	pergunta4
];
