import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, Calendar, BarChart2, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">LocalConnect</Link>
        <div className="nav-links">
          <Link to="/" className="nav-item"><BarChart2 size={18} /> Dashboard</Link>
          <Link to="/feed" className="nav-item"><Home size={18} /> Feed</Link>
          <Link to="/issues" className="nav-item"><AlertCircle size={18} /> Issues</Link>
          <Link to="/events" className="nav-item"><Calendar size={18} /> Events</Link>
          <Link to="/market" className="nav-item"><ShoppingBag size={18} /> Market</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
