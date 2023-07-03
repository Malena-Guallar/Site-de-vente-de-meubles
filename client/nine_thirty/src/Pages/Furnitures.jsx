// Composant parent qui va permettre d'afficher chaque petit composant meuble. 

import React, { useEffect, useState } from 'react';
import Furniture from '../Components/Furniture';
import Buttons from '../Components/Buttons';


function Furnitures () {

    // ici on déclare une variable data qu'on assigne pour le moment à un tableau vide. 
    const [data, setData] = useState([])

    // cette constante va permettre de récupérer les catégories pour chaque meuble présent dans data. 
    const categories = [... new Set(data.map((element) => element.category))]
    
    // Requête Get pour récupérer les données de la bdd et les insérer dans la variable data, soit un tableau d'objets. 
    useEffect(() => {
        const getData = () => {
            fetch("https://649ada96bf7c145d02399a1b.mockapi.io/furniture/articles")
            .then(response => response.json())
            .then(dataLocal => {
                setData(dataLocal);
                console.log(dataLocal)
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
            <p>Filtres : </p>

            {/* Ici on importe le composant Buttons qui permet de sélectionner et d'afficher une catégorie de meuble. */}
            {/* La fonction setCategory est un filtre sur les catégories des objets.  */}
            <Buttons setCategory={(category) => filterItem(category, setData, data)} categories={categories} />

                {/* Pour mapper sur le tableau data on doit d'abord vérifier son existence (peut-être qu'il y a un autre moyen mais on l'a pas trouvé) */}
                {data ? (
                    data.map(element => (
                    // A chaque itération de la boucle sur un objet, on affiche le composant enfant Furniture
                    // en personnalisant ses props avec les données de l'objet concerné. 
                    <Furniture 
                        key={element.id}
                        //picture={element.picture}
                        type={element.type}
                        description={element.description}
                        price={element.price + " €"}
                        material={element.material}
                        size_height={element.size_height}
                        size_width={element.size_width}
                        size_deep={element.size_deep}
                        />
                    ))
                ) : null}
        </div>
    );
    
    
};

export default Furnitures;



// https://649ada96bf7c145d02399a1b.mockapi.io/furniture/articles