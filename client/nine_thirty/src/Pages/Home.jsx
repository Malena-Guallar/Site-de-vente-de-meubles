import React from "react";
import Subscribe from "./Subscribe";

function Home () {

            <div>
                <p>Home page</p>
            </div>

    const getRequest = () => {

        fetch("https://649ada96bf7c145d02399a1b.mockapi.io/furniture/Users")
        .then((res) => res.json())
        .then((data) => console.log(data))

    }

    getRequest()



    return (
        <>
        <div>coucou pq tu marches pas</div>        
        </>


    )

}

export default Home; 