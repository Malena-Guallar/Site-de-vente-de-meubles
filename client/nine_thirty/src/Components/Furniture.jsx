// Composant enfant qui va être importé dans la page Furnitures. 

import React from 'react';

// ici on défini toutes les props qui composent chaque produit. 
function Furniture ({ type, price, description, picture, material, size_deep, size_height, size_width }) {

    return (
        <div>
            {/* <p>ceci est un meuble</p> */}
            <img src={picture} alt="products"/>
            <h1>{type}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{material}</p>
            <ul>
                <li>{size_height}</li>
                <li>{size_width}</li>
                <li>{size_deep}</li>
            </ul>
            <button>{/*add to cart*/}</button>
        </div>
    );

};

export default Furniture;