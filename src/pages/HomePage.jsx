import "../HomePage.css";
function HomePage() {

  const foods = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <div className="homepage">

      <div className="floating-foods">
        {foods.map((food, index) => {
          return (
            <img
              key={index}
              src={food}
              alt="African food"
              className={`food-img food-${index}`}
            />
          );
        })}
      </div>

      <div className="hero-content">
        <h1>Taste of Africa</h1>
        <p>
          Explore the rich flavors, colors, and traditions of African cuisine.
        </p>

        
      </div>

    </div>
  );
}

export default HomePage;