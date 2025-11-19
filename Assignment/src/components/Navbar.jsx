import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{ color: "white" }}>MyReactApp</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "black",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;
