import React from "react";
import netflixLogo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <header>
      <img src={netflixLogo} alt="Logo Netflix" className="netflix-logo" />
    </header>
  );
};

export default Header;
