import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Where in the world?</h1>
        <div className="mode-colors">
          <BsFillMoonFill />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
