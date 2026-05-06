
function FoodCard(props) {
    return (
      <div className="FoodCard card">
        <h3>{props.food.name}</h3>
        <h4>Description:</h4>
        <p>{props.food.description}</p>
      </div>
    );
  }
  
  export default FoodCard;