import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import AddFood from "../components/AddFood";
import FoodCard from "../components/FoodCard";

function CategoryDetailsPage() {

  const { categoryId } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    getData();
  }, [categoryId]);

  const getData = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}?_embed=foods`
      );

      setCategory(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteFood = async (foodId) => {
    try {

      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/foods/${foodId}`
      );

      getData();

    } catch (error) {
      console.log(error);
    }
  };

  if (!category) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="CategoryDetailsPage">

      <div>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      {category.foods &&
        category.foods.map((food) => (
          <div key={food.id}>

            <FoodCard food={food} />

            <button onClick={() => deleteFood(food.id)}>
              Delete Food
            </button>

          </div>
        ))}

      <AddFood
        categoryId={category.id}
        getData={getData}
      />

      <Link to="/categories">
        <button>Back to Categories</button>
      </Link>

      <Link to={`/categories/edit/${category.id}`}>
        <button>Edit Category</button>
      </Link>

    </div>
  );
}

export default CategoryDetailsPage;