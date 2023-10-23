function CartReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART": {
      return {
        ...state,
        showCart: action.payload.statoCart || !state.showCart,
      };
    }

    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "REMOVE_CART": {
      localStorage.removeItem("uscioCart");
      return {
        ...state,
        cart: [],
      };
    }
    case "CHANGE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.idAddedPanino === action.payload.idAddedPanino
            ? { ...item, quantita: action.payload.quantita }
            : item
        ),
      };
    }
    case "CHANGE_SALSE": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.idAddedPanino === action.payload.idAddedPanino
            ? { ...item, salse: action.payload.salse }
            : item
        ),
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.idAddedPanino !== action.payload
        ),
      };
    }
    case "SET_NOTE": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.idAddedPanino === action.payload.idAddedPanino
            ? { ...item, note: action.payload.note }
            : item
        ),
      };
    }
    default:
      return state;
  }
}

export default CartReducer;
