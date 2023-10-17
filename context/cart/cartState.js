import { useEffect, useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";

const ISSERVER = typeof window === "undefined";
const cartFromLocalStorage =
  !ISSERVER && JSON.parse(localStorage.getItem("uscioCart"));

const CartState = ({ children }) => {
  const initialState = {
    showCart: true,
    cart: cartFromLocalStorage || [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (datiPanino, id) => {
    const arrayFromSalse = datiPanino.ingredients.Salse.map((item) => {
      return item;
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...datiPanino,
        idAddedPanino: id,
        quantita: 1,
        salse: arrayFromSalse,
      },
    });
  };
  const toggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
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

  const setNote = (note) => {
    dispatch({
      type: "SET_NOTE",
      payload: {
        note: note,
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("uscioCart", JSON.stringify(state.cart));
  }, [state.cart]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
