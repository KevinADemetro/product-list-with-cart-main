import initialData from "./data.json";

function App() {
  return (
    <div className="App">
      <DessertsSection></DessertsSection>
    </div>
  );
}

function DessertsSection() {
  return (
    <div>
      <h2>Desserts</h2>
      <DessertsGrid />
    </div>
  );
}

function DessertsGrid() {
  const desserts = initialData;

  return (
    <ul className="desserts-grid">
      {desserts.map((dessert) => (
        <li>
          <DessertCard dessert={dessert} />
        </li>
      ))}
    </ul>
  );
}

function DessertCard({ dessert }) {
  return (
    <div className="dessert-card">
      <img src={dessert.image.desktop} alt={dessert.name} />
      <button className="add-to-cart-btn">
        <img src="images/icon-add-to-cart.svg" alt="cart-icon" />
        Add to Cart
      </button>
      <div className="dessert-infos">
        <p>{dessert.category}</p>
        <h6>{dessert.name}</h6>
        <span>{`R$${dessert.price.toFixed(2)}`}</span>
      </div>
    </div>
  );
}
export default App;
