import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import CategoryCard from "../components/CategoryCard";

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



  if (!allCategories) return <h3>Loading...</h3>; //todo proper loading animation here

  return (
    <div className="CategoryListPage">

    <h1>All African Foods</h1>

      <Link to="/categories/create">
      <button>Create food Category</button>
      </Link>

      <div className="grid">

      {allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category}/>
      })}
      
    </div>

    </div>
  );
}

export default CategoryListPage;
