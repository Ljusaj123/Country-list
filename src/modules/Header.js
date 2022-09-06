import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <h1>Where in the world?</h1>
        <div className="header__mode-colors">
          <BsFillMoonFill />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
