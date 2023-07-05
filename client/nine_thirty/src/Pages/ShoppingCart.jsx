import React, { useEffect, useState } from "react";

function ShoppingCart() {

    const [cart, setCart] = useState([]); 

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