import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RealTimeContext } from "../Context/RealTimeContext";
import '../Styles/product.css';

const ProductCard = ({ product }) => {
  const { activeViewers } = useContext(RealTimeContext);
  // Get random viewer count for this product ID, fallback to 0
  const viewers = activeViewers[product.id] || 0;

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="card-image-wrapper">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="card-details">
        <h3 className="card-title">{product.title}</h3>

        <div className="card-meta">
          <span className="card-price">₹{Math.round(product.price * 23).toLocaleString('en-IN')}</span>

          {viewers > 10 && (
            <div className="card-viewers">
              <span className="viewer-dot"></span>
              {viewers} viewing
            </div>
          )}
        </div>

        {/* Optional: Add "Add to Cart" button here directly? 
            For now, clicking the card goes to details as per original flow. 
        */}
      </div>
    </Link>
  );
};

export default ProductCard;
