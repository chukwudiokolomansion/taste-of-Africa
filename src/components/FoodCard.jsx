import { Link } from "react-router-dom";

function FoodCard(props) {
    return (
      <Link to={`/foods/${food.id}`}>
        
      <div className="FoodCard card">

      <img src={props.food.imageUrl} alt={props.food.name} />


        <h3>{props.food.name}</h3>
        <h4>Description:</h4>
        <p>{props.food.description}</p>
      </div>
       </Link>
    );
  }
  
  export default FoodCard;