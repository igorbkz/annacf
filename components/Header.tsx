
import React, { useState, useRef, useEffect } from 'react';
import { Page, Service } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const services: Service[] = [
  'Residential Moving',
  'Commercial Moving',
  'Packing Services',
  'Storage Solutions',
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setIsServicesOpen(false); 
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavLink: React.FC<{ page: Page; children: React.ReactNode }> = ({ page, children }) => (
    <button
      onClick={() => handlePageChange(page)}
      className={`px-4 py-2 text-md font-medium transition-colors duration-300 ${
        currentPage === page ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'
      }`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handlePageChange('Home')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v5a1 1 0 001 1h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-1-1h-5z" />
          </svg>
          <span className="text-2xl font-bold text-brand-dark">Move With Joy</span>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink page="Home">Home</NavLink>
          <NavLink page="About">About</NavLink>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="px-4 py-2 text-md font-medium text-gray-600 hover:text-brand-primary transition-colors duration-300 flex items-center"
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handlePageChange(service)}
                    className="block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button className="hidden md:block bg-brand-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
