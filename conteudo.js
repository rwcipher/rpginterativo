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
 {icone:"msg", titulo:"+55 11 9••••-0117", texto:"Ligaremos às 23:50. — M.", hora:"23:31"},
 {icone:"msg", titulo:"Família Baroni",    texto:"14 novas mensagens",      hora:"22:14"},
];

// Número vermelho nos ícones da tela inicial (0 = sem número)
const BADGES = {msgs:17, calls:4, gallery:0, notes:0, recs:0, web:0};

// ---------- GALERIA ----------
// img: caminho da foto na pasta img (ex.: "img/gabi.jpg"). Deixe sem img
//      para mostrar só a descrição num fundo colorido (tone).
// cap: legenda escrita pelo Igor. fav: true = coração de favorita.
const FOTOS = [
 {id:"armadura-pai", img:"img/armadura-incompleta.jpg", title:"Recebida de Pai", date:"Há 2 semanas", cap:"", fav:false,
  desc:"Foto enviada pelo pai no grupo da família: a armadura no salão da mansão, sem o braço esquerdo e sem a espada."},

 {id:"familia", img:"img/familia-baroni.jpg", title:"Família Baroni", date:"Anos atrás", cap:"Foto tirada da Família Baroni", fav:false,
  desc:"Retrato formal no escritório da mansão: o pai sentado, a mãe ao lado, Bianca atrás, o irmão mais velho à esquerda e Igor à direita, de terno, sem sorrir."},

 {id:"koda", video:"img/koda.mp4", img:"img/koda-capa.jpg", title:"Koda", date:"Hoje, 20:12", dur:"0:10", cap:"", fav:false,
  desc:"Vídeo curto: uma garota de capuz diante de várias telas, com código refletido nos olhos."},

 {id:"bebendo", img:"img/gabrielle-bebendo.jpg", title:"Selfie na janela", date:"Hoje, 23:41", cap:"eles nem me viram", fav:false,
  desc:"Igor tirando uma selfie do lado de fora da janela da taverna. Lá dentro, o grupo ri e bebe no balcão."},

 {id:"bebada", img:"img/gabrielle-bebada.jpg", title:"Discussão na taverna", date:"Hoje, 22:58", cap:"", fav:false,
  desc:"Gabrielle, visivelmente alterada, apontando e reclamando, enquanto os outros tentam segurar a situação."},

 {id:"syx", img:"img/syx-bebado.jpg", title:"Syx no balcão", date:"Hoje, 22:30", cap:"quem deixou ele subir aí", fav:true,
  desc:"Syx esparramado em cima do balcão, cercado de garrafas. Uma agente cobre o rosto de vergonha; a outra não para de rir."},

 {id:"vo-igor", img:"img/vo-e-igor.jpg", title:"Eu e o vô", date:"Ano passado", cap:"", fav:true,
  desc:"Igor abraçado ao avô, os dois rindo na sala da casa antiga."},

 {id:"janela", img:"img/janela.jpg", title:"Última foto", date:"Hoje, 23:41", cap:"", fav:false,
  desc:"Tirada de fora da janela da taverna. Lá dentro, agentes de preto conversam perto do balcão. O próprio Igor aparece desfocado no canto, espiando.",
  prompt:"(já é a imagem real montada a partir do mapa)"},
 {id:"gabi", title:"lado esquerdo", date:"Há 4 dias", cap:"lado esquerdo", fav:true, tone:"#3a3a4a,#15151c",
  desc:"Foto da Gabrielle tirada sem ela perceber, durante uma missão. Está nos favoritos.",
  prompt:"Candid phone photo of a young woman with long black hair, white shirt and black vest, looking away, unaware of the camera, warm dim light, slightly blurry, intimate and quiet mood"},
 {id:"anuncio", title:"Print do anúncio", date:"Há 6 dias", cap:"", fav:false, tone:"#6b6258,#2e2823",
  desc:"Print de um site de leilão: “Armadura europeia completa + espada cerimonial. Acervo da família Baroni. Lance inicial: R$ 480.000.” Quem anunciou foi o pai dele.",
  prompt:"Phone screenshot of an antique auction website listing, medieval plate armor and ceremonial longsword, price in Brazilian reais, elegant serif layout"},
 {id:"hospital", title:"Espelho do hospital", date:"Semanas atrás", cap:"", fav:false, tone:"#5c6468,#1e2224",
  desc:"Selfie no espelho de um banheiro de hospital. A queimadura vai do ombro ao antebraço esquerdo e sobe pelo peito, perto do coração. Parece que ele ia apagar e não apagou.",
  prompt:"Hospital bathroom mirror selfie, young man with a large healing burn scar on his left shoulder and arm reaching toward his chest, bandages on the sink, cold fluorescent lighting, melancholic"},
 {id:"sobrou", title:"O que sobrou", date:"Semanas atrás", cap:"Nem o fogo quis levar.", fav:true, tone:"#5a4636,#1b130d",
  desc:"A armadura e a Escalibur sobre uma lona, enegrecidas de fuligem mas inteiras, no meio das cinzas.",
  prompt:"Soot-covered medieval plate armor and ornate longsword laid on a tarp, intact among ashes and debris, dramatic light rays through smoke"},
 {id:"casa", title:"A casa do vô", date:"Semanas atrás", cap:"", fav:false, tone:"#4b4540,#141210",
  desc:"A fachada depois do incêndio: janelas pretas de fuligem, fita de isolamento na frente. Tirada de dentro de um carro.",
  prompt:"Aftermath of a house fire, blackened windows, soot-stained facade, police tape at the entrance, overcast day, seen through a car window, somber"},
 {id:"noite", title:"A noite em que saí", date:"Há 2 semanas", cap:"", fav:false, tone:"#222834,#07080b",
  desc:"Foto tremida no escuro: o braço esquerdo da armadura e a espada no banco de trás de um carro. A data é da noite da briga com a família.",
  prompt:"Blurry night phone photo, back seat of a car, a single left arm gauntlet and pauldron of medieval armor next to a longsword half wrapped in a blanket, dim streetlight"},
 {id:"vovo", title:"Vovô e eu", date:"Foto de foto", cap:"", fav:true, tone:"#8a6a45,#3a2a1a",
  desc:"Foto da foto física, com o canto queimado: um menino de uns 8 anos com o elmo grande demais na cabeça, rindo, e o avô atrás segurando pra não cair. A única foto em que Igor sorri de verdade.",
  prompt:"Burned vintage photograph with scorched edges, young boy laughing wearing an oversized medieval knight helmet, grandfather with white mustache behind him holding it steady, lying on ashes"},
];

// ---------- MENSAGENS ----------
// f:"me" = Igor enviou. f:"o" = a outra pessoa. No grupo, f:"Nome".
// {stamp:"..."} = data no meio da conversa. nd:true = "Não entregue".
// draft = mensagem digitada e não enviada (opcional).
const THREADS = [
 {id:"desc", name:"+55 11 9••••-0117", color:"#5a2320", initial:"?", time:"23:31", unread:true, sub:"Número desconhecido",
  msgs:[
   {stamp:"Hoje, 21:02"},
   {f:"o", t:"Igor Baroni. Sabemos que o braço esquerdo e a espada estão com você."},
   {f:"o", t:"Nosso cliente paga o dobro do anúncio. Sem perguntas."},
   {stamp:"Hoje, 23:31"},
   {f:"o", t:"Seu avô também recusou. Não repita o erro dele."},
   {f:"o", t:"Ligaremos às 23:50. — M."},
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
 {id:"gabi", name:"Gabi", color:"#2f3c52", initial:"G", time:"19:36", sub:"",
  msgs:[
   {stamp:"Ontem, 02:10"},
   {f:"o", t:"chegou vivo?"},
   {f:"me", t:"infelizmente"},
   {f:"o", t:"palhaço 🙄"},
   {f:"o", t:"obrigada por hoje. de verdade."},
   {f:"me", t:"não precisa agradecer. é pra isso que o braço serve"},
   {f:"o", t:"que braço?"},
   {f:"me", t:"um dia eu te conto"},
   {stamp:"Hoje, 19:36"},
   {f:"o", t:"missão hoje. vc vem né?"},
   {f:"me", t:"sempre"},
  ],
  draft:"Gabi, obrigado por nunca perguntar da cicatriz. Amanhã eu te conto tudo, prometo. Sobre o vô, o fogo, a esp"},
 {id:"vo", name:"Vô", color:"#6b5233", initial:"V", time:"Ontem", sub:"",
  msgs:[
   {stamp:"Semanas atrás"},
   {f:"me", t:"Eu voltei pra dentro, vô. Juro que voltei.", nd:true},
   {f:"me", t:"Os bombeiros disseram que eu não devia ter entrado. Mas eu ouvi o senhor chamando.", nd:true},
   {f:"me", t:"Minha pele vai ficar marcada pra sempre. Que bom. Não quero esquecer.", nd:true},
   {f:"me", t:"Eles nem esperaram o enterro pra falar de venda.", nd:true},
   {stamp:"Há 2 semanas"},
   {f:"me", t:"Eles querem vender tudo. Desculpa, vô. Só consegui salvar isso.", nd:true},
   {stamp:"Ontem"},
   {f:"me", t:"Hoje eu protegi alguém. Acho que o senhor ia gostar dela.", nd:true},
   {f:"me", t:"Tô com medo. Mas a espada ainda pesa igual.", nd:true},
  ]},
];

// ---------- NOTAS ----------
// Cada item de body é um parágrafo.
const NOTES = [
 {id:"carta", title:"Se alguém estiver lendo isso", date:"Editada ontem, 03:22", body:[
  "Se você está com meu celular, provavelmente eu não voltei.",
  "Espero que seja você, Gabi.",
  "A espada se chama Escalibur. Meu avô deu esse nome rindo, dizendo que toda família precisa de um pouco de lenda. O braço da armadura era dele também.",
  "A cicatriz é do dia em que a casa do vô pegou fogo. Eu entrei. Cheguei até a porta do quarto dele. Não deu. Quando me tiraram de lá, a única coisa que eu segurava era o braço da armadura, que tava pendurado no corredor.",
  "Então ela não esconde só a queimadura. Esconde que eu falhei com ele. E ela fica do lado do coração. Todo dia que eu usava, era uma promessa: da próxima vez, eu não vou soltar ninguém.",
  "Minha família vai querer isso de volta. Não por amor, por dinheiro. Não entrega. Nem se oferecerem tudo. Principalmente se oferecerem tudo.",
  "O nome Baroni não é a fortuna. Nunca foi. É isso aqui.",
  "Se eu morri te protegendo, então acho que dessa vez eu consegui.",
  "Agora é seu.",
  "— Igor"]},
 {id:"registro", title:"registro", date:"Ontem, 02:40", body:[
  "Acho que essa missão vai ser longa, mas quero deixar registrado.",
  "Tomara que todos sobrevivam. Principalmente a Gabrielle. Não vou suportar sem conhecer ela mais, já que ela é a nossa capitã. (obs.: não posso dizer isso)",
  "E a Ordem... e o que está por vir."]},
 {id:"lista", title:"coisas", date:"Semanas atrás", body:[
  "– café do vô (o da lata azul)",
  "– levar a espada pra afiar? NÃO. ninguém encosta nela",
  "– descobrir o que ele queria me mostrar na espada",
  "– não responder o pai",
  "– comprar faixa nova pro braço"]},
 {id:"lembrete", title:"lembrete", date:"Meses atrás", body:[
  "Encontrei um lugar no Brasil. Meio misterioso ainda, mas vou me acostumar.",
  "Uma moça, Gabriella ou Gabrielle, tenho que perguntar ainda.",
  "Ela é forte, inteligente. Gostei dela. Muito diferente da minha irmã."]},
];

// ---------- GRAVADOR ----------
// lines: [segundo, "texto"]. Texto entre [colchetes] vira efeito sonoro.
const RECS = [
 {id:"vo", name:"vô_sábado", date:"Semanas atrás", dur:38, lines:[
  [0,"Igor, passa aqui amanhã?"],
  [5,"Tirei a armadura do porão pra limpar…"],
  [11,"queria te mostrar uma coisa na espada que eu nunca te contei."],
  [20,"Traz aquele café que eu gosto."],
  [26,"Te espero."],
  [31,"[ruído, uma porta se fechando ao fundo]"]]},
 {id:"igor", name:"sem título", date:"Hoje, 23:44", dur:11, lines:[
  [0,"[vento]"],
  [2,"…tá vendo? Eles tão lá dentro."],
  [6,"Se eu não…"],
  [9,"[a gravação termina]"]]},
];

// ---------- TELEFONE (chamadas recentes) ----------
// miss:true = chamada perdida (fica vermelha)
const CALLS = [
 {n:"Pai (3)", t:"22:10", k:"Perdida", miss:true},
 {n:"Gabi", t:"19:34", k:"Efetuada"},
 {n:"Mãe", t:"Ontem", k:"Perdida", miss:true},
 {n:"Vô", t:"Semanas atrás", k:"Efetuada · número inexistente"},
];

// ---------- NAVEGADOR (páginas salvas) ----------
// Cada item é uma página. Só "titulo" e "url" são obrigatórios; o resto é opcional.
// tema: "claro" ou "escuro". img: foto no topo (ex.: "img/casa.jpg").
// texto: parágrafos. campos: ["Rótulo","Valor"]. destaque: número grande (preço etc.).
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
