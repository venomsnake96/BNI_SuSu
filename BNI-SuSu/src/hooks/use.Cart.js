import { useContext } from "react";
import { CartContext } from "../atomic-components/contex/cart";

export const useCart = () => {
    const cart = useContext(CartContext)

    if (cart === undefined){
        throw new Error('useCart must be used within a CartPrrovider')
    }

    return cart
}