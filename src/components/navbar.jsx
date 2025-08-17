import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-cyan-500 hover:via-teal-500 hover:to-emerald-500 text-white p-4 transition-colors duration-300 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
        <h1 className="text-lg font-bold"> STOIC</h1>
        </Link>

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 md:space-y-0 md:space-x-6">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
          <Link to="/signup" className="block hover:text-gray-200">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
