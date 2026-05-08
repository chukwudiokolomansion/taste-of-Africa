import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../AddFood.css";

function AddFood(props) {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      imageUrl,
      description,
      categoryId: props.categoryId
    };

    console.log(body);

    try {

      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/foods`,
        body
      );

      console.log("New food was created!");

      props.getData();

     

    } catch (error) {
      console.log(error);
    }
  };

 return (
    <div className="add-food-container">

      <h3 className="add-food-title">
        Add New Food
      </h3>

      <p className="add-food-paragraph">
        Share delicious African meals, recipes,
        and traditional dishes with beautiful images.
      </p>

      <form
        className="add-food-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>Name</label>

          <input
            type="text"
            name="name"

            placeholder="Enter food name"

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

            placeholder="Describe the food..."

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
          Add Food
        </button>

      </form>

    </div>
  );
}


export default AddFood;