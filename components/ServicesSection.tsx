
import React from 'react';

const services = [
  {
    name: 'Residential Moving',
    description: 'Seamless moves for homes of any size.',
    imageUrl: 'https://picsum.photos/600/400?image=29',
  },
  {
    name: 'Commercial Moving',
    description: 'Efficient office and business relocations.',
    imageUrl: 'https://picsum.photos/600/400?image=12',
  },
  {
    name: 'Packing Services',
    description: 'Expert packing to protect your valuables.',
    imageUrl: 'https://picsum.photos/600/400?image=5',
  },
  {
    name: 'Storage Solutions',
    description: 'Secure, flexible storage options.',
    imageUrl: 'https://picsum.photos/600/400?image=17',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-primary">What We Do</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">Our Services</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of moving and storage services to meet your specific needs. No job is too big or too small for our dedicated team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src={service.imageUrl} alt={service.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{service.name}</h3>
                <p className="text-gray-200 mt-1">{service.description}</p>
                <button className="mt-4 text-brand-secondary font-semibold group-hover:underline">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
