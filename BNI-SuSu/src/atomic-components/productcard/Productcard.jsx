import React from 'react'
import './productcard.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useCart } from '../../hooks/use.Cart';



export function Productcard({products, image}) {
    const {addToCart} = useCart()

   
  return (
    
        <ul className='products-box'>
            {products.map(product => { 
                return (
                <li className='products' key={product.id}>
                    <img src={image} alt="" />
                    <div className='products-info'>
                        <h2>{product.title}</h2>
                        <p>${product.price.toFixed(2)}</p>
                        <small>{product.info}</small>
                    </div>
                    <div className='products-botton'>
                       <button 
                        onClick={() => {addToCart(product)}} className='btn-shop'>                            
                         <AddShoppingCartIcon sx={{fontSize: 40}} />
                       </button>

                    </div>
                </li>
            )})}
        </ul>
   
  )
}
