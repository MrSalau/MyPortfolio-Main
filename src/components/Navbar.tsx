import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50  bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4  py-3 flex justify-between items-center">
        {/* Hamburger - Mobile Only */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links - Centered on Desktop */}
        <div className="hidden md:flex gap-8 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Drop Down */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `text-base font-medium hover:text-blue-600 transition ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
