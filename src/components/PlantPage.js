import React from "react";
import NewPlantForm from "./NewPlantForm"; 
import PlantList from "./PlantList"; 

function PlantPage({ plants, searchTerm, setPlants }) { //define PlantPage as a component
  const handleSoldOut = (plantId) => {  //callback for handling the plants being sold out
    console.log(`Mark plant ${plantId} as sold out`) 
  }

  const handleDelete = (id) => { //callback function used for updating state of plant array  deleted
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id))
  }

  return ( //renders NewPlantForm for adding plants to PlantList
    <main>
      <NewPlantForm setPlants={setPlants} /> 
      <PlantList plants={plants} searchTerm={searchTerm} handleSoldOut={handleSoldOut} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;