# Guia de edição do celular

Tudo se edita no **`conteudo.js`** (GitHub → arquivo → lápis ✏️ → Commit). Fotos e vídeos vão na pasta **`img`**.

## Regras de ouro
1. Cada item fica entre `{ }` e termina com **vírgula** `,`.
2. Textos ficam entre **aspas retas** `"..."`. Aspas dentro do texto: use `“ ”`.
3. Para criar um item novo, **copie um item existente inteiro** (do `{` até o `},`) e altere.
4. Se der erro, o celular mostra a **linha** do problema na tela.
5. Depois do commit: espere o ✅ em Actions e recarregue com Ctrl+Shift+R.

---

## Galeria (`FOTOS`)
**Foto:**
```js
 {id:"praia", img:"img/praia.jpg", title:"Praia", date:"Ano passado", cap:"legenda do Igor", fav:false,
  desc:"O que aparece na foto."},
```
**Vídeo:** igual, trocando `img` por `video` (o `img` vira capa, opcional):
```js
 {id:"aniversario", video:"img/aniversario.mp4", img:"img/aniversario-capa.jpg", title:"Aniversário", date:"Março", dur:"0:32", cap:"", fav:true,
  desc:"Vídeo da festa."},
```
- `id` precisa ser **único** (sem espaço).
- A ordem da lista é a ordem da galeria (o primeiro aparece primeiro).
- Sem `img`, aparece um quadro colorido com o título (use `tone:"#cor1,#cor2"`).

## Mensagens (`THREADS`)
**Nova mensagem numa conversa existente** — dentro de `msgs:[ ... ]`:
```js
   {f:"o", t:"mensagem da outra pessoa"},
   {f:"me", t:"mensagem do Igor"},
   {stamp:"Hoje, 20:15"},                    // data no meio da conversa
   {f:"me", t:"não chegou", nd:true},        // "Não entregue"
```
No grupo da família use o nome: `{f:"Pai", t:"..."}`.

**Nova conversa** — copie um bloco inteiro e ajuste:
```js
 {id:"syx", name:"Syx", color:"#3a4a2a", initial:"S", time:"18:02", sub:"", unread:true,
  msgs:[
   {stamp:"Hoje, 18:00"},
   {f:"o", t:"bora pro bar hoje?"},
   {f:"me", t:"só se você não subir no balcão de novo"},
  ]},
```
- `initial`: letra da bolinha. `color`: cor da bolinha. `unread:true`: pontinho de não lida.
- `draft:"..."` (opcional): mensagem digitada e não enviada.
- `muted:true` (opcional): ícone de silenciado.

## Notas (`NOTES`)
```js
 {id:"senhas", title:"senhas", date:"Semanas atrás", body:[
  "cofre do vô: 0412",
  "wifi da taverna: ordo1234"]},
```
Cada linha do `body` é um parágrafo.

## Gravador (`RECS`)
```js
 {id:"gabi-audio", name:"gabi_bar", date:"Ontem, 23:10", dur:15, lines:[
  [0,"[música alta ao fundo]"],
  [3,"Igor, se você ouvir isso, volta pra mesa!"],
  [10,"[risadas]"]]},
```
`dur` em segundos. Cada linha: `[segundo, "texto"]`. Texto entre `[colchetes]` vira efeito sonoro.

## Telefone (`CALLS`)
```js
 {n:"Gabi", t:"20:41", k:"Perdida", miss:true},
 {n:"Bar do Zé", t:"Ontem", k:"Efetuada · 2 min"},
```
`miss:true` deixa vermelho. A lista aparece na ordem escrita (a primeira em cima).

## Navegador (`SITES`)
```js
 {titulo:"Previsão do tempo", url:"clima.com.br/dracena", hora:"Hoje, 07:00", tema:"claro",
  marca:"Clima Agora", subtitulo:"Dracena, SP",
  manchete:"Chuva forte à noite",
  img:"img/chuva.jpg",
  texto:["Alerta de tempestade a partir das 22h.", "Evite áreas abertas."],
  campos:[["Máxima","31°"],["Mínima","19°"]],
  destaqueRotulo:"Chance de chuva", destaque:"90%",
  aviso:"Defesa Civil: mantenha-se em local seguro."},
```
Só `titulo` e `url` são obrigatórios — use só os campos que quiser. `tema:"escuro"` deixa a página escura. Sem `img`, use `imgTexto:"descrição"` para um quadro de imagem, ou não coloque nenhum dos dois.

## Tela de bloqueio e ícones
```js
const PIN = "1947";
const HORA = "23:58";
const BATERIA = 100;
const NOTIFICACOES = [ {icone:"msg", titulo:"Família Baroni", texto:"14 novas mensagens", hora:"22:14"} ];
const BADGES = {msgs:17, calls:4, gallery:0, notes:0, recs:0, web:0};
```
Os números vermelhos dos ícones (`BADGES`) **não** se atualizam sozinhos: ajuste quando acrescentar mensagens ou chamadas.
