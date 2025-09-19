
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [fromPostcode, setFromPostcode] = useState('');
  const [toPostcode, setToPostcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the postcode search here.
    alert(`Searching for moves from ${fromPostcode} to ${toPostcode}`);
  };

  return (
    <div
      className="relative bg-cover bg-center h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1074')" }}
    >
      <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight animate-fade-in-down">
          Move With Joy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 animate-fade-in-up">
          Experience a seamless, stress-free move with our professional and friendly team. Your new beginning starts here.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-center animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="md:col-span-2">
            <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-1">From</label>
            <input
              id="from"
              type="text"
              value={fromPostcode}
              onChange={(e) => setFromPostcode(e.target.value)}
              placeholder="Enter pickup postcode"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-1">To</label>
            <input
              id="to"
              type="text"
              value={toPostcode}
              onChange={(e) => setToPostcode(e.target.value)}
              placeholder="Enter destination postcode"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div className="md:col-span-1">
             <label htmlFor="submit-btn" className="block text-sm font-semibold text-transparent mb-1 hidden md:block">Search</label>
            <button
              id="submit-btn"
              type="submit"
              className="w-full bg-brand-secondary text-brand-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
