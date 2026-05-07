
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FoodForm from "../components/FoodForm";

function AddFood(props) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    calories: "",
    protein: "",
    carbs: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
    name: props.name,
    description: props.description,
    categoryId: props.categoryId,
    imageUrl: props.imageUrl,
    calories: props.calories,
    protein: props.protein,
    carbs: props.carbs
    }
    console.log(body)

    try {
      // call the API here to create one food...
      // the ID of the Category should be part of the food data
      const response = await axios.post("http://localhost:5005/foods", formData)
      console.log("new Food was created!")
      props.getData() 

       navigate("/foods");

    
    } catch (error) {
      console.log(error)
     
    }

  };
  
  return (
    <div className="AddFood">
      <h3>Add New Food</h3>
      
     <FoodForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create Food"
        />
    </div>
  );
}

export default AddFood;