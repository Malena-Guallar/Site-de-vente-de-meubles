// Composant enfant qui va être importé dans la page Furnitures. 

import React from 'react';

// ici on défini toutes les props qui composent chaque produit. 
function Furniture ({ type, price, description, picture, material, size_deep, size_height, size_width }) {

    return (
        <div>
            <img  />{/*photo*/}
            <h1>{/*furniture name*/}</h1>
            <p>{/*description*/}</p>
            <p>{/*material*/}</p>
            <p>{/*price*/}</p>
            <ul>{/*dimensions/sizes*/}</ul>
            <button>{/*add to cart*/}</button>
        </div>
    );
};

export default Furniture;