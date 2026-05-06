import './App.css'

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryListPage from "./pages/CategoryListPage";
import CreateCategoryPage from "./pages/CreateCategoryPage";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import EditCategoryPage from "./pages/EditCategoryPage";

function App() {

  return (
    <div className="App">
      
    <Navbar />

    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/categories" element={<CategoryListPage />} />
      <Route path="/categories/:categoryId" element={<CategoryDetailsPage />} />
      <Route exact path="/categories/create" element={<CreateCategoryPage />} />
      <Route path="/categories/edit/:categoryId" element={ <EditCategoryPage /> } />

      {/* error handling routes should be here */}

    </Routes>
    
  </div>
  )
}

export default App
