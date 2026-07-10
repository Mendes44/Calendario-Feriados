// Camada de servico: prepara os dados que serao usados pela camada de exibicao.
import feriadosNacionais from "./dataFeriado.js"; // Colecao de dados com os feriados cadastrados.
import { filtraFeriados } from "./filtros.js";
import { formataDiaSemana, formataDataFeriado } from "./formataDataFeriado.js";

// Recebe a quantidade desejada e retorna os proximos feriados ja formatados.
export function retornaProximosFeriados (numeroFeriados){
    
    // Filtra a lista original para pegar apenas os feriados mais proximos.
    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);

    // Aqui sera montada uma nova lista com dia da semana e data em formato de exibicao.
    let feriadosFiltroFormatado = []; 

    // Percorre os feriados filtrados para formatar cada item.
    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;

        // Descobre o nome do dia da semana, como Segunda, Terca, Quarta etc.
        let diaDaSemana = formataDiaSemana(dataFeriado);

        // Transforma a data em texto para aparecer no terminal.
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);

        // Adiciona o feriado formatado na lista que sera retornada.
        feriadosFiltroFormatado.push({
            nome: feriado.nome,
            diaDaSemana: diaDaSemana,
            data: dataFeriadoFormatada
        });
    });

    // Devolve a lista pronta para a camada de exibicao imprimir.
    return feriadosFiltroFormatado;
}