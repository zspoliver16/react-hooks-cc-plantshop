import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [searching, setSearching] = useState('')

  function onSearch(search) {
    setSearching(search)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage onSearch={onSearch} />
    </div>
  );
}

export default App;
