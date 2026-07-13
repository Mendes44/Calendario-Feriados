// Subcamada responsavel por formatar as datas dos feriados para exibicao.
// Lembrando: ao criar datas por string, o JavaScript trabalha melhor com o formato americano MM/DD.

// Recebe uma data e retorna o nome do dia da semana correspondente.
export function formataDiaSemana (dataFeriado){
    // getDay() retorna um numero de 0 a 6, sendo 0 domingo e 6 sabado.
    let diaDaSemana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

    // Usa o numero retornado por getDay() como indice do array acima.
    return diaDaSemana[dataFeriado.getDay()];
}

// Recebe uma data do JavaScript e monta uma string para mostrar no terminal.
export function formataDataFeriado (dataFeriado){
    // getDate() pega o dia do mes.
    const diaFeriado = dataFeriado.getDate();

    // getMonth() pega o mes da data.
    const mesFeriado = dataFeriado.getMonth();

    // getFullYear() pega o ano com quatro digitos.
    const anoFeriado = dataFeriado.getFullYear();

    // Junta dia, mes e ano no formato usado para exibicao.
    const dataExibicao = diaFeriado + '/' + mesFeriado + '/' + anoFeriado;

    return dataExibicao;
}

