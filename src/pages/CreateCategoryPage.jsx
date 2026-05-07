import { useState } from "react";
import axios from "axios"; // used for calling the API
import { useNavigate } from "react-router-dom";

function CreateCategoryPage() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const body = {
      name: name,
      description: description
    }
    
    try {
      // call the API here to create one category...
      const response = await axios.post("http://localhost:5005/categories", body)
      console.log("new food category created!")

      navigate("/categories")
      
    } catch (error) {
      console.log(error)
     
    }
  };  

  return (
    <div className="CreateCategoryPage">
      <h3>Add Food Category</h3>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCategoryPage;