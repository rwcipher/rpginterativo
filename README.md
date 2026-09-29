# Celular do Igor — tutorial

Celular interativo de Igor Baroni para abrir no Owlbear Rodeo com a extensão **Sheet from Beyond**.

## O que tem aqui

| Arquivo | Pra que serve | Precisa editar? |
|---|---|---|
| `celular.html` | O celular em si (visual e funcionamento) | Não |
| `conteudo.js` | **Todo o texto**: senha, bateria, mensagens, notas, fotos, áudios, chamadas | **Sim, é aqui que você edita** |
| `img/fundo.jpg` | Papel de parede (Igor e o vô) | Troque o arquivo se quiser |
| `img/janela.jpg` | A última foto da galeria | Troque o arquivo se quiser |

---

## Parte 1 — Subir no GitHub

1. Abra o seu repositório `celular-igor` no GitHub.
2. Se já tiver um `celular.html` antigo lá, pode deixar: o novo vai substituir.
3. Clique em **Add file → Upload files**.
4. Arraste **`celular.html`**, **`conteudo.js`**, **`README.md`** e a **pasta `img` inteira** (dá pra arrastar a pasta direto).
5. Clique em **Commit changes**.
6. Se o Pages ainda não estiver ligado: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
7. Espere 1–2 minutos e abra: `https://rwcipher.github.io/celular-igor/celular.html`
   (troque `rwcipher` pelo seu usuário do GitHub, se for outro).

Se o celular aparecer e a senha **1947** funcionar, a parte do GitHub está pronta.

## Parte 2 — Colocar no Owlbear (Sheet from Beyond)

1. **Ative a extensão na sala:** dentro da sala, clique no menu **"…"** no canto inferior esquerdo → **Extensions** → ligue o **Sheet from Beyond**.
2. **Suba o token do celular** (`00_token_celular.png`) na aba **Characters** do Dock (barra de baixo). A extensão funciona em tokens de personagem, por isso Characters e não Props.
3. **Arraste o token** para o mapa.
4. **Clique com o botão direito** no token → **Add Sheet** → cole o link:
   `https://rwcipher.github.io/celular-igor/celular.html`
5. Para abrir: botão direito no token → **View Sheet**. O celular abre numa janela dentro do Owlbear.

**Para os players conseguirem abrir:** eles precisam da permissão **Character → Update** (configurações da sala → permissões de player). Sem ela, só o mestre abre.

**Dica de cena:** deixe o token escondido (hidden) até a Gabrielle pegar o celular, e só então revele.

---

## Parte 3 — Como editar

Tudo se edita no `conteudo.js`, direto pelo site do GitHub:

1. No repositório, clique em **`conteudo.js`**.
2. Clique no **lápis ✏️** (Edit this file), no canto superior direito do arquivo.
3. Mude o que quiser (exemplos abaixo).
4. Clique em **Commit changes** → **Commit changes**.
5. Espere 1–2 minutos e reabra o celular no Owlbear.

### Regras de ouro

- Edite **só o que está entre aspas** `"assim"`.
- **Não apague** vírgulas `,`, chaves `{ }` nem colchetes `[ ]`.
- Precisa de aspas dentro do texto? Use aspas curvas `“ ”` em vez de `"`.
- Nomes de arquivo diferenciam maiúsculas: `Gabi.jpg` ≠ `gabi.jpg`.

### Exemplos

**Trocar a senha**
```js
const PIN = "1947";
```
→ troque `1947` por outros 4 números. Ajuste a dica em `PIN_HINT` também.

**Mudar bateria, hora ou dia**
```js
const HORA = "23:58";
const DIA = "sábado";
const BATERIA = 100;   // número, sem aspas. 20 ou menos fica vermelho
```

**Mudar ou tirar uma notificação da tela de bloqueio**
```js
const NOTIFICACOES = [
 {icone:"msg", titulo:"Família Baroni", texto:"14 novas mensagens", hora:"22:14"},
];
```
Para tirar uma, apague a linha inteira `{ ... },`. Para chamada, use `icone:"tel"`.

**Número vermelho nos apps**
```js
const BADGES = {msgs:17, calls:4, gallery:0, notes:0, recs:0, web:0};
```

**Adicionar uma mensagem numa conversa** — dentro de `msgs:[ ... ]` da conversa:
```js
{f:"o", t:"texto que a outra pessoa mandou"},
{f:"me", t:"texto que o Igor mandou"},
{stamp:"Hoje, 20:15"},                      // data no meio da conversa
{f:"me", t:"mensagem pro vô", nd:true},    // aparece "Não entregue"
```
No grupo da família, em vez de `"o"` use o nome: `{f:"Pai", t:"..."}`.

**Mudar a mensagem não enviada pra Gabi** — no fim da conversa da Gabi:
```js
draft:"Gabi, obrigado por nunca perguntar da cicatriz..."
```

**Colocar uma foto de verdade na galeria**
1. No GitHub, entre na pasta **`img`** → **Add file → Upload files** → envie a imagem (ex.: `gabi.jpg`) → Commit.
2. No `conteudo.js`, na foto correspondente, adicione `img:"img/gabi.jpg",` logo depois do `id`:
```js
{id:"gabi", img:"img/gabi.jpg", title:"lado esquerdo", ...
```
Sem `img`, a foto aparece como um quadro colorido com a descrição escrita.

**Trocar o papel de parede**
Envie a nova imagem para a pasta `img` com o **mesmo nome** `fundo.jpg` (substitui a antiga). Ou envie com outro nome e mude `const WALL = "img/outro.jpg";`.

**Editar a carta ou a lista** — em `NOTES`, cada linha de `body:[ ... ]` é um parágrafo.

**Editar o áudio do vô** — em `RECS`, cada linha é `[segundo, "texto"]`. Texto entre `[colchetes]` aparece como efeito sonoro.

---

## Deu problema?

- **Celular em branco / não abre:** quase sempre é vírgula ou aspa faltando no `conteudo.js`. No GitHub, abra o arquivo → **History** → veja o que mudou no último commit e corrija. Se quiser, abra o link no navegador, aperte **F12 → Console**: o erro mostra a linha.
- **Erro 404:** o Pages ainda não publicou (espere) ou o nome do repositório/arquivo está diferente.
- **Editei e não mudou no Owlbear:** o GitHub Pages guarda cache por alguns minutos. Espere, ou no token faça **Add Sheet** de novo com `?v=2` no fim do link (`.../celular.html?v=2`, depois `?v=3`...).
- **Foto não aparece:** confira o nome do arquivo e a pasta (`img/nome.jpg`), incluindo maiúsculas.

> ⚠️ O repositório é público: quem abrir o `conteudo.js` no GitHub vê a senha e todo o conteúdo. Não passe o link do repositório para os players — só o link do `celular.html` vai no token.
