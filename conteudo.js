/* =====================================================================
   CELULAR DO IGOR — ARQUIVO DE CONTEÚDO
   Tudo que aparece no celular está aqui. Edite só entre as aspas "".
   Dicas:
   - Não apague vírgulas, chaves { } nem colchetes [ ].
   - Para quebrar uma aspa dentro do texto, use ” ou “ (aspas curvas).
   - Depois de salvar no GitHub, espere 1–2 minutos e recarregue.
   ===================================================================== */

// ---------- TELA DE BLOQUEIO ----------
const PIN = "1947";                                   // senha (4 números)
const PIN_HINT = "Dica: o ano em que o vô nasceu.";   // aparece após 2 erros
const HORA = "23:58";                                 // relógio (fica parado)
const DIA = "sábado";                                 // texto acima do relógio
const BATERIA = 100;                                  // 0 a 100 (vermelho se ≤ 20)
const WALL = "img/fundo.jpg";                         // papel de parede (pasta img)

// Notificações na tela de bloqueio. icone: "msg" ou "tel"
const NOTIFICACOES = [
 {icone:"msg", titulo:"+55 11 9••••-0117", texto:"Ligaremos às 23:50. — J.", hora:"23:31"},
 {icone:"msg", titulo:"Família Baroni",    texto:"14 novas mensagens",      hora:"22:14"},
];

// Número vermelho nos ícones da tela inicial (0 = sem número)
const BADGES = {msgs:17, calls:4, gallery:0, notes:0, recs:0, web:0};

// ---------- GALERIA ----------
// img: caminho da foto na pasta img (ex.: "img/gabi.jpg").
// cap: legenda escrita pelo Igor. fav: true = coração de favorita.
const FOTOS = [
 {id:"floresta-video", video:"img/floresta.mp4", img:"img/floresta-capa.jpg", title:"Entrando na floresta", date:"Meses atrás, 02:55", dur:"0:07", cap:"lá vamos nós", fav:false,
  desc:"Vídeo gravado pelo Igor seguindo o grupo para dentro da floresta, entre árvores enormes e névoa."},

 {id:"armadura-pai", img:"img/armadura-incompleta.jpg", title:"Recebida de Pai", date:"Há 2 semanas", cap:"", fav:false,
  desc:"Foto enviada pelo pai no grupo da família: a armadura no salão da mansão, sem o braço esquerdo e sem a espada."},

 {id:"familia", img:"img/familia-baroni.jpg", title:"Família Baroni", date:"Anos atrás", cap:"Foto tirada da Família Baroni", fav:false,
  desc:"Retrato formal no escritório da mansão: o pai sentado, a mãe ao lado, Bianca atrás, o irmão mais velho à esquerda e Igor à direita, de terno, sem sorrir."},

 {id:"bebendo", img:"img/gabrielle-bebendo.jpg", title:"Selfie na janela", date:"Hoje, 23:41", cap:"eles nem me viram", fav:false,
  desc:"Igor tirando uma selfie do lado de fora da janela da taverna. Lá dentro, o grupo ri e bebe no balcão."},

 {id:"bebada", img:"img/gabrielle-bebada.jpg", title:"Discussão na taverna", date:"Hoje, 22:58", cap:"", fav:false,
  desc:"Gabrielle, visivelmente alterada, apontando e reclamando, enquanto os outros tentam segurar a situação."},

 {id:"syx", img:"img/syx-bebado.jpg", title:"Syx no balcão", date:"Hoje, 22:30", cap:"quem deixou ele subir aí", fav:true,
  desc:"Syx esparramado em cima do balcão, cercado de garrafas. Uma agente cobre o rosto de vergonha; a outra não para de rir."},

 {id:"vo-igor", img:"img/vo-e-igor.jpg", title:"Eu e o vô", date:"Ano passado", cap:"", fav:true,
  desc:"Igor abraçado ao avô, os dois rindo na sala da casa antiga."},
];

// ---------- MENSAGENS ----------
// f:"me" = Igor enviou. f:"o" = a outra pessoa. No grupo, f:"Nome".
// {stamp:"..."} = data no meio da conversa. nd:true = "Não entregue".
// draft = mensagem digitada e não enviada (opcional).
const THREADS = [
 {id:"desc", name:"+55 11 9••••-0117", color:"#5a2320", initial:"?", time:"23:31", unread:true, sub:"Número desconhecido",
  msgs:[
   {stamp:"Anos atrás, 21:02"},
   {f:"o", t:"Igor Baroni. Sabemos que o braço esquerdo e a espada estão com você."},
   {f:"o", t:"Nosso cliente paga o dobro do anúncio. Sem perguntas."},
   {stamp:"Anos atrás, 23:31"},
   {f:"o", t:"Seu avô também recusou. Não repita o erro dele."},
   {f:"o", t:"Ligaremos às 23:50. — J."},
  ]},
 {id:"familia", name:"Família Baroni", color:"#4a3a2a", initial:"FB", time:"22:14", unread:true, muted:true, sub:"Pai, Mãe, Bianca",
  msgs:[
   {stamp:"Há 2 semanas, 07:12"},
   {f:"Pai", img:"img/armadura-incompleta.jpg", t:"Olha o que você fez. Faltando o braço e a espada."},
   {f:"Pai", t:"Devolve o que você roubou. Se não devolver, pode ficar escondido onde estiver, seu ingrato."},
   {f:"Mãe", t:"Filho, isso é roubo. Aquilo é patrimônio da família."},
   {f:"Bianca", t:"ele sempre foi assim, se acha o herdeiro do vovô 🙄"},
   {f:"Pai", t:"Você tem até sexta."},
   {stamp:"Hoje, 19:40"},
   {f:"Mãe", t:"Seu pai está muito nervoso. Responde, por favor."},
   {f:"Pai", t:"O pessoal do leilão ligou de novo. Eles sabem que está com você."},
   {f:"Pai", t:"Última chance, Igor."},
   {stamp:"Hoje, 22:14"},
   {f:"Bianca", t:"vendemos 😘 e por um preço ótimo, mesmo sem as suas partes"},
   {f:"Bianca", t:"pode ficar com essa velharia sem valor"},
   {f:"Mãe", t:"A partir de hoje eu não te considero mais meu filho. Igual ao seu irmão. Dois ingratos."},
   {f:"Bianca", t:"tchau, herdeiro do vovô 👋"},
  ]},
 {id:"vo", name:"Vô", color:"#6b5233", initial:"V", time:"Anos atrás", sub:"",
  msgs:[
   {stamp:"Anos atrás"},
   {f:"me", t:"Eu voltei pra dentro, vô. Juro que voltei.", nd:true},
   {f:"me", t:"Os bombeiros disseram que eu não devia ter entrado. Mas eu ouvi o senhor chamando.", nd:true},
   {f:"me", t:"Minha pele vai ficar marcada pra sempre. Que bom. Não quero esquecer.", nd:true},
   {f:"me", t:"Eles nem esperaram o enterro pra falar de venda.", nd:true},
   {stamp:"Há 2 anos"},
   {f:"me", t:"Eles querem vender tudo. Desculpa, vô. Só consegui salvar isso.", nd:true},
   {stamp:"Anos atrás"},
   {f:"me", t:"Hoje eu protegi alguém. Acho que o senhor ia gostar dela.", nd:true},
   {f:"me", t:"Tô com medo. Mas a espada ainda pesa igual.", nd:true},
  ]},
];

// ---------- NOTAS ----------
// Cada item de body é um parágrafo. O id de cada nota precisa ser diferente.
const NOTES = [
 {id:"carta", title:"Se alguém estiver lendo isso", date:"Editada há meses, 03:22", body:[
  "Se você está com meu celular, provavelmente eu não voltei.",
  "Nessa missão, na floresta sombria.",
  "Espero que seja você, Gabi.",
  "A espada se chama Escalibur. Meu avô deu esse nome rindo, dizendo que toda família precisa de um pouco de lenda. O braço da armadura era dele também.",
  "A cicatriz é do dia em que a casa do vô pegou fogo. Eu entrei. Cheguei até a porta do quarto dele. Não deu. Quando me tiraram de lá, só lembro no hospital.",
  "Então ela não esconde só a queimadura. Esconde que eu falhei com ele. E ela fica do lado do coração. Todo dia que eu usava, era uma promessa: da próxima vez, eu não vou soltar ninguém.",
  "Minha família vai querer isso de volta. Não por amor, por dinheiro. Não entrega. Nem se oferecerem tudo. Principalmente se oferecerem tudo.",
  "O nome Baroni não é a fortuna. Nunca foi. É isso aqui.",
  "Se eu morri protegendo as pessoas que considero minha família na Ordo Realitas, então acho que dessa vez eu consegui.",
  "Agora é seu.",
  "— Igor Baroni",
  "PS.: Depois vou excluir isso KKKKK. Acho que é só uma deprê momentânea, deve ser esse lugar."]},

   {id:"lembrete", title:"lembrete", date:"Anos atrás", body:[
  "Me perguntam por que só o braço esquerdo.",
  "O lado esquerdo é o lado do coração.",
  "E é com ele que eu protejo quem eu amo."]},

 {id:"registro", title:"registro", date:"Meses atrás, 02:40", body:[
  "Acho que essa missão vai ser longa, mas quero deixar registrado.",
  "Tomara que todos sobrevivam. Principalmente a Gabrielle. Não vou suportar sem conhecer ela mais, já que ela é a nossa capitã. (obs.: não posso dizer isso)",
  "E a Ordo Realitas... e o que está por vir."]},

 {id:"lista", title:"coisas", date:"Anos atrás", body:[
  "– café do vô (o da lata azul)",
  "– levar a espada pra afiar? NÃO. ninguém encosta nela",
  "– descobrir o que ele queria me mostrar na espada",
  "– não responder o pai"]},

 {id:"primeiro-dia", title:"primeiro dia", date:"Meses atrás", body:[
  "Já perdi uma família pro fogo e outra pro dinheiro. A terceira, eu escolho. E protejo.",
  "— Igor Baroni"]},

 {id:"lembrete", title:"lembrete", date:"Anos atrás", body:[
  "Encontrei um lugar no Brasil. Meio misterioso ainda, mas vou me acostumar.",
  "Uma moça, Gabriella ou Gabrielle, tenho que perguntar ainda.",
  "Ela é forte, inteligente. Gostei dela. Muito diferente da minha irmã e da minha família."]},
];

// ---------- GRAVADOR ----------
// lines: [segundo, "texto"]. Texto entre [colchetes] vira efeito sonoro.
const RECS = [
 {id:"vo", name:"vô", date:"2 anos atrás", dur:38, lines:[
  [0,"Igor, passa aqui amanhã?"],
  [5,"Tirei a armadura do porão pra limpar…"],
  [11,"queria te mostrar uma coisa na espada que eu nunca te contei."],
  [20,"Traz aquele café que eu gosto."],
  [26,"Te espero. A gente leva pra sua casa, Igor."],
  [31,"[ruído, uma porta se fechando ao fundo]"]]},
 {id:"igor", name:"sem título", date:"Anos atrás, 23:44", dur:11, lines:[
  [0,"[vento]"],
  [2,"…tá vendo? Eles tão lá dentro."],
  [6,"Se eu não…"],
  [9,"[a gravação termina]"]]},
];

// ---------- TELEFONE (chamadas recentes) ----------
// miss:true = chamada perdida (fica vermelha)
const CALLS = [
 {n:"Pai (20)", t:"22:10", k:"Perdida", miss:true},
 {n:"Gabi", t:"19:34", k:"Efetuada"},
 {n:"Mãe", t:"Anos atrás", k:"Perdida", miss:true},
 {n:"Vô", t:"2 anos atrás", k:"Efetuada · número inexistente"},
];

// ---------- NAVEGADOR (páginas salvas) ----------
// Cada item é uma página. Só "titulo" e "url" são obrigatórios; o resto é opcional.
const SITES = [
 {titulo:"Valenti Aste — Lotto 117", url:"valentiaste.it/pt/lotto/117", hora:"Hoje, 21:10", tema:"claro",
  marca:"Casa d’Aste Valenti", subtitulo:"Firenze · São Paulo — Asta di famiglia · Lotto 117",
  manchete:"Armatura italiana completa con spada cerimoniale",
  img:"img/armadura-completa.jpg",
  texto:["Armadura de placas em estilo milanês, preservada por gerações no salão da família. Acompanha a espada cerimonial com lâmina azul e guarda dourada."],
  campos:[["Provenienza","Família Baroni — Toscana, Itália"],["Epoca","Estilo do séc. XVI"],["Spada","“Escalibur”, gravação no punho"],["Base d'asta","R$ 480.000"],["Stato","Venduto · sem a braçadeira esquerda e sem a espada"]],
  destaqueRotulo:"Aggiudicato (arrematado)", destaque:"R$ 410.000",
  aviso:"Nota del banditore: lote vendido incompleto. O arrematante aguarda a entrega das peças faltantes. Tratar diretamente com o Sr. Valenti."},

 {titulo:"Mansão dos Baroni pega fogo", url:"gazetaregional.com.br/cidade/mansao-baroni", hora:"Semanas atrás", tema:"escuro",
  marca:"Gazeta Regional", subtitulo:"Cidade · atualizado às 07:40",
  manchete:"Mansão da família Baroni pega fogo misteriosamente durante a madrugada",
  img:"img/mansao-incendio.jpg",
  texto:["Um incêndio de grandes proporções destruiu a mansão da tradicional família Baroni. Equipes dos bombeiros trabalharam por mais de duas horas para controlar as chamas.",
         "O morador mais velho da família, patriarca dos Baroni, morreu carbonizado dentro do imóvel.",
         "O neto do morador, que entrou na casa tentando salvá-lo, ficou ferido por causa do fogo intenso e foi levado ao hospital com queimaduras.",
         "A perícia não encontrou vestígios do autor nem a causa do incêndio. O caso segue sem explicação."]},
];
