//Camada de Serviço - Responsavel por fornecer dados para camada de exibição
import feriadosNacionais from "./dataFeriado.js"; //Coleçao de Dados
import { filtraFeriados } from "./filtros.js";
import { formataDiaSemana, formataDataFeriado } from "./formataDataFeriado.js";

export function retornaProximosFeriados (numeroFeriados){
    
    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);
    let feriadosFiltroFormatado = []; 

    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaDaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);

        feriadosFiltroFormatado.push({
            nome: feriado.nome,
            diaDaSemana: diaDaSemana,
            data: dataFeriadoFormatada
        });
    });

    return feriadosFiltroFormatado;
}