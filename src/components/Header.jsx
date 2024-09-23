import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Creative UI</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-200">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-blue-200">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
          <Link to="/cart" className="text-white hover:text-blue-200">
            Cart
          </Link>
          <Link to="/profile" className="text-white hover:text-blue-200">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
