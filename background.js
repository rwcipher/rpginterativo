import OBR from "./vendor/obr-sdk.js";
import { url, ID, DATA, CANAL, CANAL_ESP, MODAL_CONFIG, MODAL_ESPELHO, abrirViewer, abrirEspelho, textoNarracao, novaSessao } from "./comum.js";

OBR.onReady(async () => {
  const meuId = await OBR.player.getId();
  const meuPapel = await OBR.player.getRole();

  // ---------- MESTRE: tornar interativo / configurar ----------
  OBR.contextMenu.create({
    id: `${ID}/menu-config`,
    icons: [
      { icon: url("icons/config.svg"), label: "Tornar interativo",
        filter: { roles: ["GM"], max: 1, every: [{ key: ["metadata", DATA], value: undefined }] } },
      { icon: url("icons/config.svg"), label: "Configurar interação",
        filter: { roles: ["GM"], max: 1 } },
    ],
    onClick(ctx) {
      OBR.modal.open({ id: MODAL_CONFIG, url: url(`config.html?item=${ctx.items[0].id}`), width: 480, height: 700 });
    },
  });

  // ---------- MESTRE: abrir o conteúdo sem restrição ----------
  OBR.contextMenu.create({
    id: `${ID}/menu-abrir-gm`,
    icons: [{ icon: url("icons/abrir.svg"), label: "Abrir (mestre)",
      filter: { roles: ["GM"], max: 1, every: [{ key: ["metadata", DATA], value: undefined, operator: "!=" }] } }],
    onClick(ctx) { abrirViewer(OBR, ctx.items[0].metadata[DATA]); },
  });

  // ---------- PLAYER: só aparece para quem o mestre liberou ----------
  OBR.contextMenu.create({
    id: `${ID}/menu-interagir`,
    icons: [{ icon: url("icons/interagir.svg"), label: "Interagir",
      filter: { roles: ["PLAYER"], max: 1,
        every: [{ key: ["metadata", DATA, "liberados", meuId], value: undefined, operator: "!=" }] } }],
    onClick: (ctx) => interagir(ctx.items[0]),
  });

  async function interagir(item) {
    const dados = item.metadata[DATA];
    const liberacao = dados?.liberados?.[meuId];
    if (!liberacao) return OBR.notification.show("Você não pode usar isso agora.", "WARNING");

    // Regra de distância (0 = sem limite)
    const raio = Number(dados.raio) || 0;
    if (raio > 0) {
      if (!liberacao.token) {
        return OBR.notification.show("O mestre ainda não definiu qual é o seu token.", "WARNING");
      }
      const [meuToken] = await OBR.scene.items.getItems([liberacao.token]);
      if (!meuToken) return OBR.notification.show("Seu token não está nesta cena.", "WARNING");
      const dpi = await OBR.scene.grid.getDpi();
      const dist = Math.hypot(meuToken.position.x - item.position.x, meuToken.position.y - item.position.y) / dpi;
      if (dist > raio + 0.01) {
        return OBR.notification.show(`Chegue mais perto (${dist.toFixed(1)} de ${raio} quadrados).`, "WARNING");
      }
    }

    const nome = await OBR.player.getName();
    await abrirViewer(OBR, dados, { sessao: novaSessao(), espelhar: dados.espelhar || "nao", dono: nome });
    OBR.broadcast.sendMessage(CANAL, { texto: textoNarracao(dados, nome), falar: !!dados.falar }, { destination: "ALL" });
  }

  // ---------- ESPELHO: abrir/fechar a tela de quem está usando ----------
  OBR.broadcast.onMessage(CANAL_ESP, ({ data }) => {
    if (data?.tipo !== "abrir") return;
    if (data.para === "todos" || (data.para === "mestre" && meuPapel === "GM")) abrirEspelho(OBR, data);
  });

  // ---------- TODOS: aviso (e voz, se ligada) quando alguém interage ----------
  OBR.broadcast.onMessage(CANAL, ({ data }) => {
    OBR.notification.show(data.texto, "INFO");
    if (data.falar && "speechSynthesis" in window) {
      try {
        const fala = new SpeechSynthesisUtterance(data.texto);
        fala.lang = "pt-BR";
        speechSynthesis.speak(fala);
      } catch (e) { /* o navegador pode bloquear a voz; o aviso escrito continua */ }
    }
  });
});
