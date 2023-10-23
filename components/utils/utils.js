/**
 * Funzioni generiche
 * @date 23/10/2023 - 18:09:04
 *
 * @param {*} cart
 * dati carrello
 * @returns {*}
 */

function getQuantita(cart) {
  const q = cart.reduce((acc, curr) => {
    return acc + curr.quantita;
  }, 0);
  return q;
}

export { getQuantita };
