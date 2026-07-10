//Subcamada responsavel por formatação das datas dos feriados, Seu objetivo e retornar data e dia da semana formatados corretamente.
//Lembrando que o JS usa o formato americano de data mm/dd.
import feriadosNacionais from "./dataFeriado.js";
import { filtraFeriados } from "./filtros.js";

//Aqui estou buscando o dia e usando como indice para pegar o nome da semana no array que crei.
export function formataDiaSemana (dataFeriado){
    let diaDaSemana = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado','Domingo'];
    return diaDaSemana[dataFeriado.getDay()];
}

export function formataDataFeriado (dataFeriado){
    const diaFeriado = dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth();
    const anoFeriado = dataFeriado.getFullYear();

    const dataExibicao = diaFeriado + '/' + mesFeriado + '/' + anoFeriado;

    return dataExibicao;
}

