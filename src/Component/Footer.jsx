import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    {/* Brand Section */}
                    <div className="footer-section">
                        <h3>ShopEase</h3>
                        <p className="footer-text">
                            Transforming your shopping experience with premium products and real-time updates.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <div className="footer-links">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/products" className="footer-link">Shop</Link>
                            <Link to="/cart" className="footer-link">Cart</Link>
                            <Link to="/about" className="footer-link">About Us</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h3>Support</h3>
                        <div className="footer-links">
                            <Link to="/faq" className="footer-link">FAQ</Link>
                            <Link to="/shipping" className="footer-link">Shipping & Returns</Link>
                            <Link to="/contact" className="footer-link">Contact Us</Link>
                            <Link to="/terms" className="footer-link">Terms of Service</Link>
                        </div>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="footer-section">
                        <h3>Stay Connected</h3>
                        <p className="footer-text">
                            Subscribe to get the latest updates and offers.
                        </p>
                        {/* Add Newsletter Form Here Later */}
                        <div className="footer-socials">
                            {/* Simulated Social Icons */}
                            <div className="social-icon">F</div>
                            <div className="social-icon">T</div>
                            <div className="social-icon">I</div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
