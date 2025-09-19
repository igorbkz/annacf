
import React from 'react';

interface ServicesPageProps {
  serviceTitle: string;
}

const serviceDetails: { [key: string]: { description: string; imageUrl: string; features: string[] } } = {
  'Residential Moving': {
    description: "Whether you're moving to a new apartment or a large family home, our residential moving services are designed to handle everything. We take care of the heavy lifting so you can focus on settling in.",
    imageUrl: 'https://picsum.photos/1200/600?image=29',
    features: ['Full-service packing and unpacking', 'Furniture disassembly and reassembly', 'Specialty item handling (pianos, art)', 'Clean trucks with proper equipment']
  },
  'Commercial Moving': {
    description: "Minimize downtime and ensure a smooth transition for your business with our expert commercial moving services. We plan and execute your office move efficiently, keeping your operations on track.",
    imageUrl: 'https://picsum.photos/1200/600?image=12',
    features: ['Office and IT equipment relocation', 'Modular furniture installation', 'Document and inventory management', 'After-hours and weekend scheduling']
  },
  'Packing Services': {
    description: "Save time and protect your belongings with our professional packing services. Our team uses high-quality materials and proven techniques to ensure everything arrives at your destination safe and sound.",
    imageUrl: 'https://picsum.photos/1200/600?image=5',
    features: ['High-quality packing materials', 'Custom crating for fragile items', 'Full or partial packing options', 'Organized, labeled boxes for easy unpacking']
  },
  'Storage Solutions': {
    description: "Need a secure place to store your items? We offer flexible short-term and long-term storage solutions in our clean, climate-controlled facilities. Your belongings are safe with us.",
    imageUrl: 'https://picsum.photos/1200/600?image=17',
    features: ['Climate-controlled units', '24/7 security monitoring', 'Short and long-term options', 'Inventory management']
  }
};


const ServicesPage: React.FC<ServicesPageProps> = ({ serviceTitle }) => {
  const details = serviceDetails[serviceTitle] || serviceDetails['Residential Moving'];

  return (
    <div className="bg-brand-light py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-base font-semibold leading-7 text-brand-primary">Our Services</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl">{serviceTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                {details.description}
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <img src={details.imageUrl} alt={serviceTitle} className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">What's Included?</h2>
                <ul className="space-y-4">
                    {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary flex-shrink-0 mr-3 mt-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
                <button className="mt-10 bg-brand-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Request This Service
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
