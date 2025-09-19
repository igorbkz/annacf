
import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time, Every Time',
    description: 'We respect your schedule. Our team is punctual and dedicated to completing your move on time.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No hidden fees. We provide clear, upfront quotes so you know exactly what to expect.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Professional & Insured',
    description: 'Your belongings are in safe hands. Our experienced crew is fully insured for your peace of mind.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-primary">Our Promise</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">Why Move With Us?</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're not just moving boxes, we're moving lives. We're committed to providing a superior moving experience through reliability, care, and outstanding customer service.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-primary mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
