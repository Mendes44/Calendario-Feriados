//Sub-Camada responsavel por filtrar os proximos feriados e retornar para a camada de serviço.
export function filtraFeriados (feriado, numeroFeriados){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado;

    feriado.forEach((feriado) => {
        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);

        if(dataAtual > novaDataFeriado){
            novaDataFeriado.setFullYear(anoAtual + 1);
        }

        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado,
        });
    });

    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

    return proximosFeriados;
}