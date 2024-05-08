import React from "react";

function Search({ setSearchTerm }) { //define Search as component
  function handleInputChange(e) { //function to handle the input changes and updating state
    setSearchTerm(e.target.value)
  }


  return (   //form for searching plants
    <div className="searchbar"> 
      <label htmlFor="search">Search Plants 🔍:</label>
      <input            
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default Search;