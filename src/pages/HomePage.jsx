import "../HomePage.css";

function HomePage() {
  const foods = [
    "https://www.omalichakitchen.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fokra-soup.d8380937.jpg&w=1080&q=75",
    "https://niyis.co.uk/cdn/shop/articles/NIGERIAN_JOLLOF_RICE_b3b0b496-fdc8-4d6e-aca5-86729d12cb78.jpg?v=1766069341",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4xCvZKO9hUdfOTrWlif4F2nVWgB6-uhKBw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8COx6qqwnZt5-PDbvbL_U3AjdZT3RF-KyAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVa9RtKua0S5NQ3O_mHC7tG1V0xyX3UhEPw&s",
    
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
              <img src={foods[3]} alt="African dish" />
            </div>

            <div className="glass-card small-card logo-card">
              <img src={foods[5]} alt="African dish" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
