import './App.css'

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryListPage from "./pages/CategoryListPage";
import CreateCategoryPage from "./pages/CreateCategoryPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import EditCategoryPage from "./pages/EditCategoryPage";

function App() {

  return (
    <div className="App">
      
    <Navbar />

    <Routes>
      <Route path="/" element={ <HomePage /> } />
      
      <Route path="/category" element={<CategoryListPage />} />
      <Route path="/category/:categoryId" element={<FoodDetailsPage />} />
      
      <Route exact path="/category/create" element={<CreateCategoryPage />} />
      <Route path="/category/edit/:categoryId" element={ <EditCategoryPage /> } />

      {/* error handling routes should be here */}

    </Routes>
    
  </div>
  )
}

export default App
