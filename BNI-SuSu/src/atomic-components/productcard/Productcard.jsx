import React from 'react'
import './productcard.css'
import { AddToCartIcon } from "../icons/icons";


export function Productcard({products}) {
  return (
    <div className='products'>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img 
                    src={product.urlImage} 
                    alt={product.productName} 
                    />
                    <div>
                        <h2>{product.productName}</h2>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
