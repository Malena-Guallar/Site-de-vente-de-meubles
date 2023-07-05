import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";


function ShoppingCart() {

    // const [cart, setCart] = useState([]); 

    const {setCart} = useContext(CartContext);
    const {cart} = useContext(CartContext);

    useEffect(() => {
        
        const storedCart = localStorage.getItem('cart');
        if (storedCart){
            setCart(JSON.parse(storedCart))
        }
    });

    return (
        <>
            <h1>Shopping cart</h1>
            <p>{cart.map((item, index) => (
                <p key={index}>
                    {item.type}
                    {item.price}
                </p>
            ))}</p>
        
        </>
    )
}

export default ShoppingCart;