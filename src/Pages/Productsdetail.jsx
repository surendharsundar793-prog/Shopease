import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../Context/Cartcontext";
import { RealTimeContext } from "../Context/RealTimeContext";
import '../Styles/detail.css';

const Productdetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const { addToCart } = useContext(Cartcontext);
  const { activeViewers, stockUpdates } = useContext(RealTimeContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setMainImage(data.thumbnail); // Set initial main image
        setLoading(false);
      })
      .catch(err => setLoading(false));
  }, [id]);

  if (loading || !product) return <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</div>;

  // Real-time data simulation
  const viewers = activeViewers[product.id] || Math.floor(Math.random() * 20) + 5;
  const stock = stockUpdates[product.id] || product.stock;

  // Price Calculation (USD to INR)
  const exchangeRate = 23;
  const priceINR = Math.round(product.price * exchangeRate);
  const discount = product.discountPercentage;
  const oldPriceINR = Math.round(priceINR / (1 - discount / 100));

  // Determine Stock Status Color
  const getStockStatus = (count) => {
    if (count < 10) return { label: `Hurry! Only ${count} left`, color: '#ef4444', bg: '#fee2e2' };
    if (count < 50) return { label: `Low Stock: ${count} units`, color: '#f59e0b', bg: '#fef3c7' };
    return { label: 'In Stock & Ready to Ship', color: '#10b981', bg: '#d1fae5' };
  };

  const stockInfo = getStockStatus(stock);

  return (
    <div className="detail-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a> / <a href="/products">Shop</a> / <span>{product.category}</span>
      </div>

      <div className="product-detail-wrapper">
        {/* Image Section */}
        <div className="detail-image-column">
          <div className="detail-image-section">
            <img src={mainImage || product.thumbnail} alt={product.title} />
            {discount > 0 && <span className="discount-badge">-{Math.round(discount)}%</span>}
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="product-thumbnails">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="detail-info-section">
          <h1 className="detail-title">{product.title}</h1>

          <div className="detail-meta-row">
            <div className="detail-rating">
              <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviews?.length || 0} reviews)</span>
            </div>
            <span className="detail-sku">SKU: {product.sku}</span>
          </div>

          <div className="detail-price-section">
            <div className="current-price">₹{priceINR.toLocaleString('en-IN')}</div>
            {discount > 0 && (
              <div className="old-price-wrapper">
                <span className="old-price">₹{oldPriceINR.toLocaleString('en-IN')}</span>
                <span className="save-badge">Save ₹{(oldPriceINR - priceINR).toLocaleString('en-IN')}</span>
              </div>
            )}
          </div>

          {/* Real-time signals */}
          <div className="realtime-signals">
            <div className="signal-item" style={{ color: stockInfo.color, backgroundColor: stockInfo.bg }}>
              <span className="signal-icon">📦</span> {stockInfo.label}
            </div>
            <div className="signal-item viewer-signal">
              <span className="viewer-dot"></span> {viewers} people are viewing this right now
            </div>
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="product-attributes">
            <div className="attr-row">
              <strong>Brand:</strong> <span>{product.brand || 'Generic'}</span>
            </div>
            <div className="attr-row">
              <strong>Warranty:</strong> <span>{product.warrantyInformation}</span>
            </div>
            <div className="attr-row">
              <strong>Shipping:</strong> <span>{product.shippingInformation}</span>
            </div>
            <div className="attr-row">
              <strong>Availability:</strong> <span>{product.availabilityStatus}</span>
            </div>
          </div>

          <div className="detail-actions">
            <button className="btn-add-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="btn-buy-now">
              Buy Now
            </button>
          </div>

          <div className="safe-checkout">
            <span>🛡️ 100% Secure Checkout</span>
            <span>🚚 Free Shipping over ₹999</span>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="section-title">Customer Reviews</h2>

        {product.reviews && product.reviews.length > 0 ? (
          <div className="reviews-grid">
            {product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">{review.reviewerName.charAt(0)}</div>
                  <div>
                    <h4 className="reviewer-name">{review.reviewerName}</h4>
                    <div className="review-stars">{'★'.repeat(review.rating)}</div>
                  </div>
                  <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-reviews">No reviews yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
};

export default Productdetails;
