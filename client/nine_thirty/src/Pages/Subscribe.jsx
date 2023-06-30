// Page qui permet l'inscription d'un nouvel utilisateur. 

import React, { useState } from "react";


function Subscribe() {
    
    // Ici on déclare plusieurs variables et on leur attribue un état par défaut. On crée également les fonctions
    // "set" qui vont permettre de modifier cet état. 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    // Idem pour vérifier si le formulaire a été soumis et pour la vérification d'erreurs. 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Ici on crée les fonctions qui permettent de récupérer la valeur rentrée dans chaque input du formulaire. 
    const handleEmail = (e) => {
        setEmail(e.target.value); // on set l'état de la const email à la valeur de l'input
        setSubmitted(false); // le formulaire reste non soumis car les inputs ne sont pas tous remplis. 
    };

    // Handling name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling surname change
    const handleSurname = (e) => {
        setSurname(e.target.value);
        setSubmitted(false);
    };

    // Handling password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling password confirmation change
    const handlePasswordConfirmation = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling form submission
    const handleSubmit = (e, res, req) => {
        e.preventDefault();
        console.log(name, email, surname, password, confirmPassword);

        // On vérifie que tous les champs sont remplis, auquel cas un message d'erreur s'affichera. 
        if (name === '' || email === '' || surname === ''|| password === '' || confirmPassword === ''){
            setError(true);

        // Password verification - idem ici on aura une erreur si les mots de passe ne sont pas identiques. 
        } else if (password != confirmPassword) {
            setError(true);
            console.log("ca marche ap")

        // Si tous les champs sont remplis correctement alors on modifie l'état de soumission du formulaire à true ;
        } else {
            setSubmitted(true);
            setError(false);

            // Requête Post pour inscrire le nouvel utilisateur dans la bdd. 
            fetch('https://649ada96bf7c145d02399a1b.mockapi.io/furniture/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, surname, email, password})
            })
            .then(res => res.json())
            .then(res => console.log(JSON.stringify(res)), setSubscribed(true))
            .catch(error => console.log(error))
        }
    }


    // Form displaying and assigning functions to each input; 
    return (

        <div>
        {/* Pour inscrire des fonctions en JS dans les div on le fait entre {} */}
        {!subscribed ? ( 
                <form onSubmit={handleSubmit}>
                    <p class="text-red-100">subscription</p>
                    <input type="email" placeholder="Enter your email" id="email" value={email} onChange={handleEmail}/>
                    <input type="text" placeholder="Enter your name" id="name" value={name} onChange={handleName}/>
                    <input type="text" placeholder="Enter your surname" id="surname" value={surname} onChange={handleSurname}/>
                    <input type="password" placeholder="Enter password" id="password" value={password} onChange={handlePassword}/>
                    <input type="password" placeholder="Confirm password" id="confirmPassword" value={confirmPassword} onChange={handlePasswordConfirmation}/>
                    <input type="submit"></input>
                </form>
        ) : (
                <p>Thank you for your registration !</p>
                )}
        </div>
    );
};


export default Subscribe 
