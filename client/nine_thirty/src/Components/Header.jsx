import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Identification from "./Identification";
import Admin from "./Admin";

function Header() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <div>
      <Logo />
      <Cart />
      {isAdmin && (
        <Admin />
      )}
      <Identification />
      <Navigation />
    </div>
  );
}

export default Header;
