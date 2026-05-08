import { Link } from "react-router-dom";

function Navbar() {

  const styles = {

    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      position: "sticky",
      top: "0",
      zIndex: "1000",

      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",

      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",

      borderRadius: "20px",
      margin: "1rem",

      overflow: "hidden"
    },

    logo: {
      fontSize: "2rem",
      fontWeight: "800",

      background:
        "linear-gradient(90deg,#ff6b35,#ffd166,#06d6a0,#ff006e,#ffbe0b)",

      backgroundSize: "300% auto",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",

      animation: "shine 6s linear infinite"
    },

    navLinks: {
      display: "flex",
      gap: "1rem",
      alignItems: "center"
    },

    button: {
      padding: "0.9rem 1.5rem",
      border: "none",
      borderRadius: "50px",

      background:
        "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",

      color: "white",
      fontSize: "1rem",
      fontWeight: "600",

      cursor: "pointer",

      backdropFilter: "blur(10px)",

      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",

      transition: "all 0.4s ease"
    }
  };
  return (
 <>
    
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 0% center;
            }

            100% {
              background-position: 300% center;
            }
          }

          .nav-btn:hover {
            transform: translateY(-4px) scale(1.05);

            background:
              linear-gradient(
                135deg,
                #ff6b35,
                #ffd166,
                #06d6a0
              );

            color: #0f172a;

            box-shadow:
              0 15px 35px rgba(255, 190, 11, 0.35);
          }

          .navbar-glow::before {
            content: "";

            position: absolute;

            width: 250px;
            height: 250px;

            background: rgba(255,255,255,0.08);

            border-radius: 50%;

            top: -120px;
            right: -80px;

            filter: blur(40px);
          }
        `}
      </style>

      <nav
        className="navbar-glow"
        style={styles.navbar}
      >

        <h2 style={styles.logo}>
          Taste of Africa
        </h2>

        <div style={styles.navLinks}>

          <Link to="/">
            <button
              className="nav-btn"
              style={styles.button}
            >
              Home
            </button>
          </Link>

          <Link to="/categories">
            <button
              className="nav-btn"
              style={styles.button}
            >
              Explore Culinary Delights
            </button>
          </Link>

        </div>

      </nav>

    </>
  )
}

export default Navbar