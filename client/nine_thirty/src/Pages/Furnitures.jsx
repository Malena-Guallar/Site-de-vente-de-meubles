// Composant parent qui va permettre d'afficher chaque petit composant meuble.

import React, { useEffect, useState } from "react";
import Furniture from "../Components/Furniture";
import Buttons from "../Components/Buttons";

function Furnitures() {
  // ici on déclare une variable data qu'on assigne pour le moment à un tableau vide.
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // cette constante va permettre de récupérer les catégories pour chaque meuble présent dans data.
  const categories = [...new Set(data.map((element) => element.category))];

  // Requête Get pour récupérer les données de la bdd et les insérer dans la variable data, soit un tableau d'objets.
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:8000/furnitures/articles")
        .then((response) => response.json())
        .then((dataLocal) => {
          setData(dataLocal);
          // console.log(dataLocal);
        });
    };
    getData();
  }, []);

  // Ici on crée la fonction qui va permettre de filtrer les meubles. "curcat" correspond à la catégorie en cours
  // (current category), soit la catégorie de chaque objet du tableau data.
  // Quand la fonction est appelée plus bas, originalData correspond au tableau d'objets data.
  const filterItem = (curcat, setData, originalData) => {
    const newItem = originalData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setData(newItem);
  };

  return (
    <div>
      <p onClick={() => setIsFilterOpen(!isFilterOpen)}>
        Filtres: {isFilterOpen ? "▲" : "▼"}
      </p>
      {isFilterOpen && (
        <div>
          {/* Here you can place the content of your filter */}
          <Buttons
            setCategory={(category) => filterItem(category, setData, data)}
            categories={categories}
          />
        </div>
      )}

      {/* Pour mapper sur le tableau data on doit d'abord vérifier son existence (peut-être qu'il y a un autre moyen mais on l'a pas trouvé) */}
     <div className="flex flex-col justify-center items-center">
        {data
          ? data.map((element) => (
              // A chaque itération de la boucle sur un objet, on affiche le composant enfant Furniture
              // en personnalisant ses props avec les données de l'objet concerné.
              <div className="shadow-lg shadow-slate-200 p-2 m-2 rounded-xl w-2/3">
              <Furniture
                key={element.id}
                picture={element.picture.path}
                type={element.type}
                description={element.description}
                price={element.price + " €"}
                material={element.material}
                size_height={element.size_height}
                size_width={element.size_width}
                size_deep={element.size_deep}
              />
               </div>
            ))
          : null}
     </div>
    </div>
  );
}

export default Furnitures;
