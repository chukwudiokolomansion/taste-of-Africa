import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">
          Add Food
        </button>

      </form>

    </div>
  );
}

export default AddFood;