import React, { useState } from "react";

function PlantCard({ plant, handleSoldOut, handleDelete }) {
  const { id, name, image, price, soldOut } = plant
  const [isSoldOut, setIsSoldOut] = useState(soldOut) 
  const [newPrice, setNewPrice] = useState(price) 

  const handleSoldOutClick = () => { 
    setIsSoldOut(true)
    handleSoldOut(id)
  }

  const handlePriceUpdate = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then(res => res.json())
      .then((data) => {
        console.log("Price updated:", data)
      })
    }   

   const handleDeleteClick = () => { 
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
     .then(() => {
      console.log("Plant deleted:", id)
      handleDelete(id)
     })
  }

  return (
    <li className="card" data-testid={`plant-item-${id}`}> 
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${newPrice} </p>    
        {isSoldOut ? (
          <button className="primary">Sold Out </button>
        ) : ( 
          <button onClick={handleSoldOutClick} className="primary">In Stock </button>
        )}
        <input type="number" value={newPrice} onChange={(event) => setNewPrice(event.target.value)} placeholder="Enter New Price" />
        <button onClick={handlePriceUpdate} className="update-button">Update Price </button>
        <button onClick={handleDeleteClick} className="delete-button">Delete Plant 🗑️</button>
    </li>
  );
}

export default PlantCard;