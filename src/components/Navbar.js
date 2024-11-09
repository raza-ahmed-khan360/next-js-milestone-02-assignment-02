import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-bold">MyWebsite</h2>
        
        {/* Hamburger Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Navbar Links */}
        <ul className={`md:flex md:space-x-6 absolute md:static w-full md:w-auto ${isOpen ? 'block' : 'hidden'} bg-blue-800 md:bg-transparent text-center`}>
          <li className="py-2 md:py-0"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="py-2 md:py-0"><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="py-2 md:py-0"><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li className="py-2 md:py-0"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
