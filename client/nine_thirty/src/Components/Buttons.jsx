// Composant enfant qui crée un bouton pour chaque catégorie. Au onclick la fonction filtre est appelée. 

import React from "react";


// Le composant contient 2 props dont une fonction setCategory. 
function Buttons({ setCategory, categories }) {

    return (
        <>
            {/* On boucle sur les catégories définies dans la page Furnitures.  */}
            {categories.map((valeur, id) => {

              return (
                    // Au onclick, on appelle la fonction setCategory et qui va donner un nouvel état à la variable category,
                    // à savoir la catégorie de l'objet en cours. 
                    <button classname="bg-green-100 m-5" onClick={() => setCategory(valeur)} key={id}>
                        {/* Le contenu du button est la catégorie.  */}
                        {valeur}
                    </button> 
                    );

            })}
        </>
      );
}

export default Buttons; 