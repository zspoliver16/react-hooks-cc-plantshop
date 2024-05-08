import React, { useState, useEffect } from "react"; 
import Header from "./Header";
import PlantPage from "./PlantPage"; //importing modules and components from react

function App() { //defines App and make state variables plants and searchTerm for useState hook
  const [plants, setPlants] = useState([]) 
  const [searchTerm, setSearchTerm] = useState("") 

  useEffect(() => {  //fetch plant date using useEffect hook
    fetch("http://localhost:6001/plants") 
     .then(res => res.json())
     .then((data) => setPlants(data))
  }, []) 

  return ( //renders the Header and Search components
    <div className="app"> 
      <Header setSearchTerm={setSearchTerm} />
      <PlantPage plants={plants} searchTerm={searchTerm} setPlants={setPlants} setSearchTerm={setSearchTerm} /> 
    </div>
  );
}

export default App;
