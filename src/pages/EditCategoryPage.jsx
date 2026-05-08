import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../EditCategoryPage.css";

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
      
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}`)
      

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
      const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}`, body)

      navigate(`/categories/${categoryId}`)
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteCategory = async() => {
    try {
      // call the API here to delete one task...
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}`)

      navigate("/categories")
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 

return (

    <div className="edit-category-page">

      <div className="edit-category-card">

        <h1 className="edit-title">
          Edit Food Category
        </h1>

        <p className="edit-paragraph">
          Update category information, descriptions,
          and manage your African food collections.
        </p>

        <form
          className="edit-form"
          onSubmit={handleFormSubmit}
        >

          <div className="form-group">

            <label>Name</label>

            <input
              type="text"
              name="name"

              placeholder="Enter category name"

              value={name}

              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>Description</label>

            <textarea
              name="description"

              placeholder="Write category description..."

              value={description}

              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>

          <button
            className="update-btn"
            type="submit"
          >
            Update Category
          </button>

        </form>

        <button
          className="delete-btn"
          onClick={deleteCategory}
        >
          Delete Category
        </button>

      </div>

    </div>
  );
}

export default EditCategoryPage;
