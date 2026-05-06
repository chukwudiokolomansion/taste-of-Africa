import { Link, useParams } from "react-router-dom";
import AddFood from "../components/AddFood"; 
import FoodCard from "../components/FoodCard"; 
import axios from "axios"; // used for calling the API
import { useEffect, useState } from "react";

function CategoryDetailsPage () {

  const { categoryId } = useParams() 


  const [ category, setCategory ] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive category details...
      const response = await axios.get("http://localhost:5005/categories?_embed=foods")
      console.log(response.data)
      setCategory(response.data)

    } catch (error) {
      console.log(error)
   
    }
  }

  if (!category) return <h3>Loading...</h3> //todo proper loading animation here
  
  return (
    <div className="CategoryDetailsPage">

      <div>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

     
      {/* example of a single FoodCard being rendered */}
      {/* <FoodCard /> */}
      {category.foods.map((food) => {
        return <FoodCard key={food.id} food={food}/>
      })}

      {/* ... form for adding a new food should be rendered here    */}
      <AddTask categoryId={category.id} getData={getData}/>

      <Link to="/categories">
        <button>Back to categories</button>
      </Link>
      
      <Link to={`/categories/edit/${category.id}`}>
        <button>Edit Category</button>
      </Link>      
      
    </div>
  );
}

export default CategoryDetailsPage;
