import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/shop.css';
import { RealTimeContext } from '../Context/RealTimeContext';

// Import images
// Import images
import bannerImg from '../assets/home_banner.jpg';
// const bannerImg = "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"; // Rare Rabbit style fashion banner

const Home = () => {
  // We can use random "Live Viewers" for the home page too
  const { activeViewers } = useContext(RealTimeContext);

  // Simulate total active users across site
  const totalLiveUsers = Object.values(activeViewers).reduce((a, b) => a + b, 0) + 120; // Base 120 + dynamic

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img src={bannerImg} alt="Hero Banner" className="hero-bg" />

        <div className="hero-content">
          <div className="live-badge">
            <span className="live-dot"></span>
            {totalLiveUsers > 0 ? `${totalLiveUsers} shoppers online now` : 'Live Shopping'}
          </div>

          <h1 className="hero-title">Shop the Future of Ease</h1>
          <p className="hero-subtitle">
            Experience real-time fashion with our exclusive collections.
            Premium quality, delivered instantly.
          </p>

          <NavLink to="/products" className="btn btn-primary">
            Explore Collection
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Shipping</h3>
              <p>Get your products delivered in record time with our express logistics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Payment</h3>
              <p>100% secure payments with leading encryption technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Hand-picked products centered around quality and durability.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;