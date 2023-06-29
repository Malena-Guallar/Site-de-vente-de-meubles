import React, { useEffect, useState } from 'react';
import Furniture from '../Components/Furniture';

function Furnitures () {
    
    const [data, setData] = useState('');

    const url = "https://649ada96bf7c145d02399a1b.mockapi.io/furniture/articles";

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(url)
        .then((response) => {
            const res = response.data;
            console.log("res", res);
            setData(res)
        })
    }


    return (

        <div>
        
            <p>Page Furnitures</p>
            <Furniture type={type} />

        </div>
    );
    
};

export default Furnitures;

// https://649ada96bf7c145d02399a1b.mockapi.io/furniture/articles