import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Identification() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check user's session status
    const sessionData = sessionStorage.getItem("User");
    if (sessionData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear user's session
    sessionStorage.removeItem("User");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
<<<<<<< HEAD
          <p>Logged in as {sessionStorage.getItem("User")}</p>
=======
          {/* <p>Logged in as {sessionStorage.getItem("User")}</p> */}
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7
          <button onClick={handleLogout}>
            
            <img
          className="h-6"
          src="Logout.png"
          alt="icon logout"
        /> 
             </button>
        </div>
      ) : (
    <Link to="/Login">
      <div>
        <img
          className="h-6"
          src="connection.png"
          alt="icone Log In"
        /> 
      </div>
    </Link>
      )}
     </div>
  )
 
}

export default Identification;
