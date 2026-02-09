import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../Context/Cartcontext.jsx";
import '../Styles/cart.css';
import trashIcon from '../assets/trash.png';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(Cartcontext);

  // Exchange Rate
  const exchangeRate = 83;

  // Calculate totals in INR (Price * Quantity)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity * exchangeRate), 0);
  const shipping = subtotal > 1000 ? 0 : 100; // Free shipping over ₹1000
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
          <h2 className="empty-title">Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img src={item.thumbnail} alt={item.title} className="item-img" />

              <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">₹{Math.round(item.price * exchangeRate).toLocaleString('en-IN')}</p>

                {/* Quantity Controls */}
                <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}
                  >-</button>
                  <span style={{ fontWeight: '600' }}>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}
                  >+</button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  ₹{Math.round(item.price * item.quantity * exchangeRate).toLocaleString('en-IN')}
                </span>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  <img src={trashIcon} alt="Remove" style={{ width: 16, height: 16 }} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
            <span>₹{Math.round(subtotal).toLocaleString('en-IN')}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>

          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{Math.round(total).toLocaleString('en-IN')}</span>
          </div>

          <button className="btn btn-checkout" onClick={() => alert('Simulated Checkout: Processing Payment...')}>
            Proceed to Checkout
          </button>

          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            🔒 Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
