import Card from "./Card";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Home Page</h1>

      <Card
        title="React Card"
        description="This is a reusable card component using props."
      />

      <Card
        title="Second Card"
        description="You can create multiple cards using props."
      />
    </div>
  );
}

export default Home;
