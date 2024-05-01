import React, { useState } from "react";

function NewPlantForm() {

const [ plant, setPlant ] = useState("")
const [ name, image, price ] = plant

function handleChange(event) {
  setPlant(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault()
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {
      'Content-Type': 'apploication/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ plant })
  }).then((resp) => {
    if (resp.ok) {
      resp.json().then((data) => console.log(data))
    } else {
        throw Error('something went wrong')
    }
  }).catch(console.log)
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >
          Name:
        </label>
        <input type="text"
         name="name" 
         placeholder="Plant name"
         value={name}
         onChange={handleChange} />

        <label htmlFor="image" >
          Image:
        </label>
        <input type="text" 
        name="image" 
        placeholder="Image URL"
        value={image}
        onChange={handleChange} />

        <label htmlFor="price" >
          Price:
        </label>
        <input type="number"
         name="price" 
         step="0.01" 
         placeholder="Price"
         value={price}
         onChange={handleChange} />

        <button type="submit" value="Submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
