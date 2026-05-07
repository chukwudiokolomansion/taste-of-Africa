import { Link } from "react-router-dom";

function FoodCard(props) {
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
        src={props.food.imageUrl}
        alt={props.food.name}
        style={styles.image}
      />
      <Link to={`/foods/${props.food.id}`}>
        <h3>{props.food.name}</h3>
      </Link>
       
        <h4>Description:</h4>
        <p>{props.food.description}</p>
      </div>
    );
  }
  
  
  export default FoodCard;