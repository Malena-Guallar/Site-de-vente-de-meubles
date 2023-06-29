import React, { useState } from 'react';

function Furniture ({ type, price }) {

    getProducts();

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

// return (
    //     <div>
    //         <p>ceci est un meuble</p>
    //         <img src={picture} alt="products"/>
    //         <h1>{type}</h1>
    //         <p>{description}</p>
    //         <p>{price}</p>
    //         <p>{material}</p>
    //         <ul>
    //             <li>{size_height}</li>
    //             <li>{size_width}</li>
    //             <li>{size_deep}</li>
    //         </ul>
    //         <button>{/*add to cart*/}</button>
    //     </div>
    // );

//picture, type, description, price, material, size_height, size_width, size_deep