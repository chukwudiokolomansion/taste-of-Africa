import "../HomePage.css";

function HomePage() {
  const foods = [
    "https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/9a18e8d0-efc6-4ca6-aa4c-656f7d53cd4e/Recipe-for-Egusi-Soup.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVa9RtKua0S5NQ3O_mHC7tG1V0xyX3UhEPw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4xCvZKO9hUdfOTrWlif4F2nVWgB6-uhKBw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQXWgvhXXn52Kmb3lFWrdd3R_89nzSFOOvA&s",
  ];
  const movingFoods = foods.map((food, index) => ({
    image: food,
    delay: `${index * 2}s`,
  }));

  return (
    <div className="homepage">
      <div className="floating-background">
        {movingFoods.map((food, index) => (
          <img
            key={index}
            src={food.image}
            alt="floating food"
            className="floating-food"
            style={{ animationDelay: food.delay }}
          />
        ))}
      </div>

      <div className="hero-section">
        <div className="hero-left">
          <div className="glass-card score-card">
            <h2>92%</h2>
            <p>Taste Score</p>
          </div>

          <div className="glass-card info-card">
            <img src={foods[0]} alt="African food" />

            <div className="card-content">
              <h3>Authentic African Cuisine</h3>
              <p>Explore African dishes, ingredients, culture, & culinary traditions from across the African continent.</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="main-showcase glass-card">
            <img src={foods[1]} alt="African cuisine" />

            <div className="overlay-content">
              <h1>Taste of Africa</h1>
              <br />
              <h1>Taste of Africa</h1>
               <br />
              <h1>Taste of Africa</h1>

              <p>
                
              </p>
            </div>
          </div>

          <div className="bottom-grid">
            <div className="glass-card small-card">
              <img src={foods[2]} alt="African dish" />
            </div>

            <div className="glass-card small-card logo-card">
              <h2>Taste of Africa</h2>
            </div>

            <div className="glass-card small-card text-card">
              <h3>Traditional Flavors</h3>
              <p>Experience delicious African meals and local delicacies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
