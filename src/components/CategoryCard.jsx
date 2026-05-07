import { Link } from "react-router-dom";

function CategoryCard (props) {
  const styles = {
    card: {
      border: "1px solid #ddd",
      padding: "1rem",
      borderRadius: "10px"
    },

    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px"
    }
  };
 return (
    <div style={styles.card}>

      <img
        src={props.category.imageUrl}
        alt={props.category.name}
        style={styles.image}
      />
      <Link to={`/categories/${props.category.id}`}>
        <h3>{props.category.name}</h3>
      </Link>

      <p>{props.category.description}</p> 
    </div>
  );
}

export default CategoryCard;