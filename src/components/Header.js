import React from "react";
import Search from "./Search";

function Header({ setSearchTerm }) { //defines Header as component/ renders search component and passed down setSearchTerm as prop
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <Search setSearchTerm={setSearchTerm} /> 
    </header>
  );
}

export default Header;
