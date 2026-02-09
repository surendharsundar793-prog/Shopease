import React from 'react';
import '../Styles/about.css';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="container about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <h1 className="about-title">Redefining Your Shopping Experience</h1>
                <p className="about-subtitle">
                    At ShopEase, we believe that shopping should be more than just a transaction. It's about discovering products that enhance your lifestyle, delivered with exceptional care.
                </p>
            </div>

            {/* Mission Section */}
            <div className="about-section">
                <div className="about-grid">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="ShopEase Store"
                        className="about-image"
                    />
                    <div className="about-content">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
                        <p>
                            Founded in 2024, ShopEase started with a simple idea: to create an online marketplace that feels as personal and curated as your favorite local boutique.
                        </p>
                        <p>
                            We scour the globe to find unique, high-quality products across fashion, electronics, and home decor. Our team is passionate about design and functionality, ensuring that everything you find on ShopEase meets our rigorous standards.
                        </p>
                        <p>
                            Today, we serve thousands of happy customers, but our mission remains the same: to bring you the best of the world, right to your doorstep.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="about-section">
                <h2 className="section-title">Why Choose ShopEase?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">✨</div>
                        <h3 className="feature-title">Premium Quality</h3>
                        <p className="feature-desc">We partner directly with top manufacturers to ensure every item is authentic and built to last.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3 className="feature-title">Fast Delivery</h3>
                        <p className="feature-desc">With our optimized logistics, your orders arrive safe and sound in record time.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3 className="feature-title">Secure Payments</h3>
                        <p className="feature-desc">Your security is our priority. All transactions are encrypted and 100% safe.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💬</div>
                        <h3 className="feature-title">24/7 Support</h3>
                        <p className="feature-desc">Our dedicated support team is always here to help you with any questions or concerns.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
                <h2 className="cta-title" style={{ color: '#fff' }}>Ready to Explore?</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Join thousands of satisfied customers and find your next favorite item today.</p>
                <NavLink to="/products" className="btn-cta">Start Shopping</NavLink>
            </div>
        </div>
    );
};

export default About;
