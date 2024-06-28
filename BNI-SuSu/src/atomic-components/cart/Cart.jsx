import React, {useState} from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import Badge from '@mui/material/Badge';
import "./cart.css";
import Img from "../../assets/ticket2.png";

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
      <div className='cart-price'>
        <strong>{title}</strong>
        ${price}
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
  const [cartOpen, setCartopen] = useState(false)
  const widthCartContent = cartOpen ? 400 : 0;
  const openCart = () => {
    setCartopen(true)
    document.body.style.overflow = "hidden";
   };

   const closeCart = ()  => {
    setCartopen(false);
    document.body.style.overflow = "scroll";
   }
  const {cart, clearCart, addToCart,} = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button onClick={openCart} className="cart-button">
        <Badge badgeContent={totalItems} color="error">
        <ShoppingCartIcon  sx={{ fontSize: [40] }} className="btn" />
        </Badge>
      </button>
      <aside style={{width: widthCartContent }} className="cart">
        <div className='cart-header'>
          <div>
        <CloseIcon onClick={closeCart} />
          <h2>Carrito</h2>
          </div>
          <button onClick={clearCart} className="btn-clear">
            <RemoveShoppingCartIcon sx={{ fontSize: [35] }} />
            Vaciar
          </button>
        </div>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}

