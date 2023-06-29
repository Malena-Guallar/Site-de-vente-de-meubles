import React from 'react';

function Furniture ({ picture, type, description, price, material, size_height, size_width, size_deep }) {

    return (
        <div>
        <div>
            <img class="h-24" src="./Logo930.png"/>
            {/* (A changer pour la src de l'image) */}
            <h1 class="font-bold">{type}</h1>
            <p>Description : {description}</p>
            <p>Prix : {price}</p>
            <p>Matériau : {material}</p>
            <ul>
                <li>Hauteur : {size_height}</li>
                <li>Largeur : {size_width}</li>
                <li>Profondeur :{size_deep}</li>
            </ul>
            <button>{/*add to cart*/}</button>
        </div>
        </div>
    );

};

export default Furniture;
