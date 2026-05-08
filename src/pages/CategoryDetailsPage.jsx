import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";

import AddFood from "../components/AddFood";
import FoodCard from "../components/FoodCard";

import "../CategoryDetailsPage.css";
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
    return (
    <div className="loader-container">

     <HashLoader color="#ff6b35" size={90} />

      <p className="loading-text">
        Loading delicious African foods...
      </p>

    </div>
  );
}
 return (
    <div className="category-details-page">

      <div className="category-header">

        <h1 className="category-title">
          {category.name}
        </h1>

        <p className="category-description">
          {category.description}
        </p>

      </div>

      <div className="foods-grid">

        {category.foods &&
          category.foods.map((food) => (

            <div
              key={food.id}
              className="food-wrapper"
            >

              <FoodCard food={food} />

              <button
                className="delete-btn"
                onClick={() => deleteFood(food.id)}
              >
                Delete Food
              </button>

            </div>

          ))}

      </div>

      <div className="add-food-section">

        <AddFood
          categoryId={category.id}
          getData={getData}
        />

      </div>

      <div className="bottom-buttons">

        <Link to="/categories">

          <button className="nav-btn">
            Back to Categories
          </button>

        </Link>

        <Link to={`/categories/edit/${category.id}`}>

          <button className="edit-btn">
            Edit Category
          </button>

        </Link>

      </div>

    </div>
  );
}

export default CategoryDetailsPage;