import { Link, useParams, useNavigate } from "react-router-dom";
import AddFood from "../components/AddFood";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import { useEffect, useState } from "react";

function CategoryDetailsPage() {

  const { categoryId } = useParams();
  const { foodId } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    getData();
  }, [categoryId]);

  const getData = async () => {
    try {

      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}?_embed=foods`);
        
        console.log(response.data);

      setCategory(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (!category) return <h3>Loading...</h3>;

  return (
    <div className="CategoryDetailsPage">

      <div>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      {category.foods &&
        category.foods.map((food) => {
          return (
            <FoodCard
              key={food.id}
              food={food}
            />
          );
        })}

      <AddFood
        categoryId={category.id}
        getData={getData}
      />

      <Link to="/categories">
        <button>Back to categories</button>
      </Link>

      <Link to={`/categories/edit/${category.id}`}>
        <button>Edit categories</button>
      </Link>

    </div>
  );
}

export default CategoryDetailsPage;