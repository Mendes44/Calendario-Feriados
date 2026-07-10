//Camada de Exibição
import { retornaProximosFeriados } from "./retornaFeriado.js";
import imprimeFeriados from "./imprimeFeriado.js";
import entradaDados from 'readline-sync'

let data = new Date();
data = data.getFullYear();
let numeroFeriados = Number(entradaDados.question('Digite o número de feriado que deseja saber no ano de ' + data + ': '));

console.log(`       :::Proximos Feriados do Ano de ${data}:::  \n   `);

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);




