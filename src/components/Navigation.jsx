import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heartLogo from '../assets/heart-logo.jpg';
import '../styles/Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src="/images/heart-logo.jpg" className="logo" alt="logo-StandWithUkraine" title="Help Ukraine against Russian aggression" /> */}
          <img src={heartLogo} className="logo" alt="logo-StandWithUkraine" title="Help Ukraine against Russian aggression" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={isActive('/')} to="/" title="Homepage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/about')} to="/about" title="About Iryna">About</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/work')} to="/work" title="Iryna's work">Work</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contact')} to="/contact" title="Contact Iryna">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;