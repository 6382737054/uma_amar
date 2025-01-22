import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { title: 'Home', path: '/home' },
    { title: 'Testimonial', path: '/testimonial' },
    { title: 'Services', path: '/services' },
    { title: 'Media', path: '/media' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Login', path: '/login' }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300"
              >
                UMA MAHESHWARI
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={({ isActive }) => `
                      relative px-4 py-2 rounded-lg text-sm font-medium 
                      transition-all duration-300 mx-1
                      ${isActive 
                        ? 'text-gray-900 bg-gray-100' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <span className="relative">
                        {item.title}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 
                            transform origin-left transition-transform duration-300" />
                        )}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 
                  hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="px-4 py-2 space-y-1 bg-gray-50 border-t border-gray-100">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) => `
                  relative block px-4 py-2 rounded-lg text-base font-medium 
                  transition-all duration-300 my-1
                  ${isActive 
                    ? 'text-gray-900 bg-gray-100' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                {({ isActive }) => (
                  <div className="flex items-center">
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900 rounded-r" />
                    )}
                    <span className="relative ml-2">
                      {item.title}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Separator Line */}
      <div className="fixed top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-50" />
    </>
  );
};

export default Navbar;