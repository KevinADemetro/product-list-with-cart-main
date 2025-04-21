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
        <li key={dessert.name}>
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
  const cartItems = initialCart;
  // const cartItems = [];

  function getTotalOrder() {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  }
  return (
    <div className="cart">
      <h4>Your Cart ({cartItems.length})</h4>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.name} />
            ))}
          </ul>
          <dl className="total-order">
            <dt>Order Total</dt>
            <dd>R${getTotalOrder()}</dd>
          </dl>
        </>
      ) : (
        <div className="empty-cart">
          <img
            src="images/illustration-empty-cart.svg"
            alt="illustration-empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <li>
      <div className="item-info">
        <label>{item.name}</label>
        <div className="item-values">
          <span className="quantity">{item.quantity}x</span>
          <span className="price">R${item.price.toFixed(2)}</span>
          <span>R${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
      <button>
        <img src="images/icon-remove-item.svg" alt="X" />
      </button>
    </li>
  );
}
export default App;
