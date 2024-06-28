import { useReducer, createContext, useContext } from 'react';
import { cartReducer, cartInitialState } from '../../reducers/cart.js';
import { toast } from 'react-toastify';

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
    toast.success(`Tu boleto ${product.title} fue añadido al carrito!`);
  };

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
    toast.error(`Tu boleto ${product.title} se ha removido del carrito`);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.error(`El carrito está vacío`);
  };

  const calculateTotal = () => {
    return state.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return { state, addToCart, removeFromCart, clearCart, calculateTotal };
}

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, calculateTotal } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}