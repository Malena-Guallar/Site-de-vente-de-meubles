import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';
import Identification from './Identification';

function Header () {
    return (
        <div>
            <Logo />
            <Cart />
            <Identification />
            <Navigation />
        </div>
    );
};

export default Header;