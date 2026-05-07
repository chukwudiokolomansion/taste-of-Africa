import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import FoodCard from "../components/FoodCard";

function CategoryListPage() {
  const [foods, setFoods] = useState([]);



  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // call the API here to receive all categories...
      const response = await axios.get("http://localhost:5005/categories");
      console.log(response.data);
      setFoods(response.data);
   } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  };  



  if (!foods) return <h3>Loading...</h3>; //todo proper loading animation here

  return (
    <div className="page">
    <h1>All African Foods</h1>



      <Link to="/categories/create">
        <button>Create food Category</button>
      </Link>

      <div className="grid">

      {/* ... for each category render one Foodcard */}
      
    </div>

    </div>
  );
}

export default CategoryListPage;
