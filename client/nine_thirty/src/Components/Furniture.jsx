// Composant enfant qui va être importé dans la page Furnitures.

import React, { useState, useEffect, useContext } from "react";
import AddtoCartButton from "./AddtoCartButton";
import { CartContext } from "../App";

// ici on défini toutes les props qui composent chaque produit.
function Furniture({
  type,
  price,
  description,
  picture,
  material,
  size_deep,
  size_height,
  size_width,
  height,
  width,
}) {
  const { setCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  // const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    const newItem = { type, price, description, picture };
    setCart([...cart, newItem]);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
};
  return (
    
    <div style={{ height: height, width: width }}>
      {/* <p>ceci est un meuble</p> */}
      <img
        src={picture}
        alt="products picture"
        className="h-3/4 w-full text-center mb-1"
      />
      <h1>Type:{type}</h1>
      {/* <p className='truncate'>Description: {description}</p> */}
      <p>Price: {price}</p>
      {/* <p>Material: {material}</p> */}
      <ul>
        {/* <li>Height: {size_height}</li> */}
        {/* <li>Width: {size_width}</li> */}
        {/* <li>Deep: {size_deep}</li> */}
      </ul>
      <AddtoCartButton onClick={handleAddToCart} />
      {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold">You added {type} to cart!</p>
                        <button
                            className="bg-[#2E2E68] text-white px-4 py-2 rounded mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
    </div>
  );
}

export default Furniture;
