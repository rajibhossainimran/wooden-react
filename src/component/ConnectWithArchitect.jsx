import React from 'react';
import project1 from '../assets/images/ar-1.svg';
import project2 from '../assets/images/ar-2.svg';
import project3 from '../assets/images/ar-3.svg';
import project4 from '../assets/images/ar-4.svg';
const ConnectWithArchitect = () => {
  const steps = [
    {
      title: 'Client Consultation',
      description: 'Our team visits your location to discuss your requirements, expectations, design ideas, and budget, ensuring we fully understand your vision.',
      imgSrc: project1, 
    },
    {
      title: 'Design and Floor Plan Presentation',
      description: 'We share reference designs for wooden resorts, including detailed floor plans and 3D drawings, to give you a clear picture of the project.',
      imgSrc: project4, 
    },
    {
      title: 'Materials & Specifications',
      description: 'We work with you to select the perfect materials-laminates, veneers, metal strips, glass, paints, and fabrics-to bring your design to life.',
      imgSrc: project2,
    },
    {
      title: 'Execution & Delivery',
      description: 'Our team manages the entire construction process, from material procurement to the smooth coordination of skilled professionals, ensuring your project is completed on time and to the highest standards.',
      imgSrc: project3,
    },
  ];

  return (
    <div className="bg-white py-8 px-4 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center">
        How to Connect with <span className="text-red-500">Our Architect?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <img 
              src={step.imgSrc} 
              alt={step.title} 
              className="w-full object-cover"
            />
            <div className=" flex items-center justify-center">
              <div className=" text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithArchitect;
