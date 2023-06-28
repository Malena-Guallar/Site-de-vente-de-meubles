import React, { useState } from "react";


function Login() {
    
    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling form submission
    const handleSubmit = async (e, res, req) => {
        e.preventDefault();

        // On fetch les infos de l'api et on les met dans une variable "data"
        const response = await fetch("https://649ada96bf7c145d02399a1b.mockapi.io/furniture/Users");
        let data = await response.json();
        console.log(data)

        // On boucle sur tous les élements du tableau "data" pour récupérer les mails et les mdp qu'on assigne à deux nouvelles variables
        data.forEach(element => {
            console.log("elements", element.email)
            let emailFromDB = element.email;
            let passwordFromDB = element.password;
            let user = element.name;

            // on vérifie que ce qui a été rentré en input est conforme aux infos de la bdd 
            if (email != emailFromDB || password != passwordFromDB){
                console.log("one of the input is wrong")
            } else if (email === emailFromDB && password === passwordFromDB){
                console.log("ok")
                const loggedUser = email;
                console.log(loggedUser)
            }  
        });
};
    

    // Form displaying and assigning functions to each input; 
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <p class="text-red-100">login</p>
                <input type="email" placeholder="Enter your email" id="email" value={email} onChange={handleEmail}/>
                <input type="password" placeholder="Enter password" id="password" value={password} onChange={handlePassword}/>
                <input type="submit"></input>
            </form>
        </div>
    )
};


export default Login 
