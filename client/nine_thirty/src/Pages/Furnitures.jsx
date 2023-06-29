import React, { useEffect, useState } from 'react';
import Furniture from '../Components/Furniture';

function Furnitures () {

    const [data, setData] = useState([])
    
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

    return (

        <div>
        
            <p>Page Furnitures</p>

                {data ? (
                    data.map(element => (
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