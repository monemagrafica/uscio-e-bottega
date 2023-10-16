import { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const showCart = () => {
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

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cart: state.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        showCart: showCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
