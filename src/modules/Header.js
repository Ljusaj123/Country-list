import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

function Header({ setMode, mode }) {
  return (
    <header className="header secondary-background">
      <div className="header__container container">
        <h1>Where in the world?</h1>
        <div
          className="header__mode-colors"
          onClick={() => setMode((prev) => !prev)}
        >
          {mode ? <BsFillMoonFill /> : <IoMdSunny />}

          <p>{mode ? "Dark Mode" : "Light Mode"}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
