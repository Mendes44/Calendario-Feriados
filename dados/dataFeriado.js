// Camada de dados: concentra a lista de feriados usada pelo restante da aplicacao.
// As datas estao no formato MM/DD porque o JavaScript interpreta esse formato ao criar datas com new Date().
const feriadosNacionais = [
  { nome: 'Confraternização universal', data: '01/01' },
  { nome: 'Tiradentes', data: '04/21' },
  { nome: 'Dia do trabalho', data: '05/01' },
  { nome: 'Independência do Brasil', data: '09/07' },
  { nome: 'Nossa Senhora Aparecida', data: '10/12' },
  { nome: 'Finados', data: '11/02' },
  { nome: 'Proclamação da República', data: '11/15' },
  { nome: 'Dia Nacional de Zumbi e da Consciência Negra', data: '11/20' },
  { nome: 'Natal', data: '12/25' },
];

// Exporta a lista para que a camada de servico possa consultar os feriados.
export default feriadosNacionais;