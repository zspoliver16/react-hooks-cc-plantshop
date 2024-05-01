import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ searching }) {
const [plants, setPlants] = useState([])


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => setPlants(data))
  }, [])

//* This is commented out because it messed everything that I had on the page up, and nothing was rendering after.

  // const filteredPlants = plants.filter((plant) => {
  //   const lowercaseSearch = searching.toLowerCase()
  //   const lowercaseName = plant.name.toLowerCase()
  //   return lowercaseName.includes(lowercaseSearch)
  // })

  // console.log(filteredPlants)

  const plantCards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant}/>
  ))

  return (
    <ul className="cards">
      { plantCards }
    </ul>
  );
}

export default PlantList;
