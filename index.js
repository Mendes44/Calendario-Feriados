// Camada de exibicao: ponto de entrada do programa.
import { retornaProximosFeriados } from "./retornaFeriado.js";
import imprimeFeriados from "./imprimeFeriado.js";
import entradaDados from 'readline-sync'

// Cria uma data atual apenas para descobrir o ano que sera mostrado na pergunta.
let data = new Date();
data = data.getFullYear();

// Pergunta ao usuario quantos feriados ele deseja listar e converte a resposta para numero.
let numeroFeriados = Number(entradaDados.question('Digite o número de feriado que deseja saber no ano de ' + data + ': '));

// Mostra o titulo antes da lista de proximos feriados.
console.log(`       :::Proximos Feriados do Ano de ${data}:::  \n   `);

// Busca os proximos feriados ja filtrados e formatados pela camada de servico.
let proximosFeriados = retornaProximosFeriados(numeroFeriados);

// Envia os feriados para a camada responsavel por imprimir no terminal.
imprimeFeriados(proximosFeriados);




