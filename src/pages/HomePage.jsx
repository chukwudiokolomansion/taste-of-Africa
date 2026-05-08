import "../HomePage.css";

function HomePage() {
  const foods = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
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
