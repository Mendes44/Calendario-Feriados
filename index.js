//Camada de Exibição
import { retornaProximosFeriados } from "./retornaFeriado.js";
import imprimeFeriados from "./imprimeFeriado.js";

let data = new Date();
data = data.getFullYear();
let numeroFeriados = 3;

console.log(`:::Proximos Feriados do Ano de ${data}:::`);

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);




