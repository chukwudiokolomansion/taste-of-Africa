import { Link } from "react-router-dom";

function CategoryCard (props) {
  
  return (
    <div className="CategoryCard card">
      <Link to={`/categories/${props.category.id}`}>
        <h3>{props.category.name}</h3>
      </Link>
      <p>{props.category.description}</p>
    </div>
  );
}

export default CategoryCard;