import React, {useState} from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import Badge from '@mui/material/Badge';
import "./cart.css";
import Img from "../../assets/ticket2.png";


import { useCart } from "../../hooks/use.Cart";

function CartItem({ title, price, quantity, addToCart, removeFromCart }) {
  return (
    <li>
      <div className="cart-img">
        <img src={Img} alt="img" />
        <div className="cart-img-text">
          <p>Your ticket</p>
        </div>
      </div>
      <footer>
      <div className='cart-price'>
        <strong>{title}</strong>
        <small>${price}</small> 
      </div>
      <div className='quantity-cont'>
        <p>Cantidad: {quantity}</p>
        <button className='btn-add' onClick={addToCart}>
          <AddIcon sx={{fontSize:[40]}} color='success' />
        </button>
        <button className='btn-less' onClick={removeFromCart}>
          <SentimentDissatisfiedIcon sx={{fontSize:[35]}} color='error' />
        </button>
      </div>
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
  const {cart, clearCart, addToCart, removeFromCart} = useCart();
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
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}

