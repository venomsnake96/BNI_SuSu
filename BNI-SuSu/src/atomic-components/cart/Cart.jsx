import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import "./cart.css";
import Img from "../../assets/tickets.png";

import { useId } from "react";
import { useCart } from "../../hooks/use.Cart";

function CartItem({ title, price, quantity, addToCart }) {
  return (
    <li>
      <div className="cart-img">
        <img src={Img} alt="img" />
        <div className="cart-img-text">
          <p>Your ticket</p>
        </div>
      </div>
      <div>
        <strong>{title}</strong>-${price}
      </div>
      <footer>
        <p>Cantidad: {quantity}</p>
        <button className='btn-add' onClick={addToCart}>
          <AddIcon sx={{fontSize:[40]}} color='success' />
        </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <ShoppingCartIcon sx={{ fontSize: 40 }} className="btn" />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart scale-up-center">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="btn-clear-cont">
          <button onClick={clearCart} className="btn-clear">
            <RemoveShoppingCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
