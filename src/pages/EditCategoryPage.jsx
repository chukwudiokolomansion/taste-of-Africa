import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FoodForm from "../components/FoodForm";

function EditCategoryPage() {

  const navigate = useNavigate()

  const { foodId } = useParams() 
  
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    description: ""
  });

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {

    try {
      
      const response = await axios.get( `http://localhost:5005/foods/${foodId}`)
      

      setFormData(response.data)
      console.log(response.data)
      

    } catch (error) {
      console.log(error)
    }

  }

 const handleSubmit = async (updatedFood) => {
    try {
      await axios.put(
        `http://localhost:5005/foods/${foodId}`,
        updatedFood
      );

      navigate(`/foods/${foodId}`);
    
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteCategory = async() => {
    try {
      // call the API here to delete one food...
      const response = await axios.delete(`http://localhost:5005/foods/${foodId}`)
      navigate(`/foods/${foodId}`);
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 

  return (
    <div className="EditCategoryPage">
      <h3>Edit Food Category</h3>

      <FoodForm
        initialData={formData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditCategoryPage;
