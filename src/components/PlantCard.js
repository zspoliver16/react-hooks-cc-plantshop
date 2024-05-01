import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant
  const [ stocked, setStocked ] = useState(true)

  function handleStockClick() {
    console.log('stocked')
    setStocked((currentStockedState) => !currentStockedState)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick} className="secondary">Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
