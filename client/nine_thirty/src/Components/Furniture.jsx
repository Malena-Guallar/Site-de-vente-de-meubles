// Composant enfant qui va être importé dans la page Furnitures. 

import React, {useState, useEffect} from 'react';
import AddtoCartButton from './AddtoCartButton';

// ici on défini toutes les props qui composent chaque produit. 
function Furniture ({ type, price, description, picture, material, size_deep, size_height, size_width, height, width }) {

    
    const [cart, setCart] = useState([]);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    const handleAddToCart = () => {

            const newItem = { type, price, description, picture };
            setCart([...cart, newItem]);
    }; 

    return (
        <div style={{ height: height, width: width }}>
            {/* <p>ceci est un meuble</p> */}
            <img src={picture} alt="products picture" className='h-3/4 w-full text-center mb-1'/>
            <h1>Type:{type}</h1>
            {/* <p className='truncate'>Description: {description}</p> */}
            <p>Price: {price}</p>
            {/* <p>Material: {material}</p> */}
            <ul>
                {/* <li>Height: {size_height}</li> */}
                {/* <li>Width: {size_width}</li> */}
                {/* <li>Deep: {size_deep}</li> */}
            </ul>
                <AddtoCartButton onClick={handleAddToCart}/>
        </div>
    );

};

export default Furniture;