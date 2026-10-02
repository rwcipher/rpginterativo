// ---------- NAVEGADOR (páginas salvas) ----------
// Cada item é uma página. Só "titulo" e "url" são obrigatórios; o resto é opcional.
// tema: "claro" ou "escuro". img: foto no topo (ex.: "img/casa.jpg").
// texto: parágrafos. campos: ["Rótulo","Valor"]. destaque: número grande (preço etc.).
const SITES = [
 {titulo:"Moretti Leilões — Lote 117", url:"morettileiloes.com.br/lote/117", hora:"Hoje, 21:10", tema:"claro",
  marca:"Moretti Leilões & Antiguidades", subtitulo:"Lote 117 · Acervo de família",
  manchete:"Armadura europeia de placas com espada cerimonial",
  imgTexto:"foto do conjunto sobre um suporte de madeira",
  campos:[["Procedência","Família Baroni"],["Estado","Incompleto: falta a braçadeira esquerda"],["Espada","“Escalibur”, gravação no punho"],["Encerra em","2 dias"]],
  destaqueRotulo:"Lance inicial", destaque:"R$ 480.000",
  aviso:"Nota do leiloeiro: o arrematante já manifestou interesse e aguarda a peça faltante. Tratar diretamente com o Sr. Moretti."},

 {titulo:"Incêndio atinge casa no centro", url:"gazetaregional.com.br/cidade/incendio", hora:"Semanas atrás", tema:"escuro",
  marca:"Gazeta Regional", subtitulo:"Cidade · atualizado às 07:40",
  manchete:"Incêndio atinge casa durante a madrugada; morador idoso não resiste",
  imgTexto:"fachada escurecida pela fumaça",
  texto:["O fogo começou por volta das 3h e foi controlado pelos bombeiros após duas horas.",
         "Um neto do morador entrou no imóvel tentando socorrê-lo e foi levado ao hospital com queimaduras.",
         "A causa do incêndio ainda será apurada pela perícia."]},
];
