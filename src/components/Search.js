import React from "react";

function Search({ setSearchTerm }) { 
  function handleInputChange(e) { 
    setSearchTerm(e.target.value)
  }


  return (  
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