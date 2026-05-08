import { useState } from "react";
import axios from "axios"; // used for calling the API
import { useNavigate } from "react-router-dom";
import "../CreateCategoryPage.css";

function CreateCategoryPage() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const body = {
      name: name,
      description: description,
      imageUrl
    }    
    try {
      // call the API here to create one category...
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/categories`, body)
      console.log("new food category created!")

      navigate("/categories")
      
    } catch (error) {
      console.log(error)
     
    }
  };  

  return (

    <div className="create-category-page">

      <div className="create-category-card">

        <h1 className="create-category-title">
          Add Food Category
        </h1>

        <p className="create-category-text">
          Create beautiful African food categories
          with stunning descriptions and images.
        </p>

        <form
          className="create-category-form"
          onSubmit={handleSubmit}
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

          <div className="form-group">

            <label>Image URL</label>

            <input
              type="text"
              name="imageUrl"

              placeholder="Paste image URL"

              value={imageUrl}

              onChange={(e) =>
                setImageUrl(e.target.value)
              }
            />

          </div>

          <button
            className="submit-btn"
            type="submit"
          >
            Create Category
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateCategoryPage;