import initialData from "./data.json";

const initialCart = [
  { name: "Waffle with Berries", price: 6.5, quantity: 4 },
  { name: "Red Velvet Cake", price: 4.5, quantity: 1 },
  { name: "Vanilla Bean Crème Brûlée", price: 7.0, quantity: 2 },
];

function App() {
  return (
    <div className="App">
      <DessertsSection />
      <Cart />
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

function Cart() {
  const isCartEmpty = true;
  return (
    <div className="cart">
      <h4>Your Cart(X)</h4>
      {isCartEmpty ? (
        <div className="empty-cart">
          <img
            src="images/illustration-empty-cart.svg"
            alt="illustration-empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default App;
