import React from "react";
import PlantCard from "./PlantCard"; 

function PlantList({ plants, searchTerm, handleSoldOut, handleDelete }) { 
  const filterPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ul className="cards"> 
      {filterPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} handleSoldOut={handleSoldOut} handleDelete={handleDelete}/>
      ))} 
      </ul>
  );
}

export default PlantList;
