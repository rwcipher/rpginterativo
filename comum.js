// Constantes e funções compartilhadas
// BASE = pasta onde a extensão está publicada (ex.: https://rwcipher.com.br/rpginterativo/)
export const BASE = new URL("./", import.meta.url).href;
export const url = (caminho) => new URL(caminho, BASE).href;
export const ID = "com.rwcipher.interativo";
export const DATA = `${ID}/data`;          // onde a configuração fica guardada no token
export const CANAL = `${ID}/evento`;       // canal de aviso para a sala toda
export const MODAL_CONFIG = `${ID}/config`;
export const MODAL_VIEWER = `${ID}/viewer`;
export const MODAL_ESPELHO = `${ID}/espelho`;
export const CANAL_ESP = `${ID}/espelho`;   // estado da tela de quem está usando

export function abrirViewer(OBR, dados, opts = {}) {
  const q = new URLSearchParams({ src: dados.conteudo, titulo: dados.titulo || "" });
  if (opts.sessao) { q.set("sessao", opts.sessao); q.set("espelhar", opts.espelhar || "nao"); q.set("dono", opts.dono || ""); }
  return OBR.modal.open({ id: MODAL_VIEWER, url: url(`viewer.html?${q}`), width: 360, height: 760 });
}

export function abrirEspelho(OBR, msg) {
  const q = new URLSearchParams({ src: msg.src, titulo: msg.titulo || "", modo: "espelho", sessao: msg.sessao, dono: msg.dono || "" });
  return OBR.modal.open({ id: MODAL_ESPELHO, url: url(`viewer.html?${q}`), width: 360, height: 760 });
}

export const novaSessao = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export function textoNarracao(dados, nome) {
  const base = (dados.narracao || "").trim() || `{player} interagiu com ${dados.titulo || "um objeto"}.`;
  return base.replaceAll("{player}", nome);
}
