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
                        type={element.type} 
                        price={element.price + " €"}
                        />
                    ))
                ) : null}
        </div>
    );
    
};

export default Furnitures;

// https://649ada96bf7c145d02399a1b.mockapi.io/furniture/articles

// add other props