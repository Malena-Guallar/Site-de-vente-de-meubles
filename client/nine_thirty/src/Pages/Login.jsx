// Page qui permet à un utilisateur de se logger.

import React, { useState } from "react";

function Login() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  // Handling email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling form submission
  const handleSubmit = async (e, res, req) => {
    e.preventDefault();

    // On fetch les infos de l'api et on les met dans une variable "data"
    const response = await fetch(
      "https://649ada96bf7c145d02399a1b.mockapi.io/furniture/Users"
    );
    let data = await response.json();
    console.log(data);

    // On boucle sur tous les élements du tableau "data" pour récupérer les mails et les mdp qu'on assigne à deux nouvelles variables
    data.forEach((element) => {
      console.log("elements", element.email);
      let emailFromDB = element.email;
      let passwordFromDB = element.password;
      let user = element.name;

      // on vérifie que ce qui a été rentré en input est conforme aux infos de la bdd
      if (email != emailFromDB || password != passwordFromDB) {
        console.log("one of the input is wrong");
      } else if (email === emailFromDB && password === passwordFromDB) {
        console.log("ok");
        setIsLoggedIn(true);
        setUser(user);
      }
    });
  };

  // Form displaying and assigning functions to each input;
  return (
    <div className="flex w-auto h-auto flex-1 flex-col justify-center px-6 py-10 lg:px-8  bg-slate-100/90 border rounded-lg">
      <h2 className="pb-2">Connectez vous à votre compte :</h2>
      {!isLoggedIn ? (
        <div>
          <form className="flex flex-col space-y-6 items-center" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mail
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="email"
                placeholder="..."
                id="emailLogin"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mot de passe
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="password"
                placeholder="..."
                id="passwordLogin"
                require="true"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="">
              <button
                className="flex w-full justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>Hi {user} and welcome </p>
      )}
    </div>
  );
}

export default Login;
