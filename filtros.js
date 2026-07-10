// Subcamada responsavel por calcular quais feriados estao mais proximos da data atual.
export function filtraFeriados (feriado, numeroFeriados){
    // Pega a data de hoje e o ano atual para montar as datas completas dos feriados.
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado;

    // Percorre cada feriado da lista recebida.
    feriado.forEach((feriado) => {
        // Monta uma data completa usando o dia/mes do feriado e o ano atual.
        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);

        // Se o feriado deste ano ja passou, considera a mesma data no ano seguinte.
        if(dataAtual > novaDataFeriado){
            novaDataFeriado.setFullYear(anoAtual + 1);
        }

        // Guarda o nome do feriado junto com a data calculada.
        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado,
        });
    });

    // Ordena do feriado mais proximo para o mais distante.
    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);

    // Retorna apenas a quantidade de feriados solicitada pelo usuario.
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

    return proximosFeriados;
}