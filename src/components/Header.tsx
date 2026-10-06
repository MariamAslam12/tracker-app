import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-900 text-white relative">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-slate-800 px-4 pt-2 pb-4 flex flex-col space-y-3 border-t border-slate-700">
          <a
            href="#features"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#contact"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};