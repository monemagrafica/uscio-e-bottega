function getQuantita(cart) {
  const q = cart.reduce((acc, curr) => {
    return acc + curr.quantita;
  }, 0);
  return q;
}

export { getQuantita };
