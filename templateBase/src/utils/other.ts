let idCounter = 0;

function generateUniqueId() {
  const parteAleatoria = Math.floor(Math.random() * 1000);
  return `id${++idCounter}_${parteAleatoria}`;
}
export { generateUniqueId };
