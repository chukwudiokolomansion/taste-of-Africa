import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import CategoryCard from "../components/CategoryCard";
import "../CategoryListPage.css";
import { HashLoader } from "react-spinners";

function CategoryListPage() {

  const [allCategories, setAllCategories] = useState([]);

  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // call the API here to receive all categories...
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories`);
      console.log(response.data);
      setAllCategories(response.data);

   } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  };  

 const filteredCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!allCategories) 
    return (
    <div className="loader-container">
     <HashLoader color="#ff6b35" size={90} />


      <p className="loading-text">
        Loading delicious African foods...
      </p>

    </div>
  );

 return (
    <div className="category-page">

      <h1 className="category-heading">
        Categories of African Foods
      </h1>

      <p className="category-paragraph">
        Explore the beauty of African cuisine through
        rich flavors, colorful dishes, traditional meals,
        and unforgettable culinary experiences from
        across the continent.
      </p>

      <div className="top-bar">

        <Link to="/categories/create">

          <button className="create-btn">
            Create Food Category
          </button>

        </Link>

        <input
          className="search-input"

          type="text"

          placeholder="Search categories..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <p className="filter-text">
        Showing {filteredCategories.length} categories
      </p>

      <div className="category-grid">

        {filteredCategories.map((category) => (

          <CategoryCard
            key={category.id}
            category={category}
          />

        ))}

      </div>

    </div>
  );
}

export default CategoryListPage;
