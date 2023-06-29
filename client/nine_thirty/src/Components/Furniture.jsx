import React from 'react';

function Furniture ({ picture, type, description, price, material, size_height, size_width, size_deep }) {

    return (
        <div>
            <p>ceci est un meuble</p>
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