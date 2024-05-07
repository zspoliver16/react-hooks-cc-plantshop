import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then((data) => setPlants(data))
}, [])

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <PlantPage plants={plants} searchTerm={searchTerm} setPlants={setPlants} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
