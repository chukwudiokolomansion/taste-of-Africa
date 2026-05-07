import { Link, useParams, useNavigate } from "react-router-dom";
import AddFood from "../components/AddFood"; 
import FoodCard from "../components/FoodCard"; 
import axios from "axios"; // used for calling the API
import { useEffect, useState } from "react";

function CategoryDetailsPage () {

  const { foodId } = useParams();

  const navigate = useNavigate();


  const [food, setFood] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive category details...
      const response = await axios.get( `http://localhost:5005/foods/${foodId}`)
      console.log(response.data)
      setFood(response.data)

    } catch (error) {
      console.log(error)
   
    }
  }

const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5005/foods/${foodId}`)

      navigate("/foods")
    } catch (error) {
      console.log(error)
    }
  };

  if (!food) return <h3>Loading...</h3> //todo proper loading animation here
  
  return (
    <div className="CategoryDetailsPage">

           
      {/* example of a single FoodCard being rendered */}
      {/* <FoodCard /> */}
      {/*food.foods.map((food) => {
       { return <FoodCard key={food.id} food={food}/>
      })}*/}

      {/* ... form for adding a new food should be rendered here    */}
     {/*<AddFood categoryId={category.id} getData={getData}/>*/}


      <Link to="/categories">
        <button>Back to categories</button>
      </Link>

       <img src={food.imageUrl} alt={food.name} />

      <h1>{food.name}</h1>

      <p>{food.description}</p>

      <div>
        <p>Calories: {food.calories}</p>
        <p>Protein: {food.protein}g</p>
        <p>Carbs: {food.carbs}g</p>
      </div>

      <button onClick={handleDelete}>Delete</button>
      
      <Link to={`/foods/${food.id}/edit`}>
        <button>Edit</button>
      </Link>
     
      
    </div>
  );
}

export default CategoryDetailsPage;
