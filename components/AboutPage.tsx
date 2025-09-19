
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-base font-semibold leading-7 text-brand-primary">Our Story</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl">About Move With Joy</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded on the principle that moving should be an exciting new chapter, not a stressful chore, 
                Move With Joy has been dedicated to providing exceptional transportation services with a smile.
            </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
            <img src="https://picsum.photos/1200/600?image=20" alt="Our team" className="rounded-2xl shadow-xl"/>
        </div>
        <div className="max-w-3xl mx-auto mt-16 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-gray-600">
                Our mission is simple: to deliver your belongings safely, efficiently, and with the utmost care. We treat every item as if it were our own, ensuring a smooth transition to your new home or office. We believe in transparent pricing, clear communication, and a friendly approach to make your move a joyful experience.
            </p>
            <h2 className="mt-12 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-gray-600">
                Our crew is the heart of our company. Each member is professionally trained, background-checked, and shares our passion for helping people. From our logistics planners to our movers on the ground, we work together seamlessly to overcome challenges and provide a five-star service every time.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
