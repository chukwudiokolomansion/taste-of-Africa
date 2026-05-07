import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FoodForm from "../components/FoodForm";

function EditCategoryPage() {

  const navigate = useNavigate()

  const { categoryId } = useParams() 
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getData()
  }, [])


  const getData = async() => {

    try {
      
      const response = await axios.get( `http://localhost:5005/categories/${categoryId}`)
      

      setName(response.data.name)
      setDescription(response.data.description)
      

    } catch (error) {
      console.log(error)
    }

  }

 const handleFormSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: name,
      description: description
    }

     try {
      // call the API here to edit one project...
      const response = await axios.put(`http://localhost:5005/categories/${categoryId}`, body)

      navigate(`/categories/${categoryId}`)
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteCategory = async() => {
    try {
      // call the API here to delete one task...
      const response = await axios.delete(`http://localhost:5005/categories/${categoryId}`)

      navigate("/categories")
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 



  return (
    <div className="EditCategoryPage">
      <h3>Edit Food Category</h3>

       <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Category</button>
      </form>

      <button onClick={deleteCategory}>Delete Category</button>  
    </div>
  );
}

export default EditCategoryPage;
