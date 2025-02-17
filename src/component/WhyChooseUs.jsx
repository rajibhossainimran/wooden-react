import React from "react";
import { FaPalette, FaHeadset, FaDollarSign, FaCheckCircle } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaPalette />, title: "Personalised Designs", desc: "Customize wooden design built just for you" },
  { id: 2, icon: <FaHeadset />, title: "100% Technical Assistance", desc: "Expert support from start to finish." },
  { id: 3, icon: <FaDollarSign />, title: "Affordable Cost", desc: "Quality design within your budget" },
  { id: 4, icon: <FaCheckCircle />, title: "3 Years Warranty", desc: "Long-term protection for your investment" },
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold">
        Why Choose <span className="text-red-500">Wooden Housing</span>?
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center py-10">
            <div className="w-16 h-16 flex items-center justify-center bg-red-500 text-white text-3xl rounded-full shadow-lg">
              {feature.icon}
            </div>
            <h3 className="font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
