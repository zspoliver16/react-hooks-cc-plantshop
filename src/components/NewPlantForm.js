import React, { useState } from "react"; 

function NewPlantForm({ setPlants}) {
  const [formData, setFormData] = useState({ name: "", image: "", price: ""}) 

  function handleInputChange(e) { 
    const { name, value } = e.target
    setFormData((prevData) => ({...prevData, [name]: value})) 
  }

  function handleSubmit(e) { 
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",       
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) 
    })
     .then(resp => resp.json())
     .then((data) => {
        setPlants((prevPlants) => [...prevPlants, data])
        setFormData({ name: "", image: "", price: ""})  
      })
      .catch((error) => console.error("Error", error))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant 🍃 </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleInputChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;