import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ onSearch }) {
  const [ plant, setPlant ] = useState("")
  const [ name, image, price ] = plant
  const [searching, setSearching] = useState('')

  function onSearch(search) {
    setSearching(search)
  }

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={onSearch} />
      <PlantList setPlant={setPlant} plant={plant} searching={searching} />
    </main>
  );
}

export default PlantPage;
