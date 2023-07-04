import React, { useState, useEffect } from "react";

function Login() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = sessionStorage.getItem("User");
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

<<<<<<< HEAD
  // Handling email change
=======
  // Handling email change 
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // Fetch user data based on userId
  const fetchUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/users/${userId}`);

    if (response.ok) {
<<<<<<< HEAD
      window.location.href = '/';
      const data = await response.json();
      setUser(data.name);
      sessionStorage.setItem("User", data.name); 
=======
      const data = await response.json();
    //   console.log(data);
      setUser(data.name);
      sessionStorage.setItem("User", data.name); 
      window.location.href = '/';
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7
    }
  };


  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/users/login", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setIsLoggedIn(true);
      const userId = data.userId;
      fetchUser(userId);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);
    } else {
      console.log("Invalid email or password");
    }

  };


  // Form displaying and assigning functions to each input;
  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <p className="text-red-100">login</p>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <input type="submit" />
        </form>
      ) : (
        <p>Hi {user} and welcome </p>
      )}
    </div>
  );
}

export default Login;
