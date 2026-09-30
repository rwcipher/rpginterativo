# Extensão RPG Interativo (GitHub Pages)

Manifest para colocar no Owlbear:
`https://rwcipher.com.br/rpginterativo/manifest.json`

## Arquivos
| Arquivo | Para quê | Mexer? |
|---|---|---|
| `manifest.json` | O Owlbear lê este arquivo | Só se mudar o endereço do site |
| `background.*`, `config.html`, `viewer.html`, `comum.js`, `estilo.css`, `icons/`, `vendor/` | A extensão | Não |
| `conteudos.json` | Lista do que os objetos podem abrir | **Sim**, ao criar conteúdos novos |
| `celular.html` + `conteudo.js` + `img/` | O celular do Igor | `conteudo.js` e `img/` |
| `conteudos/` | Outros conteúdos (ex.: bilhete) | Sim |

## Criar um conteúdo novo
1. Copie a pasta `conteudos/bilhete-exemplo`, renomeie (ex.: `diario-do-vo`) e edite o `index.html`.
2. No `conteudos.json`, adicione uma linha (não esqueça a vírgula na linha de cima):
```json
{ "id": "diario-do-vo", "nome": "Diário do vô", "url": "conteudos/diario-do-vo/index.html" }
```
3. Commit, espere 1–2 min, e ele aparece em "O que abre".

## Se mudar o endereço do site
Troque `https://rwcipher.com.br/rpginterativo/` nas duas linhas do `manifest.json`.
