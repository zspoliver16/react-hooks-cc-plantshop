import React from "react";
import PlantCard from "./PlantCard"; 

function PlantList({ plants, searchTerm, handleSoldOut, handleDelete }) { //define PlantList as a component
  const filterPlants = plants.filter((plant) => //filters and displays a list of plant cards from search term
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ul className="cards"> 
      {filterPlants.map((plant) => (  //map thru filtered plants and render PlantCard components
        <PlantCard key={plant.id} plant={plant} handleSoldOut={handleSoldOut} handleDelete={handleDelete}/>
      ))} 
      </ul>
  );
}

export default PlantList;