
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import { Page } from './types';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <ServicesSection />
  </>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Residential Moving':
      case 'Commercial Moving':
      case 'Packing Services':
      case 'Storage Solutions':
        return <ServicesPage serviceTitle={currentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans text-brand-dark">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default App;
