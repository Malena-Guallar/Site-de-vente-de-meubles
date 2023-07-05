import React from 'react';
import { NavLink } from 'react-router-dom';

function CartLogo() {
    return (
        <NavLink to="/ShoppingCart">
            <div>
                <img className="h-6" src="panier.png" alt="icone panier" />
            </div>
        </NavLink>
    );
};

export default CartLogo;