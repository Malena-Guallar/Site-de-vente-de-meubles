import React from 'react';

function Furniture ({ type, price, description, picture, material, size_deep, size_height, size_width }) {

    return (
        <div>
            <p>ceci est un meuble</p>
            <img src={picture}/>
            <h1 class="font-bold">Type : {type}</h1>
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
    )

};

export default Furniture;