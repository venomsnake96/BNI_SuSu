import React from 'react'
import './productcard.css'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useCart } from '../../hooks/use.Cart';



export function Productcard({products, image}) {
    const {addToCart, removeFromCart, cart} = useCart()

    const checkProductInCart = produc =>{
        return cart.some(item => item.id === produc.id)
    }
  return (
    
        <ul className='products-box'>
            {products.map(product => { 
                const isProductInCar = checkProductInCart(product)
                return (
                <li className='products' key={product.id}>
                    <img src={image} alt="" />
                    <div className='products-info'>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <small>{product.info}</small>
                    </div>
                    <div className='products-botton'>
                       <button style={{backgroundColor: isProductInCar ? '#cf2030': '#EFB810'}}
                        onClick={() => {isProductInCar ? removeFromCart(product)
                        : addToCart(product)}} className='btn-shop'>
                        {
                            isProductInCar
                            ? <RemoveShoppingCartIcon sx={{fontSize: 40}} />
                            : <AddShoppingCartIcon sx={{fontSize: 40}} />
                        }
                       </button>
                    </div>
                </li>
            )})}
        </ul>
   
  )
}
