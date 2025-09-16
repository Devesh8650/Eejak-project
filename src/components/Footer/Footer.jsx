import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l to-blue-500 from-blue-400 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">My App</h2>
          <p className="text-sm text-black">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <ul className="flex gap-6 mb-4 md:mb-0">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
