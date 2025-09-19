
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v5a1 1 0 001 1h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-1-1h-5z" />
                </svg>
                <span className="text-2xl font-bold">Move With Joy</span>
            </div>
            <p className="mt-4 text-gray-400">Your trusted partner for a smooth and happy move.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => setCurrentPage('Home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('About')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('Residential Moving')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => setCurrentPage('Residential Moving')} className="text-gray-400 hover:text-white transition-colors">Residential Moving</button></li>
              <li><button onClick={() => setCurrentPage('Commercial Moving')} className="text-gray-400 hover:text-white transition-colors">Commercial Moving</button></li>
              <li><button onClick={() => setCurrentPage('Packing Services')} className="text-gray-400 hover:text-white transition-colors">Packing Services</button></li>
              <li><button onClick={() => setCurrentPage('Storage Solutions')} className="text-gray-400 hover:text-white transition-colors">Storage Solutions</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
                <li>123 Moving Lane, City, ST 12345</li>
                <li>(123) 456-7890</li>
                <li>contact@movewithjoy.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Move With Joy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
