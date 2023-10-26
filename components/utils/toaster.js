const TaddedPanino = (toast) => toast.success("Aggiunto panino al carrello");
const TsuccessLogin = (toast) => toast.success("Benvenuto!");
const TfasciaOrariaNonDisponibile = (toast) =>
  toast.error(
    <div>
      culo <button onClick={() => toast.dismiss()}>g</button>
    </div>,
    {
      position: "bottom-center",
      duration: 5000,
    }
  );

export { TaddedPanino, TsuccessLogin, TfasciaOrariaNonDisponibile };
