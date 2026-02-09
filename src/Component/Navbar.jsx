import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cartcontext } from '../Context/Cartcontext';
import '../Styles/navbar.css';

// Assets
import shopIcon from '../assets/shopping-bag.png';
// import userIcon from '../assets/user.png';
import logoIcon from '../assets/basket.png';
import menuIcon from '../assets/menu-bar.png';
import closeIcon from '../assets/close.png';
import cartt from '../assets/basket.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useContext(Cartcontext);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo Section */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logoIcon} alt="ShopEase" style={{ height: '40px' }} />
          <span>ShopEase</span>
        </NavLink>

        {/* Desktop Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {/* Mobile Close Button */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-header">
              <span className="nav-logo">ShopEase</span>
              <img src={closeIcon} alt="Close" onClick={closeMenu} style={{ width: '30px', cursor: 'pointer' }} />
            </div>
          )}

          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            About
          </NavLink>
          {/* <NavLink to="/cart" className="cart-icon-wrapper">
            <img src={shopIcon} alt="Cart" style={{ width: '28px' }} />
            {cart.length > 0 && <span className="cart-badge">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
          </NavLink> */}

          {/* Mobile Only Icons */}
          {isMobileMenuOpen && (
            <div style={{ marginTop: '2rem' }}>
              <NavLink to="/cart" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <img src={cartt} alt="Cart" style={{ width: '24px' }} /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
              </NavLink>
            </div>
          )}
        </div>

        {/* Icons Section (Desktop) */}
        <div className="nav-icons">
          <NavLink to="/cart" className="cart-icon-wrapper">
            <img src={shopIcon} alt="Cart" style={{ width: '28px' }} />
            {cart.length > 0 && <span className="cart-badge">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu" style={{ width: '30px' }} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;