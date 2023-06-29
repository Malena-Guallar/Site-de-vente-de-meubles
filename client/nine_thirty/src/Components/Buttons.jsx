import React from "react";


function Buttons({ setCategory, categories }) {

    console.log(categories)

    return (
        <>
            {categories.map((Val, id) => {

              return (
                    <button class="bg-green-100 m-5"
                    onClick={() => setCategory(Val)} key={id}>
                    {Val}
                    </button> );

            })}
        </>
      );
}

export default Buttons; 