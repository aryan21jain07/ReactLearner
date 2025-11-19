function Card({ title, description }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid gray",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    marginBottom: "20px",
  },
};

export default Card;
