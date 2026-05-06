
import { useState } from "react";
import axios from "axios";

function AddFood(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const body = {
      name: name,
      description: description,
      categoryId: props.categoryId
    }
    console.log(body)

    try {
      // call the API here to create one food...
      // the ID of the Category should be part of the food data
      const response = await axios.post("http://localhost:5005/categories", body)
      console.log("new Food was created!")
      props.getData() 
      
    
    } catch (error) {
      console.log(error)
     
    }

  };
  
  return (
    <div className="AddFood">
      <h3>Add New Food</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;