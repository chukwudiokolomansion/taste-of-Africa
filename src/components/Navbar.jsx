import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Taste of Africa</h2>

      <div>
      <Link to="/"> <button>Home</button></Link>
      <Link to="/categories"><button>Food Categories</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;