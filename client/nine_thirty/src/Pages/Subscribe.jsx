import React, { useState } from "react";


function Subscribe() {
    
    // States for registration
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
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

        if (name === '' || email === '' || surname === ''|| password === '' || confirmPassword === ''){
            setError(true);

        // Password verification
        } else if (password != confirmPassword) {
            setError(true);
            console.log("ca marche ap")

        } else {
            setSubmitted(true);
            setError(false);

            fetch('https://649ada96bf7c145d02399a1b.mockapi.io/furniture/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, surname, email, password})
            })
            .then(res => res.json())
            .then(res => console.log(JSON.stringify(res)))
            .catch(error => console.log(error))
        }
    }


    // Form displaying and assigning functions to each input; 
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <p class="text-red-100">subscription</p>
                <input type="email" placeholder="Enter your email" id="email" value={email} onChange={handleEmail}/>
                <input type="text" placeholder="Enter your name" id="name" value={name} onChange={handleName}/>
                <input type="text" placeholder="Enter your surname" id="surname" value={surname} onChange={handleSurname}/>
                <input type="password" placeholder="Enter password" id="password" value={password} onChange={handlePassword}/>
                <input type="password" placeholder="Confirm password" id="confirmPassword" value={confirmPassword} onChange={handlePasswordConfirmation}/>
                <input type="submit"></input>
            </form>
        </div>
    )
};


export default Subscribe 
