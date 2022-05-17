import { useState, createContext } from "react";
export const CartItemsContext = createContext({
    items:[]
})

export const CartItemsProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const value = {cartItems, setCartItems};
    return (
        <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    )
}