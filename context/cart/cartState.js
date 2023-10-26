import { useEffect, useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import { useAuth } from "../authContext";

/**
 * Funzioni per la gestione del carrello
 * @date 24/10/2023 - 12:14:12
 * @description
 * @var initialState
 * stato iniziale del carrello
 * @function addToCart...
 * Funzioni dispatch per il cartReducer
 */
const CartState = ({ children }) => {
  // Gestione localStorage NEXTJS
  const { authData } = useAuth();
  const ISSERVER = typeof window === "undefined";
  const cartFromLocalStorage =
    !ISSERVER && JSON.parse(localStorage.getItem("uscioCart"));

  const initialState = {
    showCart: false,
    fasciaOraria: null,
    cart: cartFromLocalStorage || [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      removeCart(false);
    }
  }, [authData]);

  useEffect(() => {
    localStorage.setItem("uscioCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (datiPanino, id) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...datiPanino,
        idAddedPanino: id,
        quantita: 1,
        salse: [],
      },
    });
  };
  const toggleCart = (statoCart) => {
    dispatch({
      type: "TOGGLE_CART",
      payload: statoCart,
    });
  };
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const changeQuantity = (id, quantita) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        idAddedPanino: id,
        quantita: quantita,
      },
    });
  };
  const changeSalse = (id, salse) => {
    dispatch({
      type: "CHANGE_SALSE",
      payload: {
        idAddedPanino: id,
        salse: salse,
      },
    });
  };
  const removeCart = () => {
    dispatch({
      type: "REMOVE_CART",
    });
  };
  const setNote = (id, note) => {
    dispatch({
      type: "SET_NOTE",
      payload: {
        idAddedPanino: id,
        note: note,
      },
    });
  };
  const setFasciaOraria = (id) => {
    dispatch({
      type: "SET_FASCIA_ORARIA",
      payload: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cart: state.cart,
        addToCart,
        changeQuantity,
        changeSalse,
        removeFromCart,
        toggleCart,
        setNote,
        setFasciaOraria,
        fasciaOraria: state.fasciaOraria,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
