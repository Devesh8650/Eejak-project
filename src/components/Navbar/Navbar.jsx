import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-l to-blue-700 from-blue-500 text-white px-6 py-2">
      <p className="text-xl font-bold">My App</p>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-200">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
