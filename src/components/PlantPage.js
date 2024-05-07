import React from "react";
import NewPlantForm from "./NewPlantForm"; 
import PlantList from "./PlantList"; 

function PlantPage({ plants, searchTerm, setPlants }) { 
  const handleSoldOut = (plantId) => { 
    console.log(`Mark plant ${plantId} as sold out`) 
  }

  const handleDelete = (id) => { 
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id))
  }

  return ( 
    <main>
      <NewPlantForm setPlants={setPlants} /> 
      <PlantList plants={plants} searchTerm={searchTerm} handleSoldOut={handleSoldOut} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
